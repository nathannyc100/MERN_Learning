import mongoose from 'mongoose'

const { Schema } = mongoose;

const childSchema = new Schema({
    name: {type: String, required: true},
}, { timestamps: true });

export default mongoose.model('Child', childSchema);
