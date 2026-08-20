window.AT_PRODUCTS = [
  {
    id: "magnifier",
    name: "Windows Magnifier",
    description: "Built-in Windows screen magnification tool.",
    passThreshold: 80,
    questionCount: 15
  },
  {
    id: "narrator",
    name: "Windows Narrator",
    description: "Built-in Windows screen reader.",
    passThreshold: 80,
    questionCount: 15
  },
  {
    id: "nvda",
    name: "NVDA Screen Reader",
    description: "Free, open-source screen reader developed by NV Access.",
    passThreshold: 80,
    questionCount: 15
  },
  {
    id: "jaws",
    name: "JAWS for Windows",
    description: "Commercial screen reader published by Vispero.",
    passThreshold: 80,
    questionCount: 15
  },
  {
    id: "zoomtext",
    name: "ZoomText",
    description: "Commercial screen magnification (and speech) software published by Vispero.",
    passThreshold: 80,
    questionCount: 15
  },
  {
    id: "fusion",
    name: "Fusion",
    description: "Combined JAWS + ZoomText product published by Vispero.",
    passThreshold: 80,
    questionCount: 15
  },
  {
    id: "voiceover",
    name: "iOS VoiceOver",
    description: "Built-in screen reader for iPhone and iPad, developed by Apple.",
    passThreshold: 80,
    questionCount: 15
  },
  {
    id: "talkback",
    name: "Android TalkBack",
    description: "Built-in screen reader for Android devices, developed by Google.",
    passThreshold: 80,
    questionCount: 15
  },
  {
    id: "windows-commands",
    name: "Common Windows Keyboard Commands",
    description: "Everyday Windows shortcuts (copy/paste and more) trainers should know cold.",
    passThreshold: 80,
    questionCount: 15
  }
];

window.AT_PRODUCTS_BY_ID = {};
window.AT_PRODUCTS.forEach(function (p) {
  window.AT_PRODUCTS_BY_ID[p.id] = p;
});
