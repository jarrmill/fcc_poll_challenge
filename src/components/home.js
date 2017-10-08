import React, { Component } from 'react';
import PollList from './polllist.js';
import FocusPoll from './focuspoll.js';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  margin: 5px 0px 0px 5px;
  padding: 0px;
  @media (max-width: 600px){
    flex-direction: column-reverse;
  }
`

export default class Home extends Component {
  render() {
    return (
    <HomeContainer>
      <PollList />
      <FocusPoll/>
    </HomeContainer>
    );
  }
}
