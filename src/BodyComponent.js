import React, { Component } from 'react'
import App from './App';

export default class BodyComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Features</a>
                            <a className="nav-item nav-link" href="#">Pricing</a>
                            <a className="nav-item nav-link disabled" href="#">Disabled</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
