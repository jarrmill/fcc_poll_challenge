import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''

    };
  }

  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value});
  }
  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value});
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    var email = this.state.email;
    var password = this.state.password;

    //Call action creator to sign up the user
    this.props.signupUser({email, password});
    alert(`Signed up as: ${this.state.email}`);
  }

  render() {
    console.log("rendering");
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            />
        </label>
        <button> Sign up</button>
      </form>
    )
  }
}

export default connect(null, actions)(Signup);
