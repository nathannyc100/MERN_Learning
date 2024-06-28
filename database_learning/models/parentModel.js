import mongoose from 'mongoose'
import Child from './childModel.js'

const { Schema } = mongoose;

const parentSchema = new Schema({
    name: {type: String, required: true},
    child: {type: Schema.Types.ObjectId, ref: 'Child'},
}, { timestamps: true });


export default mongoose.model('Parent', parentSchema);
