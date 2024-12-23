"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECRET = exports.PORT = exports.MONGODB_URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/restaurante-db';
exports.MONGODB_URI = MONGODB_URI;
var SECRET = 'api-restaurante-db';
exports.SECRET = SECRET;
var PORT = process.env.PORT || 4010;
exports.PORT = PORT;