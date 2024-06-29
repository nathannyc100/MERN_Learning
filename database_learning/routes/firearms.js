import express from 'express';
import { getFirearm, getFirearms, createFirearm, deleteFirearm, updateFirearm } from '../controllers/firearmController.js';

const router = express.Router();

router.get('/', getFirearms);

router.get('/:id', getFirearm);

router.post('/', createFirearm);

router.delete('/:id', deleteFirearm);

router.patch('/:id', updateFirearm);

export default router;
