import React, { Component } from 'react'
import { Container, Paper } from '@material-ui/core'

export default class SearchBar extends Component {
    render() {
        return (
            <Container>
                <Paper id="search-bar">
                    <h2>Search</h2>
                </Paper>
            </Container>
        )
    }
}
