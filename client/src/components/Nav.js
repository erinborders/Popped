import React, { Component } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import PopUpAlert from './PopUpAlert.js'

export default class Nav extends Component {
    state = {
        wantsAlerts: false
    }

    handleClick = evt => {
        this.setState({wantsAlerts: true})
    }

    closePopUp = () => {
        this.setState({wantsAlerts: false})
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="nav-bar">
                        <h2 id="nav-logo">Popped</h2>
                        <div>
                            <button id="zipcode-button" onClick={this.props.handleChangeZipClick}>Change Zipcode</button>
                            <button onClick={this.handleClick}>Get New Pop Up Alerts</button>
                        </div>
                    </Toolbar>
                </AppBar>

                {
                    this.state.wantsAlerts ?
                    <PopUpAlert closePopUp={this.closePopUp}/> : null
                }
            </div>
        )
    }
}