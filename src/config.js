import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo/restaurante-db'  
export const SECRET = 'api-restaurante-db';
export const PORT = process.env.PORT || 4010;