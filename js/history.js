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

  function formatDate(isoString) {
    var d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) +
      " " + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }

  function render() {
    var content = document.getElementById("history-content");
    var clearBtn = document.getElementById("clear-history-btn");
    content.innerHTML = "";

    var records = window.AT_HISTORY ? window.AT_HISTORY.getAll() : [];
    records = records.slice().sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    if (!records.length) {
      content.appendChild(createEl("p", { text: "No test attempts recorded yet on this device." }));
      clearBtn.hidden = true;
      return;
    }

    clearBtn.hidden = false;

    var table = createEl("table", { class: "history-table" });
    var caption = createEl("caption", { text: records.length + " total attempt" + (records.length === 1 ? "" : "s") + " recorded on this device." });
    var thead = createEl("thead", null, [
      createEl("tr", null, [
        createEl("th", { scope: "col", text: "Date" }),
        createEl("th", { scope: "col", text: "Test" }),
        createEl("th", { scope: "col", text: "Trainer" }),
        createEl("th", { scope: "col", text: "Score" }),
        createEl("th", { scope: "col", text: "Result" })
      ])
    ]);
    var tbody = createEl("tbody");
    records.forEach(function (r) {
      tbody.appendChild(
        createEl("tr", null, [
          createEl("td", { text: formatDate(r.date) }),
          createEl("td", { text: r.productName || r.productId || "Unknown" }),
          createEl("td", { text: r.trainerName || "—" }),
          createEl("td", { text: r.score + " / " + r.total + " (" + r.percent + "%)" }),
          createEl("td", { text: r.passed ? "Pass" : "Not yet passing" })
        ])
      );
    });
    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);
    content.appendChild(createEl("div", { class: "table-scroll" }, [table]));
  }

  function init() {
    render();
    var clearBtn = document.getElementById("clear-history-btn");
    clearBtn.addEventListener("click", function () {
      var confirmed = window.confirm(
        "This will permanently delete all test history stored on this device. This cannot be undone. Continue?"
      );
      if (!confirmed) return;
      if (window.AT_HISTORY) window.AT_HISTORY.clearAll();
      render();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
