// const express = require('express')
// const eventBriteRouter = express.Router()
const request = require('request');
const fetch = require('node-fetch');

// TO DO: DELETE THIS 
const eventBrite = fetch(`https://www.eventbriteapi.com/v3/events/search/?q=pop%20up&location.address=Atlanta&expand=venue,category&token=${process.env.PRIVATE_TOKEN}`)

const getEventsByCategory = (categoryId, zipcode) => {
 return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=pop%20up&location.address=${zipcode}&categories=${categoryId}&expand=venue,category&token=${process.env.PRIVATE_TOKEN}`)
}

const grabAllCategories = fetch(`https://www.eventbriteapi.com/v3/categories/?token=${process.env.PRIVATE_TOKEN}`)

const getEventsByZipcode = (zipcode) => {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=pop%20up&location.address=${zipcode}&expand=venue,category&token=${process.env.PRIVATE_TOKEN}`)
}



//  request({
//         method: 'GET',
//         url: `https://www.eventbriteapi.com/v3/events/search?q=pop-up&sort_by=date`,
//         headers: {
//           'Authorization': 'Bearer ' + process.env.PRIVATE_TOKEN,
//           'Content-Type': 'application/json'
//         }}, function (error, response, body) {
//             console.log('body',body)
//             events = body
//       })






module.exports = {
    eventBrite,
    getEventsByCategory,
    grabAllCategories,
    getEventsByZipcode
}