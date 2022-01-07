const mongoose = require('mongoose')
const Owner = require('../models/Owner')


const CompanySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    owners: {
        type: Array,
        required: true,
        minItems: 1,
        uniqueItems: true,
        items: {
            name:{
                type: String,
                required: true
            },
            socialNumber:{
                type: Number,
                required: true
            }
        }
    } 
})

module.exports = mongoose.model('Company', CompanySchema)
