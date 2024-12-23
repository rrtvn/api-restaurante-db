"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usersController = require("../controllers/users.controller.js");
var _authJwt = require("../middlewares/authJwt.js");
var _verifySignup = require("../middlewares/verifySignup.js");
var router = (0, _express.Router)();
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept, Authorization");
  next();
});
router.post("/", _usersController.createUser);
router.get("/", _usersController.getUsers);
router.get("/:token", _authJwt.verifyToken, _usersController.getUserByToken);
router.get('/:userId', _usersController.getUserById);
//router.put('/:rut',  updateUserById);
router["delete"]('/:userId', _usersController.deleteUserById);
var _default = router;
exports["default"] = _default;