const mongoose = require('./connection.js')
const moment = require('moment');

//TO DO: add properties in schema to hold event info
const EventSchema = new mongoose.Schema({
    eventBriteId: String,
    eventBriteCreated: Date,
    eventBriteChanged: Date,
})

const EventCollection = mongoose.model('Events', EventSchema)

function getAllEvents(){
    return EventCollection.find()
}

function deleteAllEvents(){
    return EventCollection.deleteMany()
}

function updateAllEvents(events){
    const modifiedEvents = events.map((v) => {
        v.eventBriteId = v.id
        v.eventBriteChanged = v.changed
        v.eventBriteCreated = v.created
        console.log('eventBriteChanged', v.eventBriteChanged)
        return v
    })
    return EventCollection.insertMany(modifiedEvents)

}

//get newest events 
function grabEventsForNewsletter(){
    console.log('date', moment().subtract(6, 'days').toDate())
    let afterDate = moment().subtract(6, 'days').toDate()
    return EventCollection.find({
        eventBriteCreated: {
            $gte: afterDate
        }
    })
}

//TO DO: add option to get specific categories

module.exports = {
    getAllEvents,
    deleteAllEvents,
    updateAllEvents,
    grabEventsForNewsletter
}