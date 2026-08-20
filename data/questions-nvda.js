window.AT_QUESTIONS = window.AT_QUESTIONS || {};
window.AT_QUESTIONS.nvda = [
  {
    question: "Which key is the default \"NVDA key\" used as a modifier for most commands?",
    options: ["Insert (can also be set to Caps Lock)", "Tab", "Windows key", "F1"],
    correctIndex: 0,
    explanation: "Insert is the default NVDA key. Users can add Caps Lock as an alternate NVDA key in settings."
  },
  {
    question: "Which command starts \"Say All\", reading continuously from the current position?",
    options: ["NVDA + Down Arrow", "NVDA + Up Arrow", "NVDA + Home", "NVDA + Page Down"],
    correctIndex: 0,
    explanation: "NVDA + Down Arrow begins Say All, reading continuously until stopped or the end of the document."
  },
  {
    question: "Which single key stops NVDA from speaking immediately?",
    options: ["Ctrl", "Esc", "Alt", "Tab"],
    correctIndex: 0,
    explanation: "Pressing Ctrl interrupts current speech."
  },
  {
    question: "Which key pauses and resumes speech without fully stopping it?",
    options: ["Shift", "Ctrl", "Alt", "Spacebar"],
    correctIndex: 0,
    explanation: "Shift pauses speech; pressing Shift again resumes from where it left off."
  },
  {
    question: "Which command opens the Elements List (headings, links, landmarks, etc.) in browse mode?",
    options: ["NVDA + F7", "NVDA + F1", "NVDA + F2", "NVDA + Tab"],
    correctIndex: 0,
    explanation: "NVDA + F7 opens the Elements List, letting users filter and jump to headings, links, form fields, and landmarks."
  },
  {
    question: "Which command toggles between browse mode and focus mode?",
    options: ["NVDA + Spacebar", "NVDA + B", "NVDA + M", "NVDA + Enter"],
    correctIndex: 0,
    explanation: "NVDA + Spacebar switches between browse mode (for reading/navigating) and focus mode (for interacting directly with controls)."
  },
  {
    question: "In browse mode, which single letter key commonly jumps to the next heading on a web page?",
    options: ["H", "N", "T", "G"],
    correctIndex: 0,
    explanation: "H moves to the next heading; Shift + H moves to the previous heading. This convention is shared with several other screen readers."
  },
  {
    question: "In browse mode, which single letter key commonly jumps to the next link?",
    options: ["K", "L", "N", "F"],
    correctIndex: 0,
    explanation: "K jumps to the next link in browse mode."
  },
  {
    question: "How does a user quit NVDA?",
    options: [
      "NVDA + Q, then confirm the prompt",
      "Alt + F4 only, with no confirmation",
      "It cannot be closed once started",
      "Ctrl + Shift + Esc"
    ],
    correctIndex: 0,
    explanation: "NVDA + Q opens a confirmation dialog; confirming it exits NVDA."
  },
  {
    question: "Which command opens the NVDA menu?",
    options: ["NVDA + N", "NVDA + M", "NVDA + Esc", "NVDA + Tab"],
    correctIndex: 0,
    explanation: "NVDA + N opens the NVDA menu, giving access to preferences, tools, and help."
  },
  {
    question: "Who develops and publishes NVDA, and under what licensing model?",
    options: [
      "NV Access, as free and open-source software",
      "Microsoft, as a paid Windows add-on",
      "Vispero, as a subscription-only product",
      "Apple, bundled only with macOS"
    ],
    correctIndex: 0,
    explanation: "NVDA is developed by NV Access and distributed as free, open-source software, which distinguishes it from commercial screen readers like JAWS."
  },
  {
    question: "What does the NVDA Speech Viewer do?",
    options: [
      "Displays on-screen text showing what NVDA is currently speaking",
      "Records screen video with captions",
      "Converts speech to a downloadable audio file automatically",
      "Displays a live magnified view of the cursor"
    ],
    correctIndex: 0,
    explanation: "Speech Viewer (Tools menu) shows NVDA's spoken output as text on screen, useful for trainers demonstrating or verifying behavior."
  },
  {
    question: "What does the NVDA Braille Viewer do?",
    options: [
      "Shows on-screen what would be displayed on a connected braille display",
      "Translates screen text into an audio braille beep pattern",
      "Prints documents in braille automatically",
      "Only works when a braille display is physically connected"
    ],
    correctIndex: 0,
    explanation: "Braille Viewer shows the braille output on screen even without a physical braille display connected, which is useful for training and demonstration."
  },
  {
    question: "How can NVDA's functionality be extended beyond its built-in features?",
    options: [
      "Through community-created add-ons",
      "NVDA cannot be extended in any way",
      "Only by editing the Windows registry",
      "By purchasing official Microsoft plug-ins"
    ],
    correctIndex: 0,
    explanation: "NVDA supports add-ons created by the community that extend or customize its behavior for specific applications or needs."
  },
  {
    question: "Which browsers have historically had strong, well-tested support with NVDA?",
    options: ["Firefox, Chrome, and Edge", "Only Internet Explorer", "Only Safari", "NVDA does not work with any browser"],
    correctIndex: 0,
    explanation: "NVDA is commonly tested and used with Firefox, Chrome, and Edge, with Firefox historically having especially strong standards support."
  }
];
