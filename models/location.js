/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const LocationSchema = new mongoose.Schema({
 neighborhood: {
   type: String,
   required: true
 }
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const LocationCollection = mongoose.model('Location', LocationSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllLocations() {
  return LocationCollection.find()
}

function addLocation (location) {
  return LocationCollection.create(location)
}

function getLocation (locationId) {
  return LocationCollection.findById(locationId)
}

function editLocation(locationId, newLocation) {
  return LocationCollection.findByIdAndUpdate(locationId, newLocation)
}

function deleteLocation (locationId) {
  return LocationCollection.findByIdAndDelete(locationId)
}

function deleteAllLocations () {
  return LocationCollection.deleteMany()
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllLocations,
  addLocation,
  editLocation,
  getLocation,
  deleteAllLocations,
  deleteLocation
}
