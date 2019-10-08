/* Step 1
 *
 * Import needed packages
 *
 */
const express = require('express')
const app = express()

const dotenv = require('dotenv');
dotenv.config();
/* Step 2
 * 
 * import routers from controllers/
 *
 */
const { locationRouter } = require('./controllers/location.js')
const { foodRouter } = require('./controllers/foodPopUp.js')
const { shopRouter } = require('./controllers/shopPopUp.js')
const { eventRouter }  = require('./controllers/events.js')
const { eventBrite, getEventsByCategory, grabAllCategories, getEventsByZipcode } = require('./controllers/eventbritePopUp.js')
const { addEmailToNewsletter } = require('./controllers/mailChimp.js')

/* Step 3
 *
 * Register middleware...
 */

/* Step 3.a
 * ...to parse the body of the HTTP requests from a URL encoded string 
 */
app.use(express.urlencoded({extended: true}))

/* Step 3.b 
 *
 * ...to parse the body of the HTTP requests from a JSON string  
 */
app.use(express.json())


/* Step 3.c
 *
 * use the `./client/build` directory to host static resources such as css and
 * image files 
 */
app.use(express.static(`${__dirname}/client/build`))


/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
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
    //TO DO: make sure emailaddress is correct and check to make sure you need all these .thens
    
    console.log('request is reaching server')
    const email = req.query.emailAddress 
    const name = req.query.name

    

    addEmailToNewsletter(email)
        .then(res => res.json())
        .then(data => res.json(data))
 
})

//keep app awake
var http = require("http");
setInterval(function() {
    http.get("http://poppedpopups.herokuapp.com");
}, 300000); // every 5 minutes 

/* Step 5
 *
 * add catch all route to serve up the built react app for any request not made to our
 * /api/... routes.
 */
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

/* Step 6
 *
 * Set the port the server is to run on
 *
 * NOTE: keep these lines at the bottom of the file 
 */
const PORT = process.env.PORT || 3001

/* Step 7
 *
 * Start the server
 */
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
