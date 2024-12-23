"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _platoController = require("../controllers/plato.controller.js");
var _validator = require("../middlewares/validator.js");
var _authSchema = require("../schemas/auth.schema.js");
var router = (0, _express.Router)();
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  next();
});

//controlador utilizandose en la ruta
router.post('/', _platoController.createPlato);
router.get('/', _platoController.getPlato);
router.get('/:cat', _platoController.getPlatoByCat);

//router.put('/:PlatoId', updatePlatoById)

router["delete"]('/:platoId', _platoController.deletePlatoById);
var _default = router;
exports["default"] = _default;