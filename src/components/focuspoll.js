import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import styled from "styled-components"
import {Doughnut} from 'react-chartjs-2';
import grid from '../assets/img/grid.png';

const DaFocusPoll = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 10px;
  height: 90%;
  width: 90%;
  background-image: url(${grid});
  justify-content: center;
  align-items: center;

  @media (max-width: 600px){
    margin: 0px;
    display: block;
    width: 100%;
    background-color: #ddd;
  }
`
const DaContainer= styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  display: flex;
  height: 30px;
  width: 200px;
  margin: 5px;
  border: none;
  font-family: sans-serif;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  width: 80px;
  &: hover {
    background-color: #005f5f;
    text-decoration:none;
  }
`
class FocusPoll extends Component {
  constructor(props) {
    super(props);
    this.vote = this.vote.bind(this);
    this.state = {
      errorMessage : ''
    };
  }
  componentWillMount(){

  }
  componentWillReceiveProps(nextProps){
    //nothing here yet, was for debugging state changes
  }
  testEvent(){
    console.log("Howdy howdy!");
  }
  renderfocusPoll(){
    var poll = this.props.poll;
    var dataArray = [];
    var labelArray = [];
    if (poll.focuspoll){
        var focuspoll = poll.focuspoll.options
        for (var i in focuspoll){
          dataArray.push(focuspoll[i].y);
          labelArray.push(focuspoll[i].x);
        }
        const data = {
            datasets: [{
              data: dataArray,
              backgroundColor: [
                  '#1C2321',
                  '#7D98A1',
                  '#5E6572',
                  '#A9B4C2',
                  '#EEF1EF',
              ]
            }],
            labels: labelArray,
        }
        console.log(dataArray, labelArray);
        console.log("Data: ", data);
        return (<Doughnut data={data} getElementAtEvent={(elems) => {this.handleVote(elems)}} />);
        }
    return <div>Loading...</div>;
  }
  handleVote(elems){
    console.log("Index: ", elems[0]._index);
    const voteKey =  this.props.poll.focuspoll.options[elems[0]._index].x
    this.vote(voteKey);
  }
  renderOptions(){
    var poll = this.props.poll;
    var optionList = [];
    if (poll.focuspoll){
      var options = poll.focuspoll.options;
      options.forEach(function(option){
        optionList.push(<div><Button onClick={() => this.vote(option.x)}>{option.x}</Button></div>)
      }, this);
      /*for (var key in focuspoll){
        console.log
        optionList.push(<div><button onClick={() => this.vote(key)}>{key}</button></div>);
      }*/
      /*focuspoll.forEach(option){
        console.log("Options: ", option.x, option.y)
      });*/
      return optionList;
    }
    else return (<div>Sorry!</div>);
  }
  renderError(){
    switch(this.state.errorMessage){
      case "anonVote":
        return (<div>Please sign up or sign in to enable voting)</div>);
    }
  }

  vote(voteKey){
    var email = this.props.email;
    var poll = this.props.poll.focuspoll;
    var voter_list = poll.voters;
    console.log("This is the voteKey", voteKey);
    if(this.props.authenticated){
      this.props.vote(poll._id, voteKey, email, voter_list);
    }else{
      this.setState({errorMessage: "anonVote"});
    }
  }
  render() {
    return (
      <DaFocusPoll>
        {this.renderfocusPoll()}
        {this.renderError()}
      </DaFocusPoll>
    );
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated,
    email: state.auth.email,
    poll: state.focuspoll
  }
}
export default connect(mapStateToProps, actions)(FocusPoll);
