# AT Testing

A lightweight, screen-reader-accessible website for testing assistive technology (AT) trainers'
knowledge of nine topics:

- Windows Magnifier
- Windows Narrator
- NVDA Screen Reader
- JAWS for Windows
- ZoomText
- Fusion
- iOS VoiceOver
- Android TalkBack
- Common Windows Keyboard Commands (copy/paste and other everyday shortcuts)

Each topic has its own 15-question multiple-choice test. A trainer answers every question on
one page, submits, and immediately sees a score, pass/fail result, and an explanation for every
question. Question and answer order are shuffled on every attempt, a study mode is available for
ungraded review, past attempts are saved on-device, and results can be printed for a record.

## ⚠️ Content is a draft — please review before real use

The 135 questions in `data/*.js` were drafted as a starting point based on general product
knowledge. They have **not been verified against current official vendor documentation** for
every product/platform and version, and exact keyboard shortcuts and gestures in particular can
change between software releases. Before using this to formally evaluate trainers:

1. Check each question (especially keyboard shortcuts) against the current official docs for the
   product version your organization actually supports.
2. Fix or remove anything inaccurate or outdated.
3. Consider having a trainer who is expert in each product proofread that product's file.

Confidence is generally higher for Magnifier, Narrator, NVDA, JAWS, VoiceOver, and the Windows
keyboard commands (well-documented, widely-used shortcuts/gestures) and lower for ZoomText,
Fusion, and TalkBack, where more of the questions are conceptual rather than shortcut/gesture-
specific — deliberately, to reduce the risk of stating a wrong keystroke or gesture. TalkBack in
particular varies more than VoiceOver across Android versions and device manufacturers, so treat
its questions as an even rougher starting point.

## How it works

- Plain HTML/CSS/JavaScript, no build step, no backend, no external dependencies.
- `index.html` lists the nine topics; each links to `quiz.html?product=<id>`.
- `quiz.html` reads the `product` query parameter, loads that product's question bank from
  `js/products.js` / `data/questions-<id>.js`, and renders the whole test as one accessible form.
- Scoring, pass/fail (default 80% threshold, configurable per product), and per-question
  explanations are all computed client-side in `js/quiz.js`. Nothing is ever sent to a server.
- Each attempt shuffles both the question order and each question's answer order, so retaking a
  test (or comparing notes with a co-worker) doesn't just reward memorized positions. The
  underlying question banks are untouched — only the presentation order is randomized per load.
- **Study mode** (`quiz.html?product=<id>&mode=study`, linked from the homepage and from the top
  of every test) shows all questions with the correct answer and explanation up front, ungraded,
  for review before taking the real test.
- **Test history**: after each graded attempt, a record (product, score, pass/fail, optional
  trainer name, timestamp) is saved to the browser's `localStorage` via `js/history-store.js` —
  see "Test history and privacy" below for exactly what that means.
- **Printing**: after finishing a test, "Print my results" opens the browser print dialog with a
  print-only header (trainer name if entered, product, date) and the full per-question review,
  using a dedicated print stylesheet in `css/styles.css` (`@media print`) that hides navigation
  and interactive controls.
- **Dark mode**: the "Dark mode" switch in the header (present on every page) toggles a black
  background/light text theme, saved to `localStorage` (`js/theme.js`) so it persists across
  visits and pages. A small inline script in each page's `<head>` applies the saved theme before
  the page paints, to avoid a flash of the wrong theme. Printing always uses the light palette
  regardless of the on-screen theme — see the `@media print` block in `css/styles.css`.

## Editing or adding questions

Each product's questions live in their own file, e.g. `data/questions-nvda.js`:

```js
window.AT_QUESTIONS.nvda = [
  {
    question: "Which key is the default \"NVDA key\"?",
    options: ["Insert (can also be set to Caps Lock)", "Tab", "Windows key", "F1"],
    correctIndex: 0,
    explanation: "Insert is the default NVDA key..."
  },
  // ...
];
```

- `correctIndex` is the zero-based index into `options` for the right answer.
- Questions can be added, removed, or reordered freely — the test adapts automatically.
- To change the number of questions shown or the pass threshold, edit the matching entry in
  `js/products.js` (`questionCount`, `passThreshold`).

## Test history and privacy

Past attempts are saved only with the browser's built-in `localStorage`, scoped to this site's
origin on that one browser/device:

- Nothing is sent to any server — there is no backend at all.
- History does **not** sync across devices or browsers, and is lost if the user clears their
  browser data for this site.
- Anyone using the same browser profile on the same device can see (and clear) that history at
  `history.html` — there is no per-user login or separation. If multiple trainers share one
  computer, treat the trainer-name field as self-reported, not verified identity.
- Trainers can clear their own history at any time from `history.html`.

If you need results that persist centrally, are tied to verified identities, or are visible to a
supervisor across devices, that requires adding a real backend — see "Possible future additions".

## Accessibility notes

This site was built with screen reader and keyboard use as a first-class requirement, not an
afterthought:

- Semantic structure: a `<fieldset>`/`<legend>` per question, native `<input type="radio">`
  options with associated `<label>`s — no custom widgets that need extra ARIA to behave like
  native controls.
- Full keyboard operability: every control is reachable and operable with Tab/Shift+Tab and
  arrow keys; there is a visible focus indicator (`:focus-visible` outline) throughout.
- A "Skip to main content" link for keyboard/screen reader users to bypass the header.
- Unanswered questions on submit produce an accessible error summary (`role="alert"`) with links
  that jump to and focus each unanswered question, rather than a silent or color-only warning.
- Per-question and overall results are announced as text (not color alone) — "Correct" /
  "Incorrect: the correct answer was…" plus an explanation, and a pass/fail statement.
- No timers — trainers can take as long as they need.
- Relative (`rem`) units throughout so the page respects the user's browser font-size settings
  and zoom without breaking layout.

Please still test with your organization's actual screen reader/magnifier combination before
relying on this for real evaluations — automated review and one developer's manual testing can't
catch everything.

## Running it locally

No build step is required. Any static file server works, for example:

```bash
npx serve .
```

Or simply open `index.html` directly in a browser (some browsers restrict local `file://`
script loading — a local server avoids that).

## Deploying with GitHub Pages

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`,
   folder `/ (root)`.
4. Save — GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

## Possible future additions (not built yet)

- Centrally storing/reporting results across devices and trainers (would require a backend, and a
  decision about where trainer data is stored and who can see it — the current `localStorage`
  approach is explicitly per-device and unauthenticated, see "Test history and privacy" above).
- Per-organization editable question banks via an admin UI instead of editing JS files directly.
- Drawing a random subset of questions per attempt, rather than always showing all of them
  (currently all questions are shown, just reordered).
