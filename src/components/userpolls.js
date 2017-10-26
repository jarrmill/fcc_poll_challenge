import React, { Component } from 'react';
import { connect } from 'react-redux';
import {MainContainer, PollDiv, PollBody, PollTitle, MainDisplay, PollsContainer} from './styled/user_polls.js';
import {PollButton, PollContainer, AddNewButton} from './styled/user_polls.js'
import {Doughnut} from 'react-chartjs-2';
import * as actions from '../actions';
import _ from 'lodash';

class PersonalPollList extends Component {
  constructor(props){
    super(props);
    this.state = { title: null, data: [], display: 'none'};
  }
  deletePoll(id, title){
    this.props.deletePoll(id);
    this.props.getUserPolls(this.props.email);
  }
  renderFocusPoll(){
    var title = this.state.title;
    var data = this.state.data;
    var display = this.state.display;
    var dataArray = [];
    var labelArray = [];
    if (!title && this.props.polls){
      for (var i in this.props.polls[0].options){
        dataArray.push(this.props.polls[0].options[i].y);
        labelArray.push(this.props.polls[0].options[i].x);
      };
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
          labels: labelArray
      }
      this.selectPoll(this.props.polls[0].title, data)
    }
    ///*style={{height: this.state.display ? '400' : '0'*/
    //var options = {responsive: false, maintainAspectRatio: false};
    var options = {}
    //maintainAspectRatio: false
    return (<MainDisplay>
        <PollContainer>
          <PollTitle>{this.state.title}</PollTitle>
          <Doughnut data={data} options={options}/>
        </PollContainer>
      </MainDisplay>);
  }
  renderList(){
    return _.map(this.props.polls, poll => {
      var dataArray = [];
      var labelArray = [];
      var options = { legend: { display: false, } };
      for (var i in poll.options){
        dataArray.push(poll.options[i].y);
        labelArray.push(poll.options[i].x);
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
          labels: labelArray
      }
      return (<PollDiv>
          <PollBody onClick={() => this.selectPoll(poll.title, data)}>
            <Doughnut data={data} options={options}/>
            <PollTitle>{poll.title}</PollTitle>
            <PollButton onClick={() => this.deletePoll(poll._id, poll.title)}>DeletePoll</PollButton>
          </PollBody>
        </PollDiv>);
    });
  }
  selectPoll(title, data){
    this.setState({title: title, data: data, display: '0px'});
  }
  componentWillMount(){
    //this.props.getPolls();
    this.props.getUserPolls(this.props.email);
  }
  render() {
    return (
      <MainContainer>
          {this.renderFocusPoll()}
        <PollsContainer>
          {this.renderList()}
        </PollsContainer>
      </MainContainer>
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
