import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    state = {
        locations: [],
        foodPopUps: [],
        shopPopUps: []
    }

    componentDidMount() {
        this.fetchLocations()
            .then(() => {
                this.fetchFoodPopUps()
            })
            .then(() => {
                this.fetchShopPopUps()
            })
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
                <div>
                    <p>{foodPopUp.restaurantName}</p>
                </div>
            )
        })

        let shopList = this.state.shopPopUps.map(shopPopUp => {
            return(
                <div>
                    <p>{shopPopUp.shopName}</p>
                </div>
            )
        })

        return (
            <div>
                <div>
                    {locationsList}
                </div>
                <div>
                    {foodList}
                </div>
                <div>
                    {shopList}
                </div>
            </div>
        )
    }
}
