import express from 'express';
import auth from '../middleware/middle.js';
import { deleteData, hello, send, updation } from '../controllers/controller.js';
const router = express.Router();

router.get('/fetch', auth, hello);
router.post('/send', auth, send);
router.put('/update/:id', auth, updation);
router.delete('/delete/:id', deleteData);

export default router