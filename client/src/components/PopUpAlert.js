import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import SubscriptionConfirmation from './SubscriptionConfirmation.js'

export default class PopUpAlert extends Component {
    state = {
        newSubscriber: {
            name: '',
            emailAddress: ''
        },
        confirmed: false
    }

    handleNewsletterChange = evt => {
        let newSubscriber = {...this.state.newSubscriber}
        newSubscriber[evt.target.id] = evt.target.value
        this.setState({newSubscriber})
    }

    openConfirmation = () => {
        this.setState({confirmed: true})
    }

    closeConfirmation = () => {
        this.setState({confirmed: false})
    }

    handleNewsletterSubmit = evt => {
        evt.preventDefault()

        axios.post(`/api/addSubscriber/?emailAddress=${this.state.newSubscriber.emailAddress}&name=${this.state.newSubscriber.name}`)
            .then(() => {
                this.props.close()
                this.openConfirmation()
            })
    }

    
    render() {
        return (
            <div>

            <Modal show={this.props.wantsAlerts} onHide={this.props.close} >
                <Modal.Header closeButton>
                    <Modal.Title><h1>Coming Soon!</h1></Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <p>Add your email here to join our list of subscribers and get 
                            notified about new pop up events before anyone else!</p>

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
                            <button id="subscribe-button" type="submit">Get Pop Up Alerts</button>
                        </form>
                    </Modal.Body>
            </Modal>

            <SubscriptionConfirmation
                confirmed={this.state.confirmed}
                closeConfirmation={this.closeConfirmation} />
            </div>
        )
    }
}
