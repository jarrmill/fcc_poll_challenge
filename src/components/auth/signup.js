import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import styled from 'styled-components';
import {FormContainer, FormInput, DaForm, DaDiv, DaLogo} from '../styled/forms.js';
import {FormTitle, FormButton, FormIcon, FormRow} from '../styled/forms.js';
import {DivTitle, DivRow, DivIcon, DivText} from '../styled/forms.js';

const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: red;
  color: white;
  border-style: none;

  &: hover{
    background-color: maroon;
    color: #ddd;
  }
`
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
    return (
      <FormContainer>
        <DaForm onSubmit={this.handleSubmit}>
          <DaLogo src={require('../../assets/img/magic_boi.png')}/>
          <FormTitle> Sign Up</FormTitle>
            <FormRow>
              <FormIcon><span className="fa fa-user-circle"></span></FormIcon>
              <FormInput
                type="text"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                />
            </FormRow>
            <FormRow>
              <FormIcon><span className="fa fa-key"></span></FormIcon>
              <FormInput
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                />
            </FormRow>
          <FormButton> Sign up</FormButton>
        </DaForm>
        {/* sepator for different divs blah blah blah blah blah */}
        <DaDiv>
          <DivTitle>Why Vote Magic?</DivTitle>
          <DivRow>
           <DivIcon><span className="fa fa-clock-o" ></span></DivIcon>
           <DivText>Quick Quick Quick!</DivText>
          </DivRow>
          <DivRow>
            <DivIcon><span className="fa fa-users"></span></DivIcon>
            <DivText>Share with your friends!</DivText>
          </DivRow>
          <DivRow>
            <DivIcon><span className="fa fa-lock"></span></DivIcon>
            <DivText>So obscure no one will ever hack us!</DivText>
          </DivRow>
        </DaDiv>
      </FormContainer>
    )
  }
}

export default connect(null, actions)(Signup);
