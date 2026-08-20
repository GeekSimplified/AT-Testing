window.AT_QUESTIONS = window.AT_QUESTIONS || {};
window.AT_QUESTIONS.narrator = [
  {
    question: "Which keyboard shortcut starts or stops Windows Narrator from anywhere in Windows?",
    options: ["Ctrl + Windows key + Enter", "Windows key + N", "Alt + Windows key + Enter", "Ctrl + Alt + N"],
    correctIndex: 0,
    explanation: "Ctrl + Windows key + Enter toggles Narrator on or off."
  },
  {
    question: "What is the default \"Narrator key\" used as a modifier for most Narrator commands?",
    options: ["Caps Lock (can be changed to Insert)", "Tab", "Windows key", "Scroll Lock"],
    correctIndex: 0,
    explanation: "Caps Lock is the default Narrator key; users can switch it to Insert in Narrator's settings, especially if they also use another screen reader."
  },
  {
    question: "Which single key immediately stops Narrator from speaking?",
    options: ["Ctrl", "Esc", "Spacebar", "Shift"],
    correctIndex: 0,
    explanation: "Pressing Ctrl interrupts and silences current speech."
  },
  {
    question: "Which statement about Narrator's availability is correct?",
    options: [
      "It is built into Windows and requires no separate installation",
      "It must be purchased separately from the Microsoft Store",
      "It only works with Microsoft 365 subscriptions",
      "It is only available on Windows Server editions"
    ],
    correctIndex: 0,
    explanation: "Narrator ships as part of Windows at no additional cost."
  },
  {
    question: "Narrator's \"Scan mode\" is most similar in purpose to what feature in NVDA and JAWS?",
    options: [
      "Browse mode / virtual cursor navigation of web pages and documents",
      "A high-contrast display theme",
      "A dictation and voice-typing mode",
      "A macro recorder for scripting"
    ],
    correctIndex: 0,
    explanation: "Scan mode lets users navigate web content and documents with single keys and arrow keys, conceptually similar to NVDA's browse mode or JAWS's virtual cursor."
  },
  {
    question: "Which browser has historically had the most complete, well-supported experience with Narrator?",
    options: ["Microsoft Edge", "Internet Explorer 8", "Opera", "A generic text-only browser"],
    correctIndex: 0,
    explanation: "Microsoft has prioritized Narrator compatibility with Edge, its own browser."
  },
  {
    question: "Recent versions of Windows added which enhancement to Narrator's voice options?",
    options: [
      "Natural, more human-sounding voices (on-device/neural voices)",
      "The ability to translate speech into sign language video",
      "Support for whistling alerts instead of speech",
      "Removal of all voice customization options"
    ],
    correctIndex: 0,
    explanation: "Windows 11 introduced natural voices for Narrator, offering more human-like speech than the older default voices."
  },
  {
    question: "Which of the following can Narrator output to, in addition to speech?",
    options: ["A connected braille display", "A connected printer only", "A fax machine", "A separate magnifier device"],
    correctIndex: 0,
    explanation: "Narrator supports braille display output alongside synthesized speech."
  },
  {
    question: "What do Narrator's verbosity settings control?",
    options: [
      "How much detail is announced, such as links, headings, and text formatting",
      "The volume of the computer's system sounds only",
      "Whether Narrator can be used with a mouse",
      "The screen resolution"
    ],
    correctIndex: 0,
    explanation: "Verbosity settings let a user tune how much extra information (formatting, hyperlinks, etc.) Narrator announces."
  },
  {
    question: "Which settings can typically be adjusted for Narrator's synthesized speech?",
    options: ["Rate (speed), pitch, and volume", "Only volume", "Only rate", "None of these are adjustable"],
    correctIndex: 0,
    explanation: "Narrator's speech settings allow adjusting rate, pitch, and volume independently."
  },
  {
    question: "The \"Narrator cursor\" is best described as:",
    options: [
      "A cursor Narrator uses to read and interact with content, which can be linked or unlinked from the system focus",
      "The visible mouse pointer arrow only",
      "A cursor that only appears in Magnifier",
      "A cursor exclusive to touchscreen devices"
    ],
    correctIndex: 0,
    explanation: "Narrator maintains its own cursor for navigating content, which can track (or be independent of) the system's keyboard focus."
  },
  {
    question: "Where in Windows would a trainer go to enable Narrator on the sign-in screen for a client?",
    options: [
      "Sign-in accessibility options in Settings",
      "The client's email account settings",
      "The router's admin page",
      "Task Manager's Startup tab"
    ],
    correctIndex: 0,
    explanation: "Windows provides sign-in accessibility options so tools like Narrator can be available before a user logs in."
  },
  {
    question: "Why might a trainer recommend Caps Lock over Insert as the Narrator key for a particular client?",
    options: [
      "If the client doesn't also use another screen reader whose key conflicts with Caps Lock",
      "Caps Lock always produces faster speech",
      "Insert is not a valid option in any version of Windows",
      "Caps Lock disables all other keyboard shortcuts"
    ],
    correctIndex: 0,
    explanation: "The choice mainly matters to avoid key conflicts with other assistive technology (e.g., NVDA or JAWS, which also default to Insert) that might be installed on the same machine."
  },
  {
    question: "What is Narrator Home, which appears when Narrator starts?",
    options: [
      "A quick-start screen offering a tutorial and access to settings/commands",
      "A separate paid add-on",
      "A file storage location for documents",
      "A antivirus scanning tool"
    ],
    correctIndex: 0,
    explanation: "Narrator Home is shown on startup and provides orientation, a tutorial option, and quick access to settings."
  },
  {
    question: "True or False: Narrator can announce text formatting details such as bold or italic when the setting is enabled.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "With the appropriate verbosity setting, Narrator can announce formatting attributes like bold and italic."
  }
];
