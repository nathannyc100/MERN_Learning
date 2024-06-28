import mongoose from 'mongoose'

const { Schema } = mongoose

const actionSchema = new Schema({
    name: {type: String, required: true},
}, { timestamps: true })

export default mongoose.model('Action', actionSchema)
