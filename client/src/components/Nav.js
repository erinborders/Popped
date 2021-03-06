import React, { Component } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import PopUpAlert from './PopUpAlert.js'

export default class Nav extends Component {
    state = {
        wantsAlerts: false
    }

    open = () => {
        this.setState({wantsAlerts: true})
    }

    close = () => {
        this.setState({wantsAlerts: false})
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="nav-bar">
                        <h2 id="nav-logo">The Pop Up Guide</h2>
                        <div id="nav-buttons">
                            <button id="zipcode-button" onClick={this.props.handleChangeZipClick}>Change Zipcode</button>
                            <button id="popup-alert-button" onClick={this.open}>Join Newsletter</button>
                        </div>
                    </Toolbar>
                </AppBar>
                    <PopUpAlert 
                        wantsAlerts={this.state.wantsAlerts}
                        close={this.close}
                        />
                {/* {
                    this.state.wantsAlerts ?
                    <PopUpAlert closePopUp={this.closePopUp}/> : null
                } */}
            </div>
        )
    }
}