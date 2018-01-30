'use babel';

import React from 'react';

export default class Navbar extends React.Component {
    render() {
        console.log("navbar")
        return(
        <div style={{backgroundColor: "red"}}>
            <button onClick={this.props.updateScreen.bind(this, "home")}>Home</button>
            <button onClick={this.props.updateScreen.bind(this, "about")}>About</button>
        </div>
        );
    }
}
