"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ROLES = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ROLES = ["user", "admin"];
exports.ROLES = ROLES;
var roleSchema = new _mongoose["default"].Schema({
  name: String
}, {
  versionKey: false
});
var _default = _mongoose["default"].model("Role", roleSchema);
exports["default"] = _default;