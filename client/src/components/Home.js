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
        categories: [],
        searchedEvents: [],
        hasSearched: false
    }

    componentDidMount() {
        this.fetchLocations()
        this.fetchFoodPopUps()
        this.fetchShopPopUps()
        this.fetchEvents()
        this.fetchCategories()
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

    fetchCategories = () => {
        axios.get('/api/fetchEvents')
            .then(res => {
                let categories = res.data.events.map(event => {
                    if(event.category) {
                        return event.category.name
                    }
                })
                let categorySet = new Set(categories)
                let categoryNames = Array.from(categorySet)
                console.log(categories)
                this.setState({categories: categoryNames})
            })
    }

    fetchSearchedEvents = () => {
        let searchedEvents = this.state.events.filter(event => event.venue.address.postal_code)
        console.log(searchedEvents)
        this.setState({searchedEvents: searchedEvents})
    }

    handleSearchChange = evt => {
        let zipcode = evt.target.value 
        this.setState({zipcode})
    }

    handleSearchSubmit = evt => {
        evt.preventDefault()

        this.fetchSearchedEvents()
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

        let searchedEventsList = this.state.searchedEvents ? this.state.searchedEvents.map(event => {
            return (
                <Card className="eventbrite-event">
                    <CardMedia >
                        <img className="eventbrite-event-image" src={event.logo.original.url} />
                    </CardMedia>
                    <CardContent>
                        <div className="event-content-div">
                            <h3>{event.name.html}</h3> 
                            <p>{event.summary}</p>
                            <p>{event.start.local} - {event.end.local}</p>
                            <p>{event.venue.address.name}</p>
                            <p>{event.venue.address.address_1}</p> 
                            <p>Atlanta, GA, {event.venue.address.postal_code}</p>
                        </div>
                    </CardContent>
                </Card>
            )
        }) : <div><p>No results found</p></div>

        let eventList =  this.state.events ? this.state.events.map(event => {
            return(
                <Card className="eventbrite-event">
                    <CardMedia >
                        <img className="eventbrite-event-image" src={event.logo.original.url} />
                    </CardMedia>
                    <CardContent>
                        <div className="event-content-div">
                            <h3>{event.name.html}</h3> 
                            <p>{event.summary}</p>
                            <p>{event.start.local} - {event.end.local}</p>
                            <p>{event.venue.address.name}</p>
                            <p>{event.venue.address.address_1}</p> 
                            <p>Atlanta, GA, {event.venue.address.postal_code}</p>
                        </div>
                    </CardContent>
                </Card>
            )
        }) : null

        return (
            <div id="home-page-container">
                <Grid container>
                    <Grid item xs={12}>
                        <Nav />
                    </Grid>
                    <Grid item xs={12}>
                        <Categories categories={this.state.categories} />
                    </Grid>
                    <Grid item xs={3}>
                        <SearchBar 
                            searchedEvents={this.state.searchedEvents}
                            fetchSearchedEvents={this.fetchSearchedEvents}
                            handleSearchChange={this.handleSearchChange}
                            handleSearchSubmit={this.handleSearchSubmit} />
                        {/* TO DO: PUT LOCATIONS IN SEARCH BAR COMPONENT */}
                            {/* <div>
                                {locationsList}
                            </div> */}
                        <CreatePopUpForm />
                    </Grid>
                    <Grid item xs={9}>
                            <Container id="events-list">
                                {/* <div>
                                    {foodList}
                                </div>
                                <div>
                                    {shopList}
                                </div> */}
                                <div>
                                    {eventList}
                                </div>
                            </Container>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
