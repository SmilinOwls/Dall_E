import express from 'express';
import photoController from '../controllers/photoController';

const router = express.Router();

router.get('/', photoController.initial, photoController.getAllPhoto);

router.post('/', photoController.initial, photoController.sharePhoto);

export default router;