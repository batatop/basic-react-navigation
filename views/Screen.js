'use babel';

import React from 'react';
import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"

export default class Screen extends React.Component {
    componentWillMount() {
        this.setState({
            screen: "home"
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            screen: nextProps.screen
        });
    }

    render() {
        console.log("screen")
        if(this.state.screen == "home") {
            return <Home/>
        }
        else if (this.state.screen == "about"){
            return <About/>
        }
        else {
            return <NotFound/>
        }
    }
}
