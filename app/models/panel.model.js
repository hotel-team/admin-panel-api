const sql = require("./db.js");

// konstrukcaj
const Panel = function(pokoj) {
  this.pokoj = pokoj.numer_pokoju;
  this.ilu_osobowy = pokoj.ilu_osobowy;
  this.zajety = pokoj.zajety;
};

Panel.getAll = result => {
  sql.query("SELECT COUNT(*) AS ile FROM rezerwacje_pazdziernik_panel", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Wszystkie pokoje: ", res);
    result(null, res);
  });
};
Panel.month_income1 = result => {
  sql.query("SELECT SUM(kwota) AS kwota FROM przychody_pazdziernik", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Przychody miesiąc: ", res);
    result(null, res);
  });
};

Panel.free_rooms1 = result => {
  sql.query("SELECT COUNT(id) AS free_rooms FROM lista_pokoi WHERE zajety=0", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Wolne Pokoje: ", res);
    result(null, res);
  });
};

Panel.all_rezerwacje1 = result => {
  sql.query("SELECT COUNT(id) AS all_rezerwacje FROM historia_rezerwacji", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Wyszstkie rezerwacje: ", res);
    result(null, res);
  });
};

Panel.all_dochod1 = result => {
  sql.query("SELECT SUM(kwota) AS dochod_all FROM dochod", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Dochód Łącznie: ", res);
    result(null, res);
  });
};


module.exports = Panel;
