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

    res.status(200).end()
})

//updating the array of events from eventbrite
//TO DO: schedule a post request so that this happens once a day
eventRouter.post('/', (req, res) => {
    let events = [];
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=pop%20up&location.address=Atlanta&expand=venue,category&token=${process.env.PRIVATE_TOKEN}`)
        .then(res => res.json())
        .then(json => {
            events = json.events
            eventApi.updateAllEvents(events)
        })
        .then(newEvents => {
            res.json(newEvents)
        })
        .catch(err => {
            console.log('error', err)
        })

})

//TO DO: incorporate mailchimp api
//TO DO: look for events in my date range, make call to eventbrite api for info on these events, then send those in mailchimp newsletter



module.exports = {
    eventRouter
}