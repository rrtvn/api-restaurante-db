"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _reservaController = require("../controllers/reserva.controller.js");
var _validator = require("../middlewares/validator.js");
var _authSchema = require("../schemas/auth.schema.js");
var router = (0, _express.Router)();
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  next();
});
router.post('/', _reservaController.crearReserva);
router.get('/', _reservaController.obtenerReserva);
router.put('/:reservaId', _reservaController.modificarReserva);
router["delete"]('/:reservaId', _reservaController.deleteReservaById);
var _default = router;
exports["default"] = _default;