import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export default function(ComposedComponent) {
  class EmailAuthentication extends Component {
    /*static contextTypes = {
      router: React.PropTypes.object
    }*/

    componentWillMount() {
      if (!this.props.user_email) {
        this.props.handleAnonUser();
      }
    }

    componentWillUpdate(nextProps) {
      if (!this.props.user_email) {
        console.log("Whoops, lost user email state.");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { user_email: state.auth.email };
  }

  return connect(mapStateToProps, actions)(EmailAuthentication);
}
