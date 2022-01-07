const express = require('express')
const router = express.Router()

const Company = require('../models/Company')

//Getters
router.get('/GetCompanies', async (req,res) => {
    try {
        const companies = await Company.find()
        res.status(200).json(companies)
    } catch(error){
        res.json({message:error})
    }
})

router.get('/GetCompanyById', async (req,res) => {
    try {
        const company = await Company.findById(req.params.companyId)
        res.status(200).json(company)
    } catch(error){
        res.json({message:error})
    }
})

router.get('/GetOwnerByCompanyId', async (req,res) => {
    try {
        const company = await Company.findById(req.body.companyId)
        res.status(200).json(company.owners)
    } catch(error){
        res.json({message:error})
    }
})

//Posts
router.post('/CreateCompany', async (req, res) => {
    try {
        const company = Company({
            name: req.body.name,
            country: req.body.country,
            owners: req.body.owners
        })
        const savedCompany = await company.save()
        res.status(200).json(savedCompany)
    } catch(error) {
        res.json(error)
    }
})

//Puts
router.put('/UpdateCompanyById',async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate({
            _id: req.body.companyId
        }, {
            $set : {
                name: req.body.name,
                country: req.body.country
            }
        })
        res.status(200).json(updatedCompany)
    } catch(error) {
        res.json(error)
    }
})

router.put('/AddOwner', async (req, res) => {

    try {
        const updatedCompany = await Company.updateOne({
            _id: req.body.companyId
        }, {
            $addToSet : {
                owners: {
                    name: req.body.name, 
                    socialNumber: req.body.socialNumber
                }
            }
        })
        res.status(200).json(updatedCompany)
    } catch(error) {
        res.json(error)
    }
})


//Deletes
router.delete('/RemoveCompany', async (req,res) => {
    try {
        const removedCompany = await Company.deleteOne({
            _id: req.body.companyId
        })
        res.status(200).json(removedCompany)
    } catch(error) {
        res.json.error
    }
})


router.delete('/RemoveOwner', async (req, res) => {
    try {
        const removedOwner = await Company.updateOne({
            _id: req.body.companyId
        }, {
            $pull: { 
                owners: {
                    _id: req.body.ownerId
            }
        }
        })
        res.status(200).json(removedOwner)
    } catch(error) {
        res.json.error
    }
})




module.exports = router

