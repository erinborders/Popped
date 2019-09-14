import React, { Component } from 'react'
import { Container, Input, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'

export default class SearchBar extends Component {
    state = {
        events: [],
        zipcode: ''
    }

    handleChange = evt => {
        let zipcode = evt.target.value 
        this.setState({zipcode})
    }

    handleSubmit = evt => {
        evt.preventDefault()

        axios.get(`/api/fetchEvents/?zipcode=${this.state.zipcode}`)
            .then(res => {
                this.setState({events: res.data.events})
            })
    }

    render() {
        return (
            <Container id="search-bar-container">
                <Paper id="search-bar">
                    <h2>Search</h2>
                    <form onSubmit={this.handleSubmit}>
                        <SearchIcon />
                        <Input
                            placeholder="zipcode"
                            name="zipcode"
                            onChange={this.handleChange}
                            value={this.state.zipcode}
                        />
                    </form>
                </Paper>
            </Container>
        )
    }
}
