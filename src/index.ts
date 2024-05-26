import express from 'express';
import bodyParser from "body-parser";
import todosRouter from './routes/todos';


const app = express();


app.use(bodyParser.json());


app.use(todosRouter);


app.listen(3001);


console.log('app is listening at 3001');