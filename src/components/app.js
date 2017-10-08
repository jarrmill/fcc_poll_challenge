import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
    <div style={{"margin":"0"}}>
      <Header />
      {this.props.children}
    </div>
    );
  }
}
