import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormContainer, FormInput, DaForm, DaDiv} from '../styled/forms.js';
import {FormTitle, FormButton, FormIcon, FormRow} from '../styled/forms.js';
import {DivRow, DivIcon, DivText, DaLogo} from '../styled/forms.js';
import * as actions from '../../actions';
import '../../assets/font-awesome/css/font-awesome.css'

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
      <FormContainer>
        <DaForm onSubmit={this.handleSubmit}>
          <DaLogo src={require('../../assets/img/magic_boi.png')}/>
          <FormTitle>Sign In</FormTitle>
          <FormRow>
            <label>
              <FormIcon><span className="fa fa-user-circle"></span></FormIcon>
              <FormInput
                type="text"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleFirstNameChange}
                />
            </label>
          </FormRow>
          <FormRow>
            <label>
              <FormIcon><span className="fa fa-key"></span></FormIcon>
              <FormInput
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                />
              </label>
          </FormRow>
          <FormButton> Sign in</FormButton>
        </DaForm>
      </FormContainer>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth.authenticated}
}

export default connect(mapStateToProps, actions)(Signin);
