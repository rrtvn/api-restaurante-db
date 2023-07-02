import app from './app'
import './database'
import { PORT } from "./config.js"
import "./libs/initialSetup.js"

app.listen(PORT);

console.log('Server on port', app.get("port"))