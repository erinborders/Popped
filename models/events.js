const mongoose = require('./connection.js')

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

module.exports = {
    getAllEvents,
    deleteAllEvents,
    updateAllEvents
}