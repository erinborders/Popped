import React, { Component } from 'react'
import Atlanta from '../images/atlanta-arial.jpg'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <div id="landing-page-container">
                    <div id="image-container">
                        <img id="landing-page-image" src={Atlanta} />
                    </div>
                    <div id="circle">
                        <h1 className="logo">Popped</h1>
                        <p className="subtitle">Atlanta pop ups in one place</p>
                    </div>
                </div>
            </div>
        )
    }
}
