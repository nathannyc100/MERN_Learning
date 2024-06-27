import mongoose from 'mongoose'

const Schema = mongoose.Schema()

const gunSchema = new Schema({
    name: {type: String, required: true},
    inventorCompany: {type: Schema.Types.ObjectId, ref: 'Company'},
    manufactoringCompanies: [{type: Schema.Types.ObjectId, ref: 'Company'}],
    impelmentedForces: [{type: Schema.Types.ObjectId, ref: 'Forces'}],
    designations: [{type: Schema.Types.ObjectId, ref: 'Designations'}],
    firingModes: [{types: Schema.Types.ObjectId, ref: 'FiringModes'}],
    actionType: {type: Schema.Types.ObjectId, ref: 'Action'},
    cartridgeTypes: [{type: Schema.Types.ObjectId, ref: 'Cartridge'}],
    barrelLengths: [Number],
}, { timestamps: true })

export default mongoose.model('Gun', gunSchema)
