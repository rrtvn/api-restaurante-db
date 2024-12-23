"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireWildcard(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _package = _interopRequireDefault(require("../package.json"));
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _reservaRoutes = _interopRequireDefault(require("./routes/reserva.routes.js"));
var _platoRoutes = _interopRequireDefault(require("./routes/plato.routes.js"));
var _categoriaRoutes = _interopRequireDefault(require("./routes/categoria.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//SE COLOCAN ESTOS DATOS EN APP.JS SOLO POR ORDEN

//Routes

var app = (0, _express["default"])();
app.set('pkg', _package["default"]);

//Settings
app.set("port", process.env.PORT || 4010);
app.set("json spaces", 4);
var corsOptions = {
  origin: 'http://0.0.0.0:4010',
  credentials: true,
  //access-control-allow-credentials:true
  optionSuccessStatus: 200
};
app.use((0, _cors["default"])());

//ESTO HACE QUE CADA VEZ QUE SE HACE UN REFRESH EN EL LA PAG. POR CONSOLA ENVIARA EL TIPO DE PETICION.
app.use((0, _morgan["default"])('dev'));
//ACA LE DECIMOS QUE ENTIENDA LOS DATOS EN FORMATO JSON QUE LLEGAN AL SERVIDOR
app.use(_express["default"].json());
app.use((0, _helmet["default"])());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use("/api", _indexRoutes["default"]);
app.use('/api/users', _userRoutes["default"]);
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/reserva', _reservaRoutes["default"]);
app.use('/api/plato', _platoRoutes["default"]);
app.use('/api/categoria', _categoriaRoutes["default"]);
var _default = app;
exports["default"] = _default;