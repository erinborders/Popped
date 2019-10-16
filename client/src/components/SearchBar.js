import React, { Component } from 'react'
import { Container, TextField, Paper } from '@material-ui/core'
import Atlanta from '../images/atlanta-arial.jpg'

export default class SearchBar extends Component {

    render() {
        
        return (
            <Container id="search-bar-container">
                <img id="zipcode-image" src={Atlanta} />
                <Paper id="search-bar">
                    <div id="search-bar-lv2">
                    <h2>Welcome to Popped! Where would you like to find pop ups?</h2>
                        <form onSubmit={this.props.handleSearchSubmit}>
                            {/* <SearchIcon /> */}
                            <TextField
                                id="zipcode-input"
                                // variant="outlined"
                                placeholder="zipcode"
                                name="zipcode"
                                onChange={this.props.handleSearchChange}
                                value={this.props.zipcode}
                                />
                        </form>
                        </div>
                </Paper>
            </Container>
        )
    }
}
