import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
