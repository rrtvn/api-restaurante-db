"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var platoSchema = new _mongoose["default"].Schema({
  nombre: {
    type: String
  },
  categorias: [{
    type: _mongoose["default"].Schema.Types.String,
    ref: "Categoria"
  }],
  descripcion: {
    type: String
  },
  precio: {
    type: String
  },
  clasificacion: {
    type: Number
  },
  img: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = _mongoose["default"].model("Plato", platoSchema);
exports["default"] = _default;