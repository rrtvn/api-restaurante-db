"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var reservaSchema = new _mongoose["default"].Schema({
  fullName: {
    type: String
  },
  rut: {
    type: String
  },
  email: {
    type: String
  },
  telefono: {
    type: Number
  },
  cantPersonas: {
    type: Number
  },
  horaReserva: {
    type: String
  },
  fechaReserva: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = _mongoose["default"].model("Reserva", reservaSchema);
exports["default"] = _default;