const mongoose = require('./connection.js')

const EventSchema = new mongoose.Schema({
    eventBriteId: String,
    eventBriteChanged: Date,
}, {timestamps:true})

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
    const modifiedEvents = events.map((v) => {
        v.eventBriteId = v.id
        v.eventBriteChanged = v.changed,
        console.log('eventBriteChanged', v.eventBriteChanged)
        return v
    })
    return EventCollection.insertMany(modifiedEvents)

    // modifiedEvents.forEach(v => {
    //     try {
    //         EventCollection.update( 
    //             { eventBriteChanged : v.eventBriteChanged},
    //             v,
    //             { upsert: true } )
    //     } catch(e) {
    //         console.log(e)
    //     }
    // });
    //return modifiedEvents;
}

module.exports = {
    getAllEvents,
    deleteAllEvents,
    updateAllEvents
}