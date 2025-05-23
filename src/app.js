//SE COLOCAN ESTOS DATOS EN APP.JS SOLO POR ORDEN

import express, { application } from 'express'
import morgan from 'morgan';
import cors from "cors";
import helmet from "helmet";
import pkg from "../package.json";

//Routes
import indexRoutes from './routes/index.routes.js';
import usersRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import reservaRoutes from './routes/reserva.routes.js';
import platoRoutes from './routes/plato.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';




const app = express();

app.set('pkg', pkg);

//Settings
app.set("port", process.env.PORT || 4010);
app.set("json spaces", 4);

const corsOptions = {
    origin:'http://0.0.0.0:4010', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};
app.use(cors());



//ESTO HACE QUE CADA VEZ QUE SE HACE UN REFRESH EN EL LA PAG. POR CONSOLA ENVIARA EL TIPO DE PETICION.
app.use(morgan('dev'));
//ACA LE DECIMOS QUE ENTIENDA LOS DATOS EN FORMATO JSON QUE LLEGAN AL SERVIDOR
app.use(express.json());

app.use(helmet());
app.use(express.urlencoded({ extended: false}));




app.use("/api", indexRoutes)
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reserva', reservaRoutes)
app.use('/api/plato', platoRoutes)
app.use('/api/categoria', categoriaRoutes)

export default app;
