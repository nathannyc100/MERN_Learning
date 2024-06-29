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
        const firearm = await Firearm.create({ name });
        return res.status(200).json(firearm);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

export const deleteFirearm = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id' });
    }

    const firearm = await Firearm.findOneAndDelete({ _id: id });

    if (!firearm) {
        return res.status(404).json({ error: 'No such firearm' });
    }

    return res.status(200).json(firearm);
}

export const updateFirearm = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id' });
    }

    const firearm = await Firearm.findByIdAndUpdate({ _id: id }, { ...req.body });

    if (!firearm) {
        return res.status(404).json({ error: 'No such firearm' });
    }

    return res.status(200).json(firearm);
}
