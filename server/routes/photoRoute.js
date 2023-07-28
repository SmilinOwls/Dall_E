import express from 'express';
import photoController from '../controllers/photoController';

const router = express.Router();

router.get('/', photoController.inital, photoController.getPhoto);

router.post('/', photoController.inital, photoController.createPhoto);

export default router;