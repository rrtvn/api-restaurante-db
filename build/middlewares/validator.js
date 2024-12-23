"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorSchema = void 0;
var validatorSchema = function validatorSchema(schema) {
  return function (req, res, next) {
    try {
      schema.parse(req.body);
      console.log(req.body);
      next();
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: error.errors.map(function (error) {
          return error.message;
        })
      });
    }
  };
};
exports.validatorSchema = validatorSchema;