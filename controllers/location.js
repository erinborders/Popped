/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const locationApi = require('../models/location.js')
const shopApi = require('../models/shopPopUp.js')
const foodApi = require('../models/foodPopUp.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const locationRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

 // getting all locations and pop up events
locationRouter.get('/', (req, res) => {
  let getAllLocations = locationApi.getAllLocations()
  let getAllShops = shopApi.getAllShops()
  let getAllFood = foodApi.getAllFood()
  return Promise.all([getAllLocations, getAllShops, getAllFood])
    .then(([locations, shops, food]) => {
        // check syntax
        res.json([locations, shops, food])
    })
    .catch(err => {
      console.log(err)
    })
})

// getting all food pop up events
locationRouter.get('/food', (req, res) => {
  let getAllLocations = locationApi.getAllLocations()
  let getAllFood = foodApi.getAllFood()
  return Promise.all([getAllLocations, getAllFood])
      .then(([locations, food]) => {
          res.json([locations, food])
      })
      .catch(err => {
        console.log(err)
      })
})

// getting all shop pop up events
locationRouter.get('/shops', (req, res) => {
  let getAllLocations = locationApi.getAllLocations()
  let getAllShops = shopApi.getAllShops()
  return Promise.all([getAllLocations, getAllShops])
      .then(([locations, shops]) => {
          res.json([locations, shops])
      })
      .catch(err => {
        console.log(err)
      })
})

// getting all pop up events at a specific location
locationRouter.get('/:locationId', (req, res) => {
  req.body.locationId = req.params.locationId
  let getLocation = locationApi.getLocation(req.params.locationId)
  let getFood = foodApi.getFoodByLocationId(req.params.locationId)
  let getShops = shopApi.getShopsByLocationId(req.params.locationId)
  return Promise.all([getLocation, getFood, getShops])
    .then(([location, food, shops]) => {
      // check syntax
      res.json([location, food, shops])
    })
    .catch(err => {
      console.log(err)
    })
})

// creating a new location
locationRouter.post('/', (req, res) => {
  locationApi.addLocation(req.body)
    .then(newLocation => {
      res.json(newLocation)
    })
    .catch(err => {
      console.log(err)
    })
})

// updating a location
locationRouter.put('/:locationId', (req, res) => {
  locationApi.editLocation(req.params.locationId, req.body)
    .then(editedLocation => {
      res.json(editedLocation)
    })
    .catch(err => {
      console.log(err)
    })
})

// deleting a location
locationRouter.delete(':/locationId', (req, res) => {
  let deleteLocation = locationApi.deleteLocation(req.params.locationId)
  // delete food by location
  // delete shops by location
    .then(deletedLocation => {
      res.json(deletedLocation)
    })
    .catch(err => {
      console.log(err)
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  locationRouter
}
