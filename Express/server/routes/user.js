import express from 'express';
import { login, signup } from '../controllers/user.js';

const router = express.Router();
router.post('/user/signup',signup)
router.post('/user/login',login)


export default router