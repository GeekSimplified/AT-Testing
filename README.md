# AT Testing

A lightweight, screen-reader-accessible website for testing assistive technology (AT) trainers'
knowledge of six products:

- Windows Magnifier
- Windows Narrator
- NVDA Screen Reader
- JAWS for Windows
- ZoomText
- Fusion

Each product has its own 15-question multiple-choice test. A trainer answers every question on
one page, submits, and immediately sees a score, pass/fail result, and an explanation for every
question.

## ⚠️ Content is a draft — please review before real use

The 90 questions in `data/*.js` were drafted as a starting point based on general product
knowledge. They have **not been verified against current official vendor documentation** for
every product and version, and exact keyboard shortcuts in particular can change between
software releases. Before using this to formally evaluate trainers:

1. Check each question (especially keyboard shortcuts) against the current official docs for the
   product version your organization actually supports.
2. Fix or remove anything inaccurate or outdated.
3. Consider having a trainer who is expert in each product proofread that product's file.

Confidence is generally higher for Magnifier, Narrator, NVDA, and JAWS (well-documented,
widely-used keyboard shortcuts) and lower for ZoomText and Fusion, where more of the questions
are conceptual rather than shortcut-specific — deliberately, to reduce the risk of stating a
wrong keystroke.

## How it works

- Plain HTML/CSS/JavaScript, no build step, no backend, no external dependencies.
- `index.html` lists the six products; each links to `quiz.html?product=<id>`.
- `quiz.html` reads the `product` query parameter, loads that product's question bank from
  `js/products.js` / `data/questions-<id>.js`, and renders the whole test as one accessible form.
- Scoring, pass/fail (default 80% threshold, configurable per product), and per-question
  explanations are all computed client-side in `js/quiz.js`. Nothing is sent to a server, and no
  scores are stored — this is a knowledge check, not a tracked assessment system. If you need to
  record results, see "Possible future additions" below.

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

- Centrally storing/reporting results (would require a backend and a decision about where
  trainer data is stored).
- Per-organization editable question banks via an admin UI instead of editing JS files directly.
- Randomizing question order or drawing a random subset per attempt.
