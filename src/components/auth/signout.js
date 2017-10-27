import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { PageContainer, Logo, Message, Button } from '../styled/styled_signout';
import { Link } from 'react-router';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render () {
    return (
      <PageContainer>
        <Logo src={require('../../assets/img/magic_boi.png')} />
        <Message>Goodbye!</Message>
        <Button to="/home">
          <h1>Home</h1>
        </Button>
      </PageContainer>
    )
  }
}

export default connect(null, actions)(Signout);
