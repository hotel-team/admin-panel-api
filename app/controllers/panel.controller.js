const Panel = require("../models/panel.model.js");

// rezerwacje
exports.findAll = (req, res) => {
  Panel.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Wystąpił błąd podczas wyszukiwania wsyzstkich pokoi."
      });
    else res.send(data);
  });
};

// month_income.
exports.month_income = (req, res) => {
  Panel.month_income1((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Wystąpił błąd podczas wyszukiwania wsyzstkich pokoi."
      });
    else res.send(data);
  });
};

// wolne pokoje.
exports.free_rooms = (req, res) => {
  Panel.free_rooms1((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Wystąpił błąd podczas wyszukiwania wsyzstkich pokoi."
      });
    else res.send(data);
  });
};
// all_rezerwacje
exports.all_rezerwacje = (req, res) => {
  Panel.all_rezerwacje1((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Wystąpił błąd podczas wyszukiwania wsyzstkich pokoi."
      });
    else res.send(data);
  });
};
// all_dochod
exports.all_dochod = (req, res) => {
  Panel.all_dochod1((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Wystąpił błąd podczas wyszukiwania wsyzstkich pokoi."
      });
    else res.send(data);
  });
};

