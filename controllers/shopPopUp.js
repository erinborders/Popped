const express = require('express')

const shopApi = require('../models/shopPopUp.js')

const shopRouter = express.Router()

// get all shop pop ups
shopRouter.get('/', (req, res) => {
    shopApi.getAllShops()
        .then(shopPopUps => {
            res.json(shopPopUps)
        })
        .catch(err => {
            console.log(err)
        })
})

// get shop pop ups by location?

// get one shop pop up
shopRouter.get('/:shopPopUpId', (req, res) => {
    shopApi.getOneShop(req.params.shopPopUpId)
        .then(shopPopUp => {
            res.json(shopPopUp)
        })
        .catch(err => {
            console.log(err)
        })
})

// create a shop pop up
shopRouter.post('/', (req, res) => {
    shopApi.addShop(req.body)
        .then(newShop => {
            res.json(newShop)
        })
        .catch(err => {
            console.log(err)
        })
})

// update a shop pop up
shopRouter.put('/:shopPopUpId', (req, res) => {
    shopApi.editShop(req.params.shopPopUpId, req.body)
        .then(editedShop => {
            res.json(editedShop)
        })
        .catch(err => {
            console.log(err)
        })
})

// delete a shop pop up
shopRouter.delete('/:shopPopUpId', (req, res) => {
    shopApi.deleteShop(req.params.shopPopUpId)
        .then(deletedShop => {
            res.json(deletedShop)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = {
    shopRouter
}