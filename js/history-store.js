(function () {
  "use strict";

  var STORAGE_KEY = "atTestingHistory";
  var MAX_RECORDS = 300;

  function safeParse(json) {
    try {
      var data = JSON.parse(json);
      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }

  function getAll() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? safeParse(raw) : [];
    } catch (e) {
      // localStorage unavailable (private browsing, disabled storage, etc.)
      return [];
    }
  }

  function save(records) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      return true;
    } catch (e) {
      return false;
    }
  }

  function addRecord(record) {
    var records = getAll();
    records.push(record);
    if (records.length > MAX_RECORDS) {
      records = records.slice(records.length - MAX_RECORDS);
    }
    return save(records);
  }

  function getForProduct(productId) {
    return getAll().filter(function (r) {
      return r.productId === productId;
    });
  }

  function clearAll() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (e) {
      return false;
    }
  }

  window.AT_HISTORY = {
    getAll: getAll,
    addRecord: addRecord,
    getForProduct: getForProduct,
    clearAll: clearAll
  };
})();
