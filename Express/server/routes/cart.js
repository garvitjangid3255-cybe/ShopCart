import express from 'express';
import { getCart, saveCart } from '../controllers/cart.js';
import auth from '../middleware/middle.js';

const router = express.Router();
router.get('/cart', auth, getCart)
router.put('/cart', auth, saveCart)


export default router