import React, { Component } from 'react'
import Atlanta from '../images/atlanta-arial.jpg'
import { Redirect } from 'react-router-dom'

export default class LandingPage extends Component {
    state = {
        redirectToHome: false
    }
    //to send users from landing page to home page with events
    fetchHomePage = () => {
        this.setState({redirectToHome: true})
    }

    //goes to home page after 3 seconds on landing page
    componentDidMount() {
        setTimeout(this.fetchHomePage, 3000)
    }

    render() {
        if(this.state.redirectToHome) {
            return <Redirect to="/events" />
        }

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
