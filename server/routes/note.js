import express from 'express';
import controller from '../controllers/noteController.js';
import { verifyUser } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.get('/', verifyUser, controller.getUserNotes)

router.post('/create', verifyUser, controller.createNote);

router.patch('/update/:id', verifyUser, controller.updateNote)

router.delete('/delete/:id', verifyUser, controller.deleteNote)


export default router;