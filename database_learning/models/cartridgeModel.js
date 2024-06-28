import mongoose from 'mongoose'

const { Schema } = mongoose

const cartridgeSchema = new Schema({
    name: {type: String, required: true},
}, { timestamps: true })

export default mongoose.model('Cartridge', cartridgeSchema)
