import mongoose, { connection } from "mongoose";
import { MONGODB_URI } from "./config.js";

try {
    const db =  mongoose.connect(MONGODB_URI);
    console.log("Database is connected to", db);
} catch (error) {
    console.error(error.message);
}
