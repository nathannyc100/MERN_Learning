import express from 'express';
import { getFirearm, getFirearms, createFirearm } from '../controllers/firearmController.js';

const router = express.Router();

router.get('/', getFirearms);

router.get('/:id', getFirearm);

router.post('/', createFirearm);

router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete a gun'});
});

router.patch('/:id', (req, res) => {
    res.json({mssg: 'rename a gun'});
});

export default router;
