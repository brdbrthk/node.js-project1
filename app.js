import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import createDebug from 'debug'
const debug = createDebug('app')
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) =>{
    res.send('Hello world');
})

app.listen(port, ()=>{
    debug("Listening on port " + chalk.green(port));

})