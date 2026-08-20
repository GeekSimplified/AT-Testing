window.AT_QUESTIONS = window.AT_QUESTIONS || {};
window.AT_QUESTIONS.voiceover = [
  {
    question: "With VoiceOver on, what does a single tap on an item do?",
    options: [
      "Selects the item and speaks it, without activating it",
      "Activates the item immediately",
      "Deletes the item",
      "Nothing happens on a single tap"
    ],
    correctIndex: 0,
    explanation: "A single tap moves VoiceOver's focus to the item under your finger and speaks it, but does not activate it — that requires a separate double-tap."
  },
  {
    question: "How do you activate the currently selected item (equivalent to a regular tap when VoiceOver is off)?",
    options: ["Double-tap anywhere on the screen", "Triple-tap the item", "Swipe up on the item", "Shake the device"],
    correctIndex: 0,
    explanation: "Double-tapping anywhere on the screen activates whatever item VoiceOver currently has selected."
  },
  {
    question: "How do you move to the next item on screen with VoiceOver?",
    options: ["Swipe right with one finger", "Swipe left with one finger", "Swipe down with one finger", "Double-tap with two fingers"],
    correctIndex: 0,
    explanation: "A one-finger swipe (flick) right moves to the next item; swiping left moves to the previous item."
  },
  {
    question: "What does a two-finger tap do while VoiceOver is speaking?",
    options: ["Pauses or resumes speech", "Restarts the device", "Opens the app switcher", "Turns VoiceOver off"],
    correctIndex: 0,
    explanation: "A two-finger tap toggles pausing and resuming VoiceOver's speech, similar in purpose to the Ctrl key in NVDA/JAWS."
  },
  {
    question: "What is the \"Rotor\" in VoiceOver?",
    options: [
      "A gesture (rotating two fingers on the screen like a dial) used to choose a navigation setting, such as headings, links, or words",
      "A setting that spins the screen orientation automatically",
      "A physical accessory sold separately from the device",
      "A way to increase the screen brightness"
    ],
    correctIndex: 0,
    explanation: "The Rotor lets a user pick what swiping up/down navigates by — for example jumping between headings or links — conceptually similar to Windows screen readers' quick-navigation keys."
  },
  {
    question: "Where would you turn VoiceOver on or off in iOS Settings?",
    options: ["Settings > Accessibility > VoiceOver", "Settings > General > Software Update", "Settings > Sounds & Haptics", "Settings > Privacy & Security"],
    correctIndex: 0,
    explanation: "VoiceOver is one of the features listed under Settings > Accessibility."
  },
  {
    question: "Once configured, what is a common quick way to toggle VoiceOver on or off without going through Settings?",
    options: [
      "Triple-click the side button (or Home button on older devices) if set as the Accessibility Shortcut",
      "Shake the device three times",
      "Cover the camera for five seconds",
      "Restart the device"
    ],
    correctIndex: 0,
    explanation: "The Accessibility Shortcut can be assigned to VoiceOver and triggered with a triple-click of the side or Home button."
  },
  {
    question: "Besides the Accessibility Shortcut, what other built-in iOS feature can toggle VoiceOver by voice?",
    options: ["Siri (e.g., \"Hey Siri, turn on VoiceOver\")", "The Calculator app", "Screen Time", "The Weather app"],
    correctIndex: 0,
    explanation: "Siri can turn VoiceOver on or off through a voice command, which is useful if the screen is hard to navigate visually."
  },
  {
    question: "What does a four-finger tap near the top of the screen do?",
    options: ["Jumps to the first item on the screen", "Locks the screen", "Opens Control Center", "Takes a screenshot"],
    correctIndex: 0,
    explanation: "A four-finger tap near the top of the screen moves VoiceOver focus to the first item; tapping near the bottom jumps to the last item."
  },
  {
    question: "How do you scroll through a list or webpage with VoiceOver on?",
    options: ["Swipe with three fingers", "Swipe with one finger", "Double-tap and hold", "Shake the device"],
    correctIndex: 0,
    explanation: "A three-finger swipe scrolls the content, while a one-finger swipe moves between individual items."
  },
  {
    question: "What is VoiceOver's \"Screen Curtain\" feature?",
    options: [
      "It turns off the display while VoiceOver keeps working normally, for privacy in public",
      "It dims the screen brightness permanently",
      "It applies a dark mode color theme",
      "It blocks all notifications"
    ],
    correctIndex: 0,
    explanation: "Screen Curtain blanks the display entirely while VoiceOver continues to function, so someone nearby can't see the screen content."
  },
  {
    question: "What is the two-finger \"scrub\" gesture (moving two fingers back and forth like an eraser, or a \"z\" shape)?",
    options: [
      "It performs an \"escape\" or \"back\" action, such as dismissing an alert or going back a screen",
      "It permanently deletes the current item",
      "It mutes the device",
      "It force-quits the app"
    ],
    correctIndex: 0,
    explanation: "The two-finger scrub gesture is VoiceOver's equivalent of a back/escape command."
  },
  {
    question: "Does VoiceOver support connecting a braille display?",
    options: ["Yes, over Bluetooth, for braille input and output", "No, VoiceOver has no braille support", "Only with a third-party paid app", "Only on iPad, never on iPhone"],
    correctIndex: 0,
    explanation: "VoiceOver supports a range of Bluetooth braille displays natively."
  },
  {
    question: "Who develops VoiceOver, and what does it cost?",
    options: ["Apple; it is built into iOS/iPadOS at no additional cost", "A third-party vendor; it requires a separate purchase", "Google; it is a free download from the App Store", "It is open-source and community maintained"],
    correctIndex: 0,
    explanation: "VoiceOver ships as a built-in accessibility feature of iOS and iPadOS, at no extra cost."
  },
  {
    question: "Why should a trainer confirm the exact iOS version on a client's device before a VoiceOver session?",
    options: [
      "Because some gestures, settings menus, and features have changed across iOS versions",
      "Because VoiceOver only works on the very latest iOS version",
      "Because older iOS versions don't include VoiceOver at all",
      "It doesn't matter; VoiceOver has never changed since its first release"
    ],
    correctIndex: 0,
    explanation: "As with any actively developed software, details can shift between OS versions, so trainers should confirm behavior on the client's actual device and iOS version rather than assuming."
  }
];
