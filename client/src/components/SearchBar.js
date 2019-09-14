import React, { Component } from 'react'
import { Container, Input, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core'


export default class SearchBar extends Component {
    render() {
        return (
            <Container>
                <Paper id="search-bar">
                    <h2>Search</h2>
                    <div>
                        <Input
                            placeholder="zipcode"
                        />
                    </div>
                </Paper>
            </Container>
        )
    }
}
