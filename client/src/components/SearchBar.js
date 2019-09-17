import React, { Component } from 'react'
import { Container, Input, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'

export default class SearchBar extends Component {
    state = {
        events: [],
        zipcode: ''
    }

    handleSearchChange = evt => {
        let zipcode = evt.target.value 
        this.setState({zipcode})
    }

    handleSearchSubmit = evt => {
        evt.preventDefault()

        this.props.fetchEventsByZipcode(this.state.zipcode)
    }

    render() {
        
        return (
            <Container id="search-bar-container">
                <Paper id="search-bar">
                    <h2>Search</h2>
                    <form onSubmit={this.handleSearchSubmit}>
                        <SearchIcon />
                        <Input
                            placeholder="zipcode"
                            name="zipcode"
                            onChange={this.handleSearchChange}
                            value={this.state.zipcode}
                        />
                    </form>
                </Paper>
            </Container>
        )
    }
}
