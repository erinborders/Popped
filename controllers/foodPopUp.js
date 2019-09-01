const express = require('express')

const foodApi = require('../models/foodPopUp.js')

const foodRouter = express.Router()

// get all food pop ups
foodRouter.get('/', (req, res) => {
    foodApi.getAllFood()
        .then(foodPopUps => {
            res.json(foodPopUps)
        })
        .catch(err => {
            console.log(err)
        })
})

// get food pop ups by location?

// get specific food pop up
foodRouter.get('/:foodPopUpId', (req, res) => {
    foodApi.getOneFood(req.params.foodPopUpId)
        .then(foodPopUp => {
            res.json(foodPopUp)
        })
        .catch(err => {
            console.log(err)
        })
})

// create a new food pop up
foodRouter.post('/', (req, res) => {
    foodApi.addFood(req.body)
        .then(foodPopUp => {
            res.json(foodPopUp)
        })
        .catch(err => {
            console.log(err)
        })
})

// edit food pop up
foodRouter.put('/:foodPopUpId', (req, res) => {
    foodApi.editFood(req.params.foodPopUpId, req.body)
        .then(updatedFood => {
            res.json(updatedFood)
        })
        .catch(err => {
            console.log(err)
        })
})

// delete food pop up
foodRouter.delete('/:foodPopUpId', (req, res) => {
    foodApi.deleteFood(req.params.foodPopUpId)
        .then(deletedFood => {
            res.json(deletedFood)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = {
    foodRouter
}