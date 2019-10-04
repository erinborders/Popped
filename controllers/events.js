const express = require('express')

const eventApi = require('../models/events.js')

const eventRouter = express.Router()

const fetch = require('node-fetch')

//getting all events from eventbrite api
eventRouter.get('/', (req, res) => {
    eventApi.getAllEvents()
        .then(events => {
            res.json(events)
        })
        .catch(err => {
            console.log('error', err)
        })
})

//TO DO: figure out what's wrong with this
eventRouter.delete('/', (req, res) => {
    eventApi.deleteAllEvents()
    .catch(err => {
        console.log('error', err)
    })
})

//updating the array of events from eventbrite
eventRouter.post('/', (req, res) => {
    //figure out a way to delete previous events
    // eventApi.deleteAllEvents()
    
    let events = [];
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=pop%20up&location.address=Atlanta&expand=venue,category&token=${process.env.PRIVATE_TOKEN}`)
    .then(res => res.json())
    .then(json => {
        events = json
        eventApi.updateAllEvents(events)
    })
    // .then(() => {
    //     eventApi.updateAllEvents(events)
    // })
    .then(newEvents => {
        res.json(newEvents)
    })
    .catch(err => {
        console.log('error', err)
    })

    })

    


module.exports = {
    eventRouter
}