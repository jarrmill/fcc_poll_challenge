import React, { Component } from 'react';
import {OptionInput, OptionButton} from './styled/styled_focus_poll';

export default class CommentBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: ''
    };
  }
  handleChange = (evt) =>{
    this.setState({option: evt.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.option !== ''){
     this.props.submitFunction(this.state.option);
   };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <OptionInput
          type="test"
          placeholder="Enter custom option."
          value={this.state.option}
          onChange={this.handleChange}
        />
        <OptionButton>Enter</OptionButton>
      </form>
    )
  }
}
