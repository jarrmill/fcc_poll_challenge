import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styled from 'styled-components';

const Hnav = styled.nav`
background-color: #eee;
`
const Himg = styled.img`
  height: 40px;
  width: auto;
`
const Hul = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: #555 solid 4px;
  box-sizing: border-box;
  list-style: none;
  background-color: #555;
  text-align: center;
  padding: 0;
  margin: 0;
  @media (max-width: 600px){
    flex-direction: column;
  }
`
const Hli = styled.li`
  display: block;
  font-family: sans-serif;
  line-height: 40px;
  width: 100%;
  border-bottom: 1px solid #888;

  @media (min-width: 600px){
    width: 120px;
    border-bottom: none;
    height: 50px;
    line-height: 50px;
    font-size: 1.4em;
    display: inline-block;
    margin-right: -4px;
  }
`
const HLinkSmall = styled(Link)`
  text-decoration: none;
  font-size: 80%;
  color: #fff;
  display: block;
  border-bottom: #555 solid 4px;
  box-sizing: border-box;
  transition: .3s background-color;

  &: hover {
    text-decoration: none;
    border-bottom: #abc solid 4px;
  }

  &: active {
    text-decoration: none;
    border-bottom: #abc solid 4px;
    cursor: default;
  }
`
const HLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: block;
  transition: .3s background-color;

  &: hover {
    text-decoration: none;
    border-bottom: #abc solid 4px;
    text-decoration: none;
  }

  &: active {
    text-decoration: none;
    border-bottom: #abc solid 4px;
    cursor: default;
  }
`
const Hdiv = styled.div`
  display: flex;
  align-items:center;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 600px){
    margin: 0;
    padding: 0;
    width: 100%;
    flex-direction: column;
  }
`

class Header extends Component {
  renderLinks(){
    if (this.props.authenticated){
      return [
        <Hdiv>
          <Himg src={require('../assets/img/magic_boi.png')} />
          <Hli><HLink to="/home">Vote Magic</HLink></Hli>
          <Hli><HLinkSmall to="/createpoll">New Poll</HLinkSmall></Hli>
          <Hli><HLinkSmall to="/userpolls">Your Polls</HLinkSmall></Hli>
          <Hli><HLinkSmall to="/home">Home</HLinkSmall></Hli>
        </Hdiv>,
        <Hdiv>
          <Hli><HLink to="/signout">Sign Out</HLink></Hli>
        </Hdiv>]
    }else {
      return [
        <Hdiv>
          <Himg src={require('../assets/img/magic_boi.png')}/>
          <Hli key={4}><HLink to="/home">Vote Magic</HLink></Hli>
          <Hli key={2}><HLinkSmall to="/home">All Polls</HLinkSmall></Hli>
        </Hdiv>,
        <Hdiv>
          <Hli><HLinkSmall to="/signin">Sign In</HLinkSmall></Hli>
          <Hli><HLinkSmall to="/signup">Sign Up</HLinkSmall></Hli>
        </Hdiv>
      ]
    }
  }
  render() {
    return (
	<nav>
	  <Hul className="header">
	    {this.renderLinks()}
	  </Hul>
	</nav>
    );
  }
}
function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
