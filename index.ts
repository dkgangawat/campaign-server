import express, {Express,Request, Response} from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from "cors";
import './config/DB/connection'
import appRouter from './routes';
const app:Express = express();
const port = 5000;

app.use(express.json())
dotenv.config();
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'));
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));

app.get('/hello', (req:Request, res:Response) => {
    res.send('Hello, world!');
});

app.use('/api', appRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});