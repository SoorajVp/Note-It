import express from 'express';
import controller from '../controllers/noteController.js';

const router = express.Router();

router.get('/create', controller.createNote);


export default router;