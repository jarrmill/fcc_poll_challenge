import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Welcome extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
       <h1>Welcome to Poll Magic!</h1>
       <p> Brief description of product </p>
       <button>To Home</button>
       <button>To Github</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth.authenticated}
}

export default connect(mapStateToProps, actions)(Welcome);
