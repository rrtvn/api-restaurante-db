"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authController = require("../controllers/auth.controller.js");
var _verifySignup = require("../middlewares/verifySignup.js");
var _validator = require("../middlewares/validator.js");
var _authSchema = require("../schemas/auth.schema.js");
var _authJwt = require("../middlewares/authJwt.js");
var router = (0, _express.Router)();
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  next();
});
router.post('/signin', (0, _validator.validatorSchema)(_authSchema.loginSchema), _authController.signInHandler);
var _default = router;
exports["default"] = _default;