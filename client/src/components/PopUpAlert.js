import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import axios from 'axios'

export default class PopUpAlert extends Component {
    state = {
        newSubscriber: {
            name: '',
            emailAddress: ''
        }
    }

    handleNewsletterChange = evt => {
        let newSubscriber = {...this.state.newSubscriber}
        newSubscriber[evt.target.id] = evt.target.value
        this.setState({newSubscriber})
    }

    handleNewsletterSubmit = evt => {
        evt.preventDefault()

        axios.post(`/api/addSubscriber/?emailAddress=${this.state.newSubscriber.emailAddress}&name=${this.state.newSubscriber.name}`)
    }
    
    render() {
        return (
            <div className="popup-alert-signup">
                <h1>Test</h1>
                <form onSubmit={this.handleNewsletterSubmit} autoComplete="off">
                    <TextField 
                        required
                        id="name"
                        label= "First and Last Name"
                        value={this.state.newSubscriber.name}
                        margin="normal"
                        onChange={this.handleNewsletterChange}
                    />
                    <TextField
                        required
                        id="emailAddress"
                        label="Email Address"
                        value={this.state.newSubscriber.emailAddress}
                        margin="normal"
                        onChange={this.handleNewsletterChange}
                        />
                    <button type="submit">Get Pop Up Alerts</button>
                </form>
            </div>
        )
    }
}
