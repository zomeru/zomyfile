import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';

const app = express();
dotenv.config();

connectDB();

app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
