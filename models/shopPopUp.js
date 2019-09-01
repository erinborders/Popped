const mongoose = require('./connection.js')

// info that will be in the Shop Pop Ups

const ShopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    product: {
        type: String,
        description: String,
        price: Number,
        image: String,
        required: true
    },
    wares: String,
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
        default: Date.now()
    },
    image: String,
    locationId: mongoose.Types.ObjectId
})

const ShopCollection = mongoose.model('Shop', ShopSchema)

function getAllShops() {
    return ShopCollection.find()
  }
  
  function getShopsByLocationId (locationId) {
    return ShopCollection.find({locationId: locationId})
  }
  
  function addShop (shop) {
    return ShopCollection.create(shop)
  }
  
  function getOneShop (shopId) {
    return ShopCollection.findById(shopId)
  }
  
  function editShop (shopId, newShop) {
    return ShopCollection.findByIdAndUpdate(shopId, newShop)
  }
  
  function deleteShop (shopId) {
    return ShopCollection.findByIdAndDelete(shopId)
  }
  
  function deleteAllShops () {
    return ShopCollection.deleteMany()
  }

  module.exports = {
      getAllShops,
      getShopsByLocationId,
      addShop,
      getOneShop,
      editShop,
      deleteShop,
      deleteAllShops
  }