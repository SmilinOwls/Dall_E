import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/connectDB';
import dallRoute from './routes/dalleRoute';
import photoRoute from './routes/photoRoute';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/photo', photoRoute);
app.use('/api/v1/photo', dallRoute);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from DALL.E!',
    });
});

connectDB(process.env.MONGODB_URL);
app.listen(PORT, () => {
    console.log('Server started on port ', PORT);
});