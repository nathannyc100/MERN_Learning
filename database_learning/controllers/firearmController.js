import Firearm from '../models/firearmModel.js'
import mongoose from 'mongoose'

export const getFirearms = async (req, res) => {
    const firearms = await Firearm.find({}).sort({ createdAt: -1 });

    res.status(200).json(firearms);
}

export const getFirearm = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id' });
    }

    const firearm = await Firearm.findById(id);

    if (!firearm) {
        return res.status(404).json({ error: 'No such firearm' });
    }

    return res.status(200).json(firearm);
}

export const createFirearm = async (req, res) => {
    const {name} = req.body;


    try {
        const gun = await Firearm.create({ name });
        res.status(200).json(gun);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

}


