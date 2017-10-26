import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';
import {FormContainer, MainForm, TitleInput, EntryInput, EntryRow} from './styled/style_create_form.js';
import {RemoveButton, DaButton, ButtonRow, TitleTitle} from './styled/style_create_form.js';
class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [], count: 1, title: '', email:''
    };
  }
  handleTitleChange = (evt) =>{
    this.setState({title: evt.target.value});
  }
  handleChange(i, event) {
    let value = this.state.value.slice();
    value[i] = event.target.value;
    this.setState({value});
  }

  handleSubmit = (event) => {
   var email = (this.props.auth.email) ? this.props.auth.email : " ";
   var value = this.state.value.slice();
   var options = [];
   var optionsDict = {};
   //map values array to object before submitting
   /*for (var i = 0; i < value.length; i++){
     options[i] = {key: i, name: value[i], y: 2}
   }*/
   /*options = value.map(function(x) {
     return {x: 1};
   })*/
   for (var i = 0; i < value.length; i++){
     options.push({x: value[i], y: 1 });
   }
   const newPoll = {title: this.state.title, email, options }
   event.preventDefault();
   this.props.createPoll(newPoll);
   this.props.getPolls();
  }
  addClick(){
    this.setState({count: this.state.count+1})
  }
  removeClick(i){
    let value = this.state.value.slice();
    value.splice(i, 1);
    this.setState({
      count: this.state.count - 1,
      value
    })
  }
  renderForm(){
    let uiItems = [];
    for(let i = 0; i < this.state.count; i++){
      uiItems.push(<EntryRow key={i}>
          <EntryInput type="text" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this, i)} />
          <RemoveButton type="button" value='-' onClick={this.removeClick.bind(this, i)}/>
        </EntryRow>
      )
    }
    return uiItems || null
  }
  render() {
    return (
      <FormContainer>
        <MainForm onSubmit={this.handleSubmit}>
          <TitleTitle>Create a New Poll</TitleTitle>
          <TitleInput type="text" placeholder="Poll Name" onChange={this.handleTitleChange} />
          {this.renderForm()}
          <ButtonRow>
            <DaButton type='button' value='add more' onClick={this.addClick.bind(this)}/>
            <DaButton type="submit" value="Submit" />
          </ButtonRow>
        </MainForm>
      </FormContainer>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth}
}

export default connect(mapStateToProps, actions)(CreatePoll);
