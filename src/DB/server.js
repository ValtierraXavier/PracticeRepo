import db from './connection.js';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk'
import routes from '../practice-app/src/Router/index.js'

const app = express();
const PORT = 3050
app.use(express.json());
app.use(cors());

app.use('/', routes);

db.on('connected', () => {
console.clear()
console.log(chalk.greenBright.bold('Connected!'))
app.listen(PORT, () =>{
    console.log(chalk.bgGreen.bold('Express is Running'))
})
})