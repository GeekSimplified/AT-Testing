(function () {
  "use strict";

  function getProductIdFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get("product");
  }

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
    var productId = getProductIdFromUrl();
    var product = productId && window.AT_PRODUCTS_BY_ID ? window.AT_PRODUCTS_BY_ID[productId] : null;
    var questions = product ? (window.AT_QUESTIONS && window.AT_QUESTIONS[product.id]) : null;

    var titleEl = document.getElementById("quiz-title");
    var introEl = document.getElementById("quiz-intro");
    var container = document.getElementById("questions-container");
    var form = document.getElementById("quiz-form");
    var errorSummary = document.getElementById("error-summary");
    var errorList = document.getElementById("error-list");
    var resultsSection = document.getElementById("results");

    if (!product || !questions || !questions.length) {
      titleEl.textContent = "Test not found";
      introEl.textContent =
        "We couldn't find a test for that product. Please return to the home page and choose a test from the list.";
      form.hidden = true;
      return;
    }

    document.title = product.name + " Knowledge Test – AT Testing";
    titleEl.textContent = product.name + " Knowledge Test";
    introEl.textContent =
      "This test has " + questions.length + " questions covering " + product.name +
      ". Answer every question, then select “Submit Test” at the bottom of the page to see your score. " +
      "A score of " + product.passThreshold + "% or higher is considered passing.";

    questions.forEach(function (q, index) {
      var qNum = index + 1;
      var fieldsetId = "q-" + qNum;
      var legend = createEl("legend", null, [
        createEl("span", { class: "q-number", text: "Question " + qNum + " of " + questions.length }),
        createEl("span", { class: "q-text", text: q.question })
      ]);

      var optionsWrap = createEl("div", { class: "options" });
      q.options.forEach(function (optionText, optIndex) {
        var inputId = fieldsetId + "-opt" + optIndex;
        var input = createEl("input", {
          type: "radio",
          name: fieldsetId,
          id: inputId,
          value: String(optIndex)
        });
        var label = createEl("label", { for: inputId }, [
          input,
          document.createTextNode(optionText)
        ]);
        optionsWrap.appendChild(label);
      });

      var feedback = createEl("div", { class: "answer-feedback", id: fieldsetId + "-feedback", hidden: "hidden" });

      var fieldset = createEl(
        "fieldset",
        { class: "question", id: fieldsetId, "data-question-index": String(index) },
        [legend, optionsWrap, feedback]
      );

      container.appendChild(fieldset);
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var unanswered = [];
      questions.forEach(function (q, index) {
        var name = "q-" + (index + 1);
        var checked = form.querySelector('input[name="' + name + '"]:checked');
        if (!checked) unanswered.push(index + 1);
      });

      if (unanswered.length) {
        errorList.innerHTML = "";
        unanswered.forEach(function (qNum) {
          var li = document.createElement("li");
          var link = createEl("a", { href: "#q-" + qNum, text: "Question " + qNum + " has not been answered" });
          link.addEventListener("click", function (e) {
            e.preventDefault();
            var target = document.getElementById("q-" + qNum);
            var firstInput = target.querySelector('input[type="radio"]');
            target.scrollIntoView({ behavior: "smooth", block: "center" });
            if (firstInput) firstInput.focus();
          });
          li.appendChild(link);
          errorList.appendChild(li);
        });
        errorSummary.hidden = false;
        errorSummary.focus();
        return;
      }

      errorSummary.hidden = true;

      var correctCount = 0;
      questions.forEach(function (q, index) {
        var qNum = index + 1;
        var name = "q-" + qNum;
        var checked = form.querySelector('input[name="' + name + '"]:checked');
        var chosenIndex = parseInt(checked.value, 10);
        var isCorrect = chosenIndex === q.correctIndex;
        if (isCorrect) correctCount++;

        var fieldset = document.getElementById(name);
        fieldset.classList.add(isCorrect ? "answered-correct" : "answered-incorrect");

        form.querySelectorAll('input[name="' + name + '"]').forEach(function (input) {
          input.disabled = true;
        });

        var feedback = document.getElementById(name + "-feedback");
        feedback.hidden = false;
        feedback.innerHTML = "";

        var statusText = isCorrect
          ? "Correct."
          : "Incorrect. The correct answer was: " + q.options[q.correctIndex] + ".";
        feedback.appendChild(createEl("p", { class: "feedback-status", text: statusText }));
        if (q.explanation) {
          feedback.appendChild(createEl("p", { class: "feedback-explanation", text: q.explanation }));
        }
      });

      var total = questions.length;
      var percent = Math.round((correctCount / total) * 100);
      var passed = percent >= product.passThreshold;

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.hidden = true;

      resultsSection.hidden = false;
      resultsSection.innerHTML = "";

      var heading = createEl("h2", { text: "Your Results", tabindex: "-1", id: "results-heading" });

      var banner = createEl("div", { class: "score-banner " + (passed ? "pass" : "fail"), role: "status" }, [
        createEl("p", { text: "You scored " + correctCount + " out of " + total + " (" + percent + "%)." }),
        createEl("p", {
          text: passed
            ? "Result: Pass — you met the " + product.passThreshold + "% passing threshold for " + product.name + "."
            : "Result: Not yet passing — the threshold for " + product.name + " is " + product.passThreshold + "%. Review the feedback on each question above and consider retaking the test."
        })
      ]);

      var actions = createEl("div", { class: "results-actions" }, [
        createEl("a", { class: "button secondary", href: "index.html", text: "Back to all tests" }),
        createEl("button", { class: "button", type: "button", id: "retake-btn", text: "Retake this test" })
      ]);

      resultsSection.appendChild(heading);
      resultsSection.appendChild(banner);
      resultsSection.appendChild(
        createEl("p", { text: "Detailed feedback for every question is shown above, next to each question." })
      );
      resultsSection.appendChild(actions);

      document.getElementById("retake-btn").addEventListener("click", function () {
        window.location.reload();
      });

      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      heading.focus();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
