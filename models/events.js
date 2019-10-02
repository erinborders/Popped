const mongoose = require('./connection.js')

const EventSchema = new mongoose.Schema({
    events: [{
        name: {
            text: String
        }
    }]
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