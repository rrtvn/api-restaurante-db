import { z } from 'zod'

export const registerReservaSchema = z.object({

    fullName: z.string({ required_error: 'Nombre completo es requerido' }),
    rut: z.string({ required_error: 'Rut requerido' }),
    email: z.string({ required_error: 'Email requerido' }),
    telefono: z.string({ required_error: 'Telefono requerido' }),
    cantPersonas: z.string({ required_error: 'Cantidad de personas requerido' }),
    fechaReserva: z.date({ required_error: 'Feccha de reserva es requerida'}),
    selectHoras: z.array({ required_error: 'Hora de reserva es requerido' }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Usuario es requerido",
    }).nonempty(),
    password: z.string({
        required_error: "Contraseña requerida",
    }).min(6, {message: "La contraseña debe tener minimo 6 caracteres"}).nonempty(),
});

export const registerPlatoSchema = z.object({
    nombre: z.string({ required_error: 'Nombre de plato es requerido'}),
    descripcion: z.string({ required_error: 'Nombre de plato es requerida'}),
    precio: z.string( {required_error: 'Precio es requerido'}),
    categorias: z.string({ required_error: 'Categoria de plato es requerida'}),
    clasificacion: z.string({ required_error: 'Clasificacion de plato es requerida'}),
    img: z.string({ required_error: 'Imagen de plato es requerida'}),
})
