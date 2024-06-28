import mongoose from 'mongoose'
import Company from './companyModel.js'
import Force from './forceModel.js'
import Designation from './designationModel.js'
import FiringMode from './firingModeModel.js'
import Action from './actionModel.js'
import Cartridge from './cartridgeModel.js'

const { Schema } = mongoose

const gunSchema = new Schema({
    name: {type: String, required: true},
    inventorCompany: {type: Schema.Types.ObjectId, ref: 'Company'},
    manufactoringCompanies: [{type: Schema.Types.ObjectId, ref: 'Company'}],
    impelmentedForces: [{type: Schema.Types.ObjectId, ref: 'Force'}],
    designations: [{type: Schema.Types.ObjectId, ref: 'Designation'}],
    firingModes: [{types: Schema.Types.ObjectId, ref: 'FiringMode'}],
    actionType: {type: Schema.Types.ObjectId, ref: 'Action'},
    cartridgeTypes: [{type: Schema.Types.ObjectId, ref: 'Cartridge'}],
    barrelLengths: [Number],
}, { timestamps: true })

export default mongoose.Model('Gun', gunSchema) 
