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
  text-decoration: none;
  background-color: #fff;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 5px;
  height: 50px;
  width: 100%;
  &: hover {
    text-decoration:none;
    border-bottom: 2px solid #389B9A;
  }
`
const ListOfPolls = styled.ul`
  list-style: none;
  padding-left: 0px;
  width: 30%;

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
