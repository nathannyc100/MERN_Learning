import mongoose from 'mongoose'
import Force from './forceModel.js'

const { Schema } = mongoose

const designationSchema = new Schema({
    name: {type: String, required: true},
    force: {type: Schema.Types.ObjectId, ref: 'Force'},
}, { timestamps: true })

export default mongoose.model('Designation', designationSchema)
