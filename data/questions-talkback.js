window.AT_QUESTIONS = window.AT_QUESTIONS || {};
window.AT_QUESTIONS.talkback = [
  {
    question: "With TalkBack on, what happens when you single-tap an item?",
    options: [
      "It is selected/focused and announced, without being activated",
      "It is activated immediately",
      "It is deleted",
      "Nothing happens on a single tap"
    ],
    correctIndex: 0,
    explanation: "Like other mobile screen readers, a single tap explores and announces an item without activating it."
  },
  {
    question: "How do you activate (open) the currently selected item?",
    options: ["Double-tap anywhere on the screen", "Triple-tap the item", "Swipe up on the item", "Press and hold for 5 seconds"],
    correctIndex: 0,
    explanation: "A double-tap anywhere on the screen activates whatever item currently has TalkBack focus."
  },
  {
    question: "How do you move to the next item on screen with TalkBack?",
    options: ["Swipe right with one finger", "Swipe left with one finger", "Swipe down with one finger", "Double-tap with two fingers"],
    correctIndex: 0,
    explanation: "Swiping right moves to the next item; swiping left moves to the previous item."
  },
  {
    question: "How do you scroll a screen (such as a long list) with TalkBack on?",
    options: ["Swipe with two fingers", "Swipe with one finger", "Shake the device", "Double-tap and hold"],
    correctIndex: 0,
    explanation: "A two-finger swipe scrolls content, while a one-finger swipe moves between individual items."
  },
  {
    question: "Where would you turn TalkBack on or off in Android Settings?",
    options: ["Settings > Accessibility > TalkBack", "Settings > Display > Brightness", "Settings > Sound & Vibration", "Settings > Battery"],
    correctIndex: 0,
    explanation: "TalkBack is listed under the Accessibility section of Android Settings (exact wording can vary slightly by device manufacturer)."
  },
  {
    question: "Who develops TalkBack, and what does it cost?",
    options: ["Google; it is built into Android at no additional cost", "A third-party vendor; it requires a paid license", "Apple; it is a free download", "It is only available as a paid app on the Play Store"],
    correctIndex: 0,
    explanation: "TalkBack ships as Android's built-in screen reader, developed by Google, at no extra cost."
  },
  {
    question: "What is the TalkBack menu (sometimes called reading controls) used for?",
    options: [
      "Changing navigation granularity, such as moving by headings, words, or characters",
      "Changing the phone's wallpaper",
      "Managing installed apps",
      "Adjusting Wi-Fi settings"
    ],
    correctIndex: 0,
    explanation: "The TalkBack menu/reading controls let a user choose what swipe navigation moves by, conceptually similar to VoiceOver's Rotor or a Windows screen reader's quick-navigation keys."
  },
  {
    question: "What is TalkBack the Android counterpart to on iOS?",
    options: ["VoiceOver", "Siri", "Magnifier", "Screen Curtain"],
    correctIndex: 0,
    explanation: "TalkBack and VoiceOver serve the same role — a built-in mobile screen reader — on Android and iOS respectively."
  },
  {
    question: "Besides spoken feedback, what other type of feedback can TalkBack provide on supported devices?",
    options: ["Vibration (haptic) feedback", "Automatic screen brightness changes", "Automatic app closures", "Camera flash alerts only"],
    correctIndex: 0,
    explanation: "TalkBack can pair spoken output with vibration feedback for certain actions and gestures."
  },
  {
    question: "Does TalkBack support connecting a braille display?",
    options: ["Yes, supported braille displays can be connected for braille output", "No, TalkBack has never supported braille", "Only on tablets, never on phones", "Only through a separate paid subscription"],
    correctIndex: 0,
    explanation: "TalkBack supports connecting compatible braille displays."
  },
  {
    question: "Where would a user adjust TalkBack's speaking rate and verbosity?",
    options: ["Within TalkBack's own settings menu", "In the phone's camera settings", "In the Wi-Fi settings", "These cannot be changed"],
    correctIndex: 0,
    explanation: "TalkBack settings include controls for speech rate, verbosity, and other speech feedback options."
  },
  {
    question: "A common accessibility shortcut lets users quickly toggle TalkBack. What is it typically bound to?",
    options: [
      "Pressing and holding both volume keys (when the shortcut is enabled)",
      "Shaking the device",
      "Double-tapping the camera lens",
      "Restarting the device"
    ],
    correctIndex: 0,
    explanation: "Android's accessibility shortcut, often bound to holding both volume keys, can be configured to toggle TalkBack."
  },
  {
    question: "Why is it especially important for a trainer to confirm the Android version and device manufacturer before a TalkBack session?",
    options: [
      "Because gestures, menu wording, and settings locations can vary meaningfully across Android versions and manufacturer skins",
      "Because TalkBack behaves identically on every Android device and version",
      "Because TalkBack only exists on Google-branded phones",
      "Because Android does not allow accessibility settings to be changed"
    ],
    correctIndex: 0,
    explanation: "Unlike a single-vendor OS, Android is used across many manufacturers with customized interfaces, so TalkBack behavior can differ more than VoiceOver does across iOS devices."
  },
  {
    question: "What does double-tapping and holding (rather than a quick double-tap) typically allow with TalkBack?",
    options: [
      "Performing gestures like drag-and-drop or long-press actions on the selected item",
      "Force-closing the app immediately",
      "Permanently disabling TalkBack",
      "Taking a screenshot"
    ],
    correctIndex: 0,
    explanation: "A double-tap-and-hold lets the user perform a long-press style interaction on the currently selected item, since a plain touch would normally trigger exploration rather than a gesture."
  },
  {
    question: "A client wants Android's screen reader before switching phones from an iPhone. What should a trainer point out as a similarity to VoiceOver, to ease the transition?",
    options: [
      "Both use single-tap-to-explore, double-tap-to-activate, and one-finger swipes to move between items, even though exact multi-finger gestures differ",
      "Both use identical gesture sets with no differences at all",
      "Neither supports adjusting speech rate",
      "Neither can be turned on without a factory reset"
    ],
    correctIndex: 0,
    explanation: "The core interaction model — explore by touch, double-tap to activate, single-finger swipe to move between items — is shared between TalkBack and VoiceOver, which can help orient a client switching platforms, even though specific multi-finger gestures and menus differ."
  }
];
