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
//TO DO: try calling delete all events in update all events function
//TO DO: try putting logic to check for changes in collection here too
function updateAllEvents(events){
    return EventCollection.insertMany(events)
}

module.exports = {
    getAllEvents,
    deleteAllEvents,
    updateAllEvents
}