import express from 'express';
import dallController from '../controllers/dalleController';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.post('/', dallController.initial, dallController.createImage);

export default router;