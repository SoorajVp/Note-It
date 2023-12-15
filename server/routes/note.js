import express from 'express';
import controller from '../controllers/noteController.js';

const router = express.Router();

router.post('/create', controller.createNote);

router.patch('/update/:id', controller.updateNote)

router.delete('/delete/:id', controller.deleteNote)

export default router;