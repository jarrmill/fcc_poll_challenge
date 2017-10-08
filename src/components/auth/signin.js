import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: '', password:''
    };
  }

  handleFirstNameChange = (evt) => {
    this.setState({ email: evt.target.value});
  }

  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value});
  }

  handleSubmit = (evt) => {
    var email = this.state.email;
    var password = this.state.password;
    evt.preventDefault();
    this.props.signinUser({email, password});
    alert(`Signing up under email: ${this.state.email}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div><label>
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleFirstNameChange}
            />
        </label></div>
        <div><label>
          <input
            type="password"
            placeholder="email"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            />
        </label></div>
        <button> Sign in</button>
      </form>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth.authenticated}
}

export default connect(mapStateToProps, actions)(Signin);
