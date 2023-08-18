import mongoose, { connection } from "mongoose";
import { MONGODB_URI } from "./config.js";


mongoose.connect(MONGODB_URI)
    .then(db => console.log('Db is connected to', db.connection.host))
    .catch(err => console.error(err))