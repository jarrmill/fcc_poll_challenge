import {DaFocusPoll, PollContainer, PollTitle, DaContainer} from './styled/styled_focus_poll.js';
import {ButtonContainer, Button, DaOptionBar} from './styled/styled_focus_poll.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import { Doughnut } from 'react-chartjs-2';
import OptionBar from './addcomment';

class FocusPoll extends Component {
  constructor(props) {
    super(props);
    this.vote = this.vote.bind(this);
    this.state = {
      errorMessage : ''
    };
    this.optionsHandleSubmit = this.optionsHandleSubmit.bind(this);
  }
  componentWillMount(){
    if(this.props.focuspoll){
      this.renderfocusPoll();
    }
    console.log("Polls: ", this.props.polls);
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
                  '#90cbdd',
                  '#70a9bb',
                  '#36c5bb',
                  '#14a399',
                  '#0491aa',
                  '#008197',
                  '#0091c1',
                  '#0060a0',
              ]
            }],
            labels: labelArray,
        }
        return (<PollContainer>
          <PollTitle>{poll.focuspoll.title}</PollTitle>
            <Doughnut
              data={data}
              getElementAtEvent={(elems) => {this.handleVote(elems)}} />
          </PollContainer>);
        }
    return <div>Loading...</div>;
  }
  handleVote(elems){
    //if you click in the middle of the chart it will call this function.
    //this if statement is just stopping that from happening.
    if (!elems[0]){
      return null;
    }
    const voteKey =  this.props.poll.focuspoll.options[elems[0]._index].x
    console.log('voting for ', voteKey);
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
        return (<div>Please sign up or sign in to enable voting</div>);
    }
  }
  optionsHandleSubmit = (newOption) => {
    var thispoll = this.props.poll.focuspoll;
    var newOptions = thispoll.options.slice();
    var email  = this.props.email;
    //pollId, newOptions, voter, voter_list
    if(this.props.authenticated == true){
      if (newOption !== ''){
       newOptions.push({x:newOption, y: 1});
       this.props.addOption(thispoll._id, newOptions, email, thispoll.voters);
       this.props.getSpecificPoll(thispoll._id);
      }
    }else{
      console.log("Please sign in to enable this feature");
      //add error code here (aka implement error action you lazy fuck)
    }
  }
  vote(voteKey){
    var email = this.props.email;
    var poll = this.props.poll.focuspoll;
    var voter_list = poll.voters;
    console.log("Email: ", email);
    console.log(voter_list);
    if(voter_list.indexOf(email) !== -1){
      console.log("WOOP WOOP CHEATER ALERT! WEEEWOOO MUTHAFUCKA");
    }
    if(this.props.authenticated){
      this.props.vote(poll._id, voteKey, email, voter_list);
    }else{
      this.setState({errorMessage: "anonVote"});
    }
  }
  render() {
    return (
      <DaContainer>
        <DaFocusPoll>
          {this.renderfocusPoll()}
          {this.renderError()}
        </DaFocusPoll>
        <ButtonContainer>
          {this.renderOptions()}
          <DaOptionBar>
            <OptionBar submitFunction={this.optionsHandleSubmit} />
          </DaOptionBar>
        </ButtonContainer>
      </DaContainer>
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
