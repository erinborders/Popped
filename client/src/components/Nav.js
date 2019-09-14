import React, { Component } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <h2>Popped</h2>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}