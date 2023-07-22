import { z } from 'zod'

export const registerReservaSchema = z.object({

    nombre: z.string({ required_error: 'Nombre requerido' }),
    apellido: z.string({ required_error: 'Apellido requerido' }),
    rut: z.string({ required_error: 'Rut requerido' }),
    email: z.string({ required_error: 'Email requerido' }),
    telefono: z.string({ required_error: 'Telefono requerido' }),
    cantPersonas: z.string({ required_error: 'Cantidad de personas requerido' }),
    horaReserva: z.string({ required_error: 'Hora de reserva es requerido' }),
    fechaReserva: z.string({ required_error: 'Fecha de reserva es requerido' }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email es requerido",
    }),
    password: z.string({
        required_error: "Contraseña requerida",
    }).min(6, {message: "La contraseña debe tener minimo 6 caracteres"}),
});

