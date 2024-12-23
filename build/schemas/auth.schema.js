"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerReservaSchema = exports.registerPlatoSchema = exports.loginSchema = void 0;
var _zod = require("zod");
var registerReservaSchema = _zod.z.object({
  fullName: _zod.z.string({
    required_error: 'Nombre completo es requerido'
  }),
  rut: _zod.z.string({
    required_error: 'Rut requerido'
  }),
  email: _zod.z.string({
    required_error: 'Email requerido'
  }),
  telefono: _zod.z.string({
    required_error: 'Telefono requerido'
  }),
  cantPersonas: _zod.z.string({
    required_error: 'Cantidad de personas requerido'
  }),
  fechaReserva: _zod.z.date({
    required_error: 'Feccha de reserva es requerida'
  }),
  selectHoras: _zod.z.array({
    required_error: 'Hora de reserva es requerido'
  })
});
exports.registerReservaSchema = registerReservaSchema;
var loginSchema = _zod.z.object({
  email: _zod.z.string({
    required_error: "Usuario es requerido"
  }).nonempty(),
  password: _zod.z.string({
    required_error: "Contraseña requerida"
  }).min(6, {
    message: "La contraseña debe tener minimo 6 caracteres"
  }).nonempty()
});
exports.loginSchema = loginSchema;
var registerPlatoSchema = _zod.z.object({
  nombre: _zod.z.string({
    required_error: 'Nombre de plato es requerido'
  }),
  descripcion: _zod.z.string({
    required_error: 'Nombre de plato es requerida'
  }),
  precio: _zod.z.string({
    required_error: 'Precio es requerido'
  }),
  categorias: _zod.z.string({
    required_error: 'Categoria de plato es requerida'
  }),
  clasificacion: _zod.z.string({
    required_error: 'Clasificacion de plato es requerida'
  }),
  img: _zod.z.string({
    required_error: 'Imagen de plato es requerida'
  })
});
exports.registerPlatoSchema = registerPlatoSchema;