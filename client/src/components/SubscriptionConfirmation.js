import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'

export default class SubscriptionConfirmation extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.confirmed} onHide={this.props.closeConfirmation}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thanks for signing up!</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <p>The newsletter feature will be live on October 28th. 
                                We're looking forward to sending you information on all 
                                the latest pop up events in your area!</p>
                        </Modal.Body>
                </Modal>
            </div>
        )
    }
}
