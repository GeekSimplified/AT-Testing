window.AT_QUESTIONS = window.AT_QUESTIONS || {};
window.AT_QUESTIONS.jaws = [
  {
    question: "Which key is the default \"JAWS key\" used as a modifier for most commands?",
    options: ["Insert", "Caps Lock only", "Windows key", "F2"],
    correctIndex: 0,
    explanation: "Insert is the default JAWS key for most JAWS commands (JAWS also recognizes Caps Lock in some configurations)."
  },
  {
    question: "Which command starts \"Say All\", reading continuously from the current position?",
    options: ["Insert + Down Arrow", "Insert + Up Arrow", "Insert + Home", "Insert + End"],
    correctIndex: 0,
    explanation: "Insert + Down Arrow starts Say All, reading continuously until stopped."
  },
  {
    question: "Which single key stops JAWS from speaking immediately?",
    options: ["Ctrl", "Esc", "Tab", "Alt"],
    correctIndex: 0,
    explanation: "Pressing Ctrl interrupts current speech, consistent with the convention used by NVDA as well."
  },
  {
    question: "Which command opens the Headings List while browsing a document or web page?",
    options: ["Insert + F6", "Insert + F5", "Insert + F7", "Insert + F3"],
    correctIndex: 0,
    explanation: "Insert + F6 opens the Headings List."
  },
  {
    question: "Which command opens the Links List?",
    options: ["Insert + F7", "Insert + F6", "Insert + F5", "Insert + F1"],
    correctIndex: 0,
    explanation: "Insert + F7 opens the Links List."
  },
  {
    question: "Which command opens the Form Fields List?",
    options: ["Insert + F5", "Insert + F6", "Insert + F7", "Insert + F4"],
    correctIndex: 0,
    explanation: "Insert + F5 opens the Form Fields List, showing all interactive fields on the page."
  },
  {
    question: "Which command opens JAWS Help / the keystrokes reference?",
    options: ["Insert + F1", "Insert + H", "Insert + F9", "Insert + Esc"],
    correctIndex: 0,
    explanation: "Insert + F1 opens context-sensitive JAWS Help, including relevant keystrokes."
  },
  {
    question: "What is the \"virtual PC cursor\" in JAWS?",
    options: [
      "A cursor JAWS uses to navigate rendered web/document content, separate from the physical system cursor",
      "A cursor used exclusively for editing spreadsheets",
      "A setting that disables the physical mouse",
      "A cursor that only appears when a braille display is connected"
    ],
    correctIndex: 0,
    explanation: "The virtual cursor lets JAWS users navigate the rendered content of a page or document independently of where the actual system focus is."
  },
  {
    question: "In browse mode, which single letter key commonly jumps to the next heading, matching a convention shared with NVDA?",
    options: ["H", "N", "G", "T"],
    correctIndex: 0,
    explanation: "H moves to the next heading in JAWS's virtual cursor navigation, the same convention used by NVDA."
  },
  {
    question: "Who currently publishes JAWS for Windows?",
    options: ["Vispero (formerly Freedom Scientific)", "Microsoft", "NV Access", "Apple"],
    correctIndex: 0,
    explanation: "JAWS is published by Vispero, the parent company that also owns the Freedom Scientific brand."
  },
  {
    question: "What allows advanced users or trainers to customize JAWS behavior for specific applications?",
    options: [
      "JAWS scripting, which can create application-specific customizations",
      "JAWS cannot be customized beyond its default settings menu",
      "Only Microsoft can modify JAWS behavior",
      "Editing the Windows registry is the only supported method"
    ],
    correctIndex: 0,
    explanation: "JAWS supports a scripting language that allows deep customization of how it behaves in specific applications."
  },
  {
    question: "Which of the following is a JAWS feature aimed at making otherwise inaccessible PDFs readable?",
    options: [
      "Convenient OCR",
      "Deep Freeze",
      "Quick Draw",
      "Auto Caption"
    ],
    correctIndex: 0,
    explanation: "Convenient OCR lets JAWS run optical character recognition on image-based or inaccessible PDF content so it can be read aloud."
  },
  {
    question: "Which of the following can JAWS output to, in addition to speech?",
    options: ["A connected braille display", "A fax machine only", "A dedicated braille printer only, with no display support", "Nothing besides speech"],
    correctIndex: 0,
    explanation: "JAWS supports a wide range of connected braille displays alongside its speech output."
  },
  {
    question: "Licensing-wise, how does JAWS differ from NVDA?",
    options: [
      "JAWS is a commercial, licensed product, while NVDA is free and open-source",
      "Both are free and open-source",
      "JAWS is free, while NVDA requires a paid license",
      "Neither requires any license"
    ],
    correctIndex: 0,
    explanation: "JAWS requires a purchased or subscription license, unlike NVDA, which is free."
  },
  {
    question: "Why is it important for a trainer to confirm which cursor (PC cursor vs. virtual/JAWS cursor) a JAWS user is currently in?",
    options: [
      "Because navigation commands and expected behavior differ depending on which cursor is active",
      "It never matters; both cursors behave identically",
      "Because it changes the color of the display",
      "Because it determines which braille display is connected"
    ],
    correctIndex: 0,
    explanation: "Commands and expected results can differ between the JAWS/virtual cursor (for browsing rendered content) and the PC cursor (for direct application interaction), so trainers need to help users recognize which mode they're in."
  }
];
