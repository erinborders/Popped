import React, { Component } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, Container, Grid, Paper } from '@material-ui/core'
import SearchBar from './SearchBar.js'
import Nav from './Nav.js'
import CreatePopUpForm from './CreatePopUpForm.js'
import Categories from './Categories.js'

export default class Home extends Component {
    state = {
        locations: [],
        foodPopUps: [],
        shopPopUps: [],
        events: [],
        eventsByZipcode: [],
        eventsByCategory: [],
        hasClickedCategory: false,
        zipcode: ''
    }

    componentDidMount() {
        this.fetchLocations()
        this.fetchFoodPopUps()
        this.fetchShopPopUps()
        // this.fetchEvents()
    }

    fetchLocations = () => {
        axios.get('/api/locations')
            .then(res => {
                this.setState({locations: res.data})
            })
    }

    fetchFoodPopUps = () => {
        axios.get('/api/food')
            .then(res => {
                this.setState({foodPopUps: res.data})
            })
    }

    fetchShopPopUps = () => {
        axios.get('/api/shops')
            .then(res => {
                this.setState({shopPopUps: res.data})
            })
    }

    fetchEvents = () => {
        axios.get('/api/fetchEvents')
            .then(res => {
                this.setState({events: res.data.events})
            })
    }

    handleSearchChange = evt => {
        let zipcode = evt.target.value 
        this.setState({zipcode})
    }

    handleSearchSubmit = evt => {
        evt.preventDefault()

        this.fetchEventsByZipcode(this.state.zipcode)
    }

    fetchEventsByZipcode = (zipcode) => {
        axios.get(`/api/fetchEventsByZipcode/?zipcode=${zipcode}`)
            .then(res => {
                console.log(res.data.events)
                let zipcodeEvents = [...this.state.eventsByZipcode]
                // res.data.events.map(event => zipcodeEvents.push(event))
                zipcodeEvents = res.data.events
                this.setState({eventsByZipcode: zipcodeEvents})
                this.setState({hasZipcode: true})
            })
    }

    handleChangeZipClick = evt => {
        this.setState({hasZipcode: false})
        this.setState({hasClickedCategory: false})
    }

    // gets events by category and sets them in state
    handleCategoryClick = (evt) => {
        axios.get(`/api/fetchEventCategories/?categories=${evt.target.name}&zipcode=${this.state.zipcode}`)
            .then(res => {
                let copiedCategoryEvents = [...this.state.eventsByCategory]
                // res.data.events.map(event => copiedCategoryEvents.push(event))
                copiedCategoryEvents = res.data.events
                this.setState({eventsByCategory: copiedCategoryEvents})
                this.setState({hasClickedCategory: true})
            })
    }

    render() {
        // let locationsList = this.state.locations.map(location => {
        //     return(
        //         <div>
        //             <p>{location.neighborhood}</p>
        //         </div>
        //     )
        // })

        // let foodList = this.state.foodPopUps.map(foodPopUp => {
        //     return(
        //         <Card>
        //             <CardContent>
        //                 <p>{foodPopUp.restaurantName}</p>
        //             </CardContent>
        //         </Card>
        //     )
        // })

        // let shopList = this.state.shopPopUps.map(shopPopUp => {
        //     return(
        //         <Card>
        //             <CardContent>
        //                 <p>{shopPopUp.shopName}</p>
        //             </CardContent>
        //         </Card>
        //     )
        // })


        let eventList =  this.state.eventsByZipcode[0] ? this.state.eventsByZipcode.map(event => {
            return(
                <Card className="eventbrite-event">
                    {
                        event.logo ? 
                        <CardMedia >
                        <img className="eventbrite-event-image" src={event.logo.original.url} />
                    </CardMedia> : null
                    }
                    <CardContent>
                        <div className="event-content-div">
                            <h3>{event.name.html}</h3> 
                            <p>{event.summary}</p>
                            <p>{event.start.local} - {event.end.local}</p>
                            <p>{event.venue.address.name}</p>
                            <p>{event.venue.address.address_1}</p> 
                            <p>{event.venue.address.city}, {event.venue.address.region}, {event.venue.address.postal_code}</p>
                        </div>
                    </CardContent>
                </Card>
            )
        }) : <p>No results for this zipcode</p>

        let eventsByCategoryList = this.state.eventsByCategory[0] ? this.state.eventsByCategory.map(event => {
            return(
                <Card className="eventbrite-event">
                    {
                        event.logo ? 
                        <CardMedia >
                        <img className="eventbrite-event-image" src={event.logo.original.url} />
                    </CardMedia> : null
                    }
                    <CardContent>
                        <div className="event-content-div">
                            <h3>{event.name.html}</h3> 
                            <p>{event.summary}</p>
                            <p>{event.start.local} - {event.end.local}</p>
                            <p>{event.venue.address.name}</p>
                            <p>{event.venue.address.address_1}</p> 
                            <p>{event.venue.address.city}, {event.venue.address.region}, {event.venue.address.postal_code}</p>
                        </div>
                    </CardContent>
                </Card>
            )
        }) : <div>No results for this category</div>


        return (
            
                
                    this.state.hasZipcode ?
                <div id="home-page-container">
                <Grid container>
                    <Grid item xs={12}>
                        <Nav handleChangeZipClick={this.handleChangeZipClick} />
                    </Grid>
                    <Grid item xs={12}>
                        <Categories 
                            handleCategoryClick={this.handleCategoryClick}
                            eventsByZipcode={this.state.eventsByZipcode} />
                    </Grid>
                    {/* <Grid item xs={3}>
                        <CreatePopUpForm />
                    </Grid> */}
                    <Grid item xs={12}>
                            <Container id="events-list">
                                {/* <div>
                                    {foodList}
                                </div>
                                <div>
                                    {shopList}
                                </div> */}
                                <div>
                                    {
                                        this.state.hasClickedCategory ? eventsByCategoryList : eventList
                                    }
                                </div>
                            </Container>
                    </Grid>
                </Grid>
            </div> : 
            <SearchBar 
                searchedEvents={this.state.searchedEvents}
                fetchEventsByZipcode={this.fetchEventsByZipcode}
                handleSearchChange={this.handleSearchChange}
                handleSearchSubmit={this.handleSearchSubmit}
                zipcode={this.state.zipcode}
                
         />
            
        )
    }
}
