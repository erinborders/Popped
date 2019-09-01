const express = require('express')

const foodApi = require('../models/foodPopUp.js')

const foodRouter = express.Router()

// create a new food pop up
foodRouter.post('/', (req, res) => {
    req.body.locationId = req.params.locationId
    foodApi.addFood(req.body)
        .then(foodPopUp => {
            res.json(foodPopUp)
        })
})