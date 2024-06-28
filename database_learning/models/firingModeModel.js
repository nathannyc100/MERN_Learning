import mongoose from 'mongoose'

const { Schema } = mongoose;

const firingModeSchema = new Schema({
    name: {type: String, required: true},
}, { timestamps: true });

export default mongoose.model('FiringMode', firingModeSchema);

