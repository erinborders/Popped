
const express = require('express')
const app = express()

const dotenv = require('dotenv');
dotenv.config();

const { locationRouter } = require('./controllers/location.js')
const { foodRouter } = require('./controllers/foodPopUp.js')
const { shopRouter } = require('./controllers/shopPopUp.js')
const { eventRouter }  = require('./controllers/events.js')
const { eventBrite, getEventsByCategory, grabAllCategories, getEventsByZipcode } = require('./controllers/eventbritePopUp.js')
const { addEmailToNewsletter } = require('./controllers/mailChimp.js')


app.use(express.urlencoded({extended: true}))


app.use(express.json())



app.use(express.static(`${__dirname}/client/build`))

app.use('/api/locations', locationRouter)
app.use('/api/food', foodRouter)
app.use('/api/shops', shopRouter)
app.use('/api/eventsForNewsletter', eventRouter)



let events = [];
eventBrite
.then(res => res.json())
.then(json => { 
    events = json
})

app.get('/api/fetchEvents', (req, res) => {
    res.json(events)
})

app.get('/api/fetchEventCategories', (req, res) => {
    getEventsByCategory(req.query.categories, req.query.zipcode)
        .then(res => {
            return res.json()
        })
        .then((data) => { 
            res.json(data)
        })
})

app.get('/api/fetchEventsByZipcode', (req, res) => {
    getEventsByZipcode(req.query.zipcode)
        .then(res => {
            return res.json()
        })
        .then(data => {
            res.json(data)
        })
})

let categories = [];
grabAllCategories
.then(res => res.json())
.then(json => { 
    categories = json
})

app.get('/api/fetchAllCategories', (req, res) => {
    res.json(categories)
})

//add email to mailchimp newsletter
app.post('/api/addSubscriber', (req, res) => { 
    const email = req.query.emailAddress 
    const name = req.query.name

    addEmailToNewsletter(email)
        .then(v => v.json())
        .then(data => res.json(data))
        .catch(res.send) 
})

//keep app awake
// var http = require("http");
// setInterval(function() {
//     http.get("http://poppedpopups.herokuapp.com");
// }, 300000); // every 5 minutes 


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
