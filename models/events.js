const mongoose = require('./connection.js')

const EventSchema = new mongoose.Schema({
    
})

const EventCollection = mongoose.model('Events', EventSchema)

function getAllEvents(){
    return EventCollection.find()
}

function deleteAllEvents(){
    return EventCollection.deleteMany()
}

function updateAllEvents(events){
    return EventCollection.insertMany(events)
}

module.exports = {
    getAllEvents,
    deleteAllEvents,
    updateAllEvents
}