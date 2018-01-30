'use babel';

import React from 'react';
import Navbar from './Navbar';
import Screen from './Screen';

export default class Main extends React.Component {
  componentWillMount() {
    this.setState({
        screen: ""
    })
    this.updateScreen = this.updateScreen.bind(this)
  }

  updateScreen(newScreen) {
    this.setState({
      screen: newScreen
    })
  }

  render() {
    return (
      <div>
        <Navbar updateScreen={this.updateScreen}/>
        <Screen screen={this.state.screen}/>
      </div>
    );
  }
}
