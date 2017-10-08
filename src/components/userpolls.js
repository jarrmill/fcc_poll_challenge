import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

class PersonalPollList extends Component {
  renderFocusPoll(){
    return (<div>Hello!</div>);
  }
  renderList(){
    return _.map(this.props.polls, poll => {
      return (<div><li onClick={() => this.selectPoll(poll._id)}>{poll.title} </li></div>);
    });
  }
  selectPoll(id){
    this.props.getSpecificPoll(id);
  }
  componentWillMount(){
    //this.props.getPolls();
    this.props.getUserPolls(this.props.email);
  }
  render() {
    return (
      <div>
        {this.renderFocusPoll()}
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    email: state.auth.email,
    polls: state.userpolls.polls,
    poll: state.focuspoll
  }
}
export default connect(mapStateToProps, actions)(PersonalPollList);
