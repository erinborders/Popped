import React, { Component } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, Container, Grid, Paper } from '@material-ui/core'
import SearchBar from './SearchBar.js'
import Nav from './Nav.js'

export default class Home extends Component {
    state = {
        locations: [],
        foodPopUps: [],
        shopPopUps: [],
        events: []
    }

    componentDidMount() {
        this.fetchLocations()
        this.fetchFoodPopUps()
        this.fetchShopPopUps()
        this.fetchEvents()
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
                console.log(res.data)
                this.setState({events: res.data.events})
            })
    }

    render() {
        let locationsList = this.state.locations.map(location => {
            return(
                <div>
                    <p>{location.neighborhood}</p>
                </div>
            )
        })

        let foodList = this.state.foodPopUps.map(foodPopUp => {
            return(
                <Card>
                    <CardContent>
                        <p>{foodPopUp.restaurantName}</p>
                    </CardContent>
                </Card>
            )
        })

        let shopList = this.state.shopPopUps.map(shopPopUp => {
            return(
                <Card>
                    <CardContent>
                        <p>{shopPopUp.shopName}</p>
                    </CardContent>
                </Card>
            )
        })

        let eventList =  this.state.events ? this.state.events.map(event => {
            return(
                <Card className="eventbrite-event">
                    <CardMedia >
                        <img className="eventbrite-event-image" src={event.logo.original.url} />
                    </CardMedia>
                    <CardContent>
                        <p>{event.name.html} - {event.summary}</p>
                        <p>{event.start.local} - {event.end.local}</p>
                        <p>{event.venue.address.name}</p>
                        <p>{event.venue.address.address_1}</p> 
                        <p>Atlanta, GA, {event.venue.address.postal_code}</p>
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
                    <Grid item xs={3}>
                        <SearchBar />
                        {/* TO DO: PUT LOCATIONS IN SEARCH BAR COMPONENT */}
                            <div>
                                {locationsList}
                            </div>
                    </Grid>
                    <Grid item xs={9}>
                            <Container id="events-list">
                                <div>
                                    {foodList}
                                </div>
                                <div>
                                    {shopList}
                                </div>
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
