import React, { Component } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class Nav extends Component {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="nav-bar">
                        <h2 id="nav-logo">Popped</h2>
                        <button id="zipcode-button" onClick={this.props.handleChangeZipClick}>Change Zipcode</button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}