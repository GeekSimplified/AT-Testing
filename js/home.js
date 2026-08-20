(function () {
  "use strict";

  function createEl(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === "class") {
          el.className = attrs[key];
        } else if (key === "text") {
          el.textContent = attrs[key];
        } else {
          el.setAttribute(key, attrs[key]);
        }
      });
    }
    (children || []).forEach(function (child) {
      if (child) el.appendChild(child);
    });
    return el;
  }

  function init() {
    var list = document.querySelector(".product-grid");
    if (!list || !window.AT_PRODUCTS) return;

    window.AT_PRODUCTS.forEach(function (product) {
      var questionCount = product.questionCount || 0;

      var card = createEl("li", { class: "product-card" }, [
        createEl("h2", { text: product.name }),
        createEl("p", { text: product.description }),
        createEl("p", {
          class: "visually-hidden",
          text: questionCount + " questions. Passing score " + product.passThreshold + " percent."
        }),
        createEl("a", {
          class: "button",
          href: "quiz.html?product=" + encodeURIComponent(product.id),
          text: "Start " + product.name + " test (" + questionCount + " questions)"
        })
      ]);
      list.appendChild(card);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
