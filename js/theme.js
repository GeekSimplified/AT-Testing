(function () {
  "use strict";

  var STORAGE_KEY = "atTestingTheme";

  function getStored() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      // localStorage unavailable — theme choice just won't persist across visits.
    }
  }

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function init() {
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    toggle.setAttribute("aria-checked", isDark ? "true" : "false");

    toggle.addEventListener("click", function () {
      isDark = !isDark;
      applyTheme(isDark);
      setStored(isDark ? "dark" : "light");
      toggle.setAttribute("aria-checked", isDark ? "true" : "false");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
