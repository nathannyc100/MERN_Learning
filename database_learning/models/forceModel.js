import mongoose from 'mongoose'

const { Schema } = mongoose

const forceSchema = new Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
}, { timestamps: true })

export default mongoose.model('Force', forceSchema)
