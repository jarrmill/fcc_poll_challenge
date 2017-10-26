import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import styled from 'styled-components';

const PollItem = styled.li`
  display: flex;
  font-family: sans-serif;
  color: #1C2321;
  border-bottom: 2px solid #eee;
  border-left: 2px solid: #eee;
  text-decoration: none;
  background-color: #fff;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 15px;
  height: 72px;
  width: 100%;
  &: hover {
    text-decoration:none;
    border-bottom: 2px solid #ffc266;
  }
`
const ListOfPolls = styled.ul`
  list-style: none;
  padding-left: 0px;
  padding-top: 5px;
  width: 33%;

  @media (max-width: 600px){
    height: auto;
    width: 100%;
    display: block;
  }

`

class PollList extends Component {
  renderList(){
    return _.map(this.props.polls, poll => {
      return (<PollItem onClick={() => this.selectPoll(poll._id)}>{poll.title} </PollItem>);
    });
  }
  selectPoll(id){
    this.props.getSpecificPoll(id);
  }
  componentWillMount(){
    this.props.getPolls();

  }
  componentWillReceiveProps(nextProps){
    if(!this.props.polls){
      console.log("No focus poll selected");
      console.log("Suggesting poll: ", nextProps.polls[0]);
      this.selectPoll(nextProps.polls[0]._id);
    }else{
      console.log("Polls already in place");
      console.log("Carrying on as usual");
    }
  }
  render() {
    return (
      <ListOfPolls>
        {this.renderList()}
      </ListOfPolls>
    );
  }
}

function mapStateToProps(state){
  return {
    polls: state.polls.polls
  }
}
export default connect(mapStateToProps, actions)(PollList);
