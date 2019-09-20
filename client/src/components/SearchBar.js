import React, { Component } from 'react'
import { Container, Input, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'

export default class SearchBar extends Component {

    render() {
        
        return (
            <Container id="search-bar-container">
                <Paper id="search-bar">
                    <h2>Search For Pop Ups in Your Area</h2>
                    <form onSubmit={this.props.handleSearchSubmit}>
                        <SearchIcon />
                        <Input
                            placeholder="zipcode"
                            name="zipcode"
                            onChange={this.props.handleSearchChange}
                            value={this.props.zipcode}
                        />
                    </form>
                </Paper>
            </Container>
        )
    }
}
