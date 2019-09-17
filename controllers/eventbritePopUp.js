// const express = require('express')
// const eventBriteRouter = express.Router()
const request = require('request');
const fetch = require('node-fetch');


const eventBrite = fetch(`https://www.eventbriteapi.com/v3/events/search/?q=pop%20up&location.address=Atlanta&expand=venue,category&token=${process.env.PRIVATE_TOKEN}`)

// const eventBriteCategories = fetch(`https://www.eventbriteapi.com/v3/categories/${category}/?token=${process.env.PRIVATE_TOKEN}`)

// TO DO: CREATE EVENT LISTENER FOR SEARCH QUERY 

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
    eventBrite
    // eventBriteCategories
}