"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CATEGORIAS = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CATEGORIAS = ["Fondos", "Pizzas", "Antipasti", "Cocktail", "Bebidas", "Cafeteria", "Gnocchi"];
exports.CATEGORIAS = CATEGORIAS;
var categoriaSchema = new _mongoose["default"].Schema({
  name: String
}, {
  versionKey: false
});
var _default = _mongoose["default"].model("Categoria", categoriaSchema);
exports["default"] = _default;