module.exports = app => {
  const panel = require("../controllers/panel.controller.js");

  // Pokaz rezerwacje | REST
  app.get("/admin/api/rezerwacje_month", panel.findAll);
  // Pokaz przychody miesiac | REST
  app.get("/admin/api/income_month", panel.month_income);
  // Pokaz wolne pokoje | REST
  app.get("/admin/api/free_rooms", panel.free_rooms);
  // Pokaz wszystkie rezerwacje | REST
  app.get("/admin/api/all_rezerwacje", panel.all_rezerwacje);
  // Pokaz łączny dochód | REST
  app.get("/admin/api/dochod_all", panel.all_dochod);
};
