import 'dotenv/config';
import express from 'express';
import route from './src/routes/routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP Server running!');
});