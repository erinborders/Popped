const mongooose = require('./connection.js')

const FoodSchema = new mongooose.Schema({
    restaurantName: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    meal: {
        type: Object,
        mealName: String,
        description: String,
        image: String,
        price: Number,
        required: true
    },
    price: {
        type: String,
        enum: ['$', '$$', '$$$', '$$$$'],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        time: String,
        default: Date.now() // remove this?
    },
    image: String,
    locationId: mongooose.Types.ObjectId
})

const FoodCollection = mongooose.model('Food', FoodSchema)

function getAllFood() {
    return FoodCollection.find()
  }
  
  function getFoodByLocationId (locationId) {
    return FoodCollection.find({locationId: locationId})
  }
  
  function addFood (food) {
    return FoodCollection.create(food)
  }
  
  function getOneFood (foodId) {
    return FoodCollection.findById(foodId)
  }
  
  function editFood (foodId, newFood) {
    return FoodCollection.findByIdAndUpdate(foodId, newFood)
  }
  
  function deleteFood (foodId) {
    return FoodCollection.findByIdAndDelete(foodId)
  }

  function deleteFoodByLocation(locationId) {
    return FoodCollection.findByIdAndDelete({locationId: locationId})
  }
  
  function deleteAllFood () {
    return FoodCollection.deleteMany()
  }

  module.exports = {
    getAllFood,
    addFood,
    getOneFood,
    editFood,
    deleteFood,
    deleteFoodByLocation,
    deleteAllFood,
    getFoodByLocationId
  }