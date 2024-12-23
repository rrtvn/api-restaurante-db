"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
var _config = require("./config.js");
require("./libs/initialSetup.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(_config.PORT);
console.log('Server on port', _app["default"].get("port"));