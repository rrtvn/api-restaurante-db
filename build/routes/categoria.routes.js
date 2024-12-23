"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _categoriaController = require("../controllers/categoria.controller.js");
var _verifySignup = require("../middlewares/verifySignup.js");
var router = (0, _express.Router)();
router.post('/', _categoriaController.createCategoria);
router.get('/', _categoriaController.getCategoria);
router["delete"]('/:categoriaId', _categoriaController.deleteCategoriaById);
var _default = router;
exports["default"] = _default;