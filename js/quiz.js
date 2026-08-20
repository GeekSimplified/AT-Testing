(function () {
  "use strict";

  function getParams() {
    var params = new URLSearchParams(window.location.search);
    return {
      productId: params.get("product"),
      mode: params.get("mode") === "study" ? "study" : "test"
    };
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

  function shuffle(array) {
    var copy = array.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  // Produces a fresh randomized presentation of a question bank: question
  // order is shuffled, and each question's option order is shuffled too.
  // Option `value`s stay equal to the option's original array index, so the
  // existing scoring logic (compare chosen value to q.correctIndex) needs no
  // changes — only rendering order changes.
  function prepareSessionQuestions(questions) {
    return shuffle(questions).map(function (q) {
      var originalIndices = q.options.map(function (_, i) {
        return i;
      });
      var order = shuffle(originalIndices);
      return {
        question: q.question,
        explanation: q.explanation,
        correctIndex: q.correctIndex,
        origOptions: q.options,
        displayOptions: order.map(function (origIndex) {
          return { text: q.options[origIndex], value: origIndex };
        })
      };
    });
  }

  function formatDate(isoString) {
    var d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) +
      " " + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }

  function renderPastAttempts(productId) {
    var section = document.getElementById("past-attempts");
    var content = document.getElementById("past-attempts-content");
    if (!window.AT_HISTORY) return;

    var records = window.AT_HISTORY.getForProduct(productId)
      .slice()
      .sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      })
      .slice(0, 5);

    if (!records.length) return;

    content.innerHTML = "";
    var table = createEl("table", { class: "history-table" });
    var caption = createEl("caption", { text: "Most recent attempts shown first, up to 5." });
    var thead = createEl("thead", null, [
      createEl("tr", null, [
        createEl("th", { scope: "col", text: "Date" }),
        createEl("th", { scope: "col", text: "Score" }),
        createEl("th", { scope: "col", text: "Result" })
      ])
    ]);
    var tbody = createEl("tbody");
    records.forEach(function (r) {
      tbody.appendChild(
        createEl("tr", null, [
          createEl("td", { text: formatDate(r.date) }),
          createEl("td", { text: r.score + " / " + r.total + " (" + r.percent + "%)" }),
          createEl("td", { text: r.passed ? "Pass" : "Not yet passing" })
        ])
      );
    });
    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);
    content.appendChild(table);
    content.appendChild(createEl("p", null, [createEl("a", { href: "history.html", text: "View full test history" })]));

    section.hidden = false;
  }

  function renderStudyMode(product, questions) {
    document.getElementById("test-mode-content").hidden = true;
    document.getElementById("past-attempts").hidden = true;
    var studySection = document.getElementById("study-mode-content");
    studySection.hidden = false;

    document.title = product.name + " Study Mode – AT Testing";
    document.getElementById("quiz-title").textContent = product.name + " — Study Mode";
    document.getElementById("quiz-intro").textContent =
      "Review all " + questions.length + " questions and answers for " + product.name +
      " before taking the graded test. Nothing here is scored.";

    var link = document.getElementById("take-real-test-link");
    link.href = "quiz.html?product=" + encodeURIComponent(product.id);

    var container = document.getElementById("study-container");
    questions.forEach(function (q, index) {
      var list = createEl("ul", { class: "study-options" });
      q.options.forEach(function (optionText, optIndex) {
        var isCorrect = optIndex === q.correctIndex;
        list.appendChild(
          createEl(
            "li",
            { class: isCorrect ? "study-correct" : "" },
            [
              isCorrect ? createEl("span", { "aria-hidden": "true", text: "✓ " }) : null,
              document.createTextNode(optionText),
              isCorrect ? createEl("span", { class: "visually-hidden", text: " (correct answer)" }) : null
            ]
          )
        );
      });

      var block = createEl("div", { class: "study-question" }, [
        createEl("h3", { text: "Question " + (index + 1) + " of " + questions.length }),
        createEl("p", { class: "study-question-text", text: q.question }),
        list,
        q.explanation ? createEl("p", { class: "study-explanation", text: q.explanation }) : null
      ]);
      container.appendChild(block);
    });
  }

  function renderTestMode(product, questions) {
    document.getElementById("study-mode-content").hidden = true;

    var titleEl = document.getElementById("quiz-title");
    var introEl = document.getElementById("quiz-intro");
    var container = document.getElementById("questions-container");
    var form = document.getElementById("quiz-form");
    var errorSummary = document.getElementById("error-summary");
    var errorList = document.getElementById("error-list");
    var resultsSection = document.getElementById("results");
    var modeSwitchLink = document.getElementById("mode-switch-link");

    document.title = product.name + " Knowledge Test – AT Testing";
    titleEl.textContent = product.name + " Knowledge Test";
    introEl.textContent =
      "This test has " + questions.length + " questions covering " + product.name +
      ". Questions and answer order are shuffled each time. Answer every question, then select " +
      "“Submit Test” at the bottom of the page to see your score. A score of " +
      product.passThreshold + "% or higher is considered passing.";

    modeSwitchLink.appendChild(
      createEl("a", {
        href: "quiz.html?product=" + encodeURIComponent(product.id) + "&mode=study",
        text: "Study this material first (ungraded review)"
      })
    );

    renderPastAttempts(product.id);

    var sessionQuestions = prepareSessionQuestions(questions);

    sessionQuestions.forEach(function (q, index) {
      var qNum = index + 1;
      var fieldsetId = "q-" + qNum;
      var legend = createEl("legend", null, [
        createEl("span", { class: "q-number", text: "Question " + qNum + " of " + sessionQuestions.length }),
        createEl("span", { class: "q-text", text: q.question })
      ]);

      var optionsWrap = createEl("div", { class: "options" });
      q.displayOptions.forEach(function (opt, optPos) {
        var inputId = fieldsetId + "-opt" + optPos;
        var input = createEl("input", {
          type: "radio",
          name: fieldsetId,
          id: inputId,
          value: String(opt.value)
        });
        var label = createEl("label", { for: inputId }, [input, document.createTextNode(opt.text)]);
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
      sessionQuestions.forEach(function (q, index) {
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
      sessionQuestions.forEach(function (q, index) {
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
          : "Incorrect. The correct answer was: " + q.origOptions[q.correctIndex] + ".";
        feedback.appendChild(createEl("p", { class: "feedback-status", text: statusText }));
        if (q.explanation) {
          feedback.appendChild(createEl("p", { class: "feedback-explanation", text: q.explanation }));
        }
      });

      var total = sessionQuestions.length;
      var percent = Math.round((correctCount / total) * 100);
      var passed = percent >= product.passThreshold;
      var trainerNameInput = document.getElementById("trainer-name");
      var trainerName = trainerNameInput ? trainerNameInput.value.trim() : "";
      var nowIso = new Date().toISOString();

      if (window.AT_HISTORY) {
        window.AT_HISTORY.addRecord({
          productId: product.id,
          productName: product.name,
          score: correctCount,
          total: total,
          percent: percent,
          passed: passed,
          trainerName: trainerName,
          date: nowIso
        });
      }

      var printHeader = document.getElementById("print-header");
      printHeader.innerHTML = "";
      printHeader.appendChild(createEl("h2", { text: "AT Testing — Results Record" }));
      if (trainerName) {
        printHeader.appendChild(createEl("p", { text: "Trainer: " + trainerName }));
      }
      printHeader.appendChild(createEl("p", { text: "Test: " + product.name + " Knowledge Test" }));
      printHeader.appendChild(createEl("p", { text: "Date: " + formatDate(nowIso) }));

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

      var actions = createEl("div", { class: "results-actions no-print" }, [
        createEl("a", { class: "button secondary", href: "index.html", text: "Back to all tests" }),
        createEl("button", { class: "button", type: "button", id: "retake-btn", text: "Retake this test" }),
        createEl("button", { class: "button secondary", type: "button", id: "print-btn", text: "Print my results" })
      ]);

      resultsSection.appendChild(heading);
      resultsSection.appendChild(banner);
      resultsSection.appendChild(
        createEl("p", { class: "no-print", text: "Detailed feedback for every question is shown above, next to each question." })
      );
      resultsSection.appendChild(actions);

      document.getElementById("retake-btn").addEventListener("click", function () {
        window.location.reload();
      });
      document.getElementById("print-btn").addEventListener("click", function () {
        window.print();
      });

      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      heading.focus();
    });
  }

  function init() {
    var params = getParams();
    var product = params.productId && window.AT_PRODUCTS_BY_ID ? window.AT_PRODUCTS_BY_ID[params.productId] : null;
    var questions = product ? (window.AT_QUESTIONS && window.AT_QUESTIONS[product.id]) : null;

    if (!product || !questions || !questions.length) {
      document.getElementById("quiz-title").textContent = "Test not found";
      document.getElementById("quiz-intro").textContent =
        "We couldn't find a test for that product. Please return to the home page and choose a test from the list.";
      document.getElementById("test-mode-content").hidden = true;
      document.getElementById("study-mode-content").hidden = true;
      return;
    }

    if (params.mode === "study") {
      renderStudyMode(product, questions);
    } else {
      renderTestMode(product, questions);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
