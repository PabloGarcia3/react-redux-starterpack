import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">
                                React-Redux Starterpack
                            </h1>
                        </header>
                        <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and
                            save to reload.
                        </p>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
