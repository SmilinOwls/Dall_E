import express from 'express';
import photoController from '../controllers/photoController';

const router = express.Router();

router.get('/', photoController.initial, photoController.getPhoto);

router.post('/', photoController.initial, photoController.createPhoto);

export default router;