// const express = require('express')
// const eventBriteRouter = express.Router()
const request = require('request');
const fetch = require('node-fetch');
var http = require("http");

// TO DO: DELETE THIS 
const eventBrite = fetch(`https://www.eventbriteapi.com/v3/events/search/?q=pop%20up&location.address=Atlanta&expand=venue,category&token=${process.env.PRIVATE_TOKEN}`)

const getEventsByCategory = (categoryId, zipcode) => {
 return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=pop%20up&location.address=${zipcode}&categories=${categoryId}&expand=venue,category&token=${process.env.PRIVATE_TOKEN}`)
}

const grabAllCategories = fetch(`https://www.eventbriteapi.com/v3/categories/?token=${process.env.PRIVATE_TOKEN}`)

const getEventsByZipcode = (zipcode) => {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=pop%20up&location.address=${zipcode}&expand=venue,category&token=${process.env.PRIVATE_TOKEN}`)
}

//to keep app from going to sleep
setInterval(function() {
    http.get("https://poppedpopups.herokuapp.com");
}, 1800000); //ping every 30 min


module.exports = {
    eventBrite,
    getEventsByCategory,
    grabAllCategories,
    getEventsByZipcode
}