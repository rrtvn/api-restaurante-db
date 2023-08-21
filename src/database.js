import mongoose, { connection } from "mongoose";
import { MONGODB_URI } from "./config.js";


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db is connected to', db.connection.name))
    .catch(err => console.error(err))