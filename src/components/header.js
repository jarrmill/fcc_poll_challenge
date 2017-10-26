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
  list-style: none;
  background-color: #444;
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
const HLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: block;
  transition: .3s background-color;

  &: hover {
    background-color: #005f5f;
    color: #fff;
    text-decoration: none;
  }

  &: active {
    background-color: #fff;
    color: #444;
    cursor: default;
  }
`
const Hdiv = styled.div`
  display: flex;
  align-items:center;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 600px){
    width: 100%;
    flex-direction: column;
    background-color: #666;
  }
`

class Header extends Component {
  renderLinks(){
    if (this.props.authenticated){
      return [
        <Hdiv>
          <Himg src={require('../assets/img/magic_boi.png')} />
          <Hli><HLink to="/home">Vote Magic</HLink></Hli>
          <Hli><HLink to="/createpoll">New Poll</HLink></Hli>
          <Hli><HLink to="/userpolls">Your Polls</HLink></Hli>
          <Hli><HLink to="/home">Home</HLink></Hli>
        </Hdiv>,
        <Hdiv>
          <Hli><HLink to="/signout">Sign Out</HLink></Hli>
        </Hdiv>]
    }else {
      return [
        <Hdiv>
          <Himg src={require('../assets/img/magic_boi.png')}/>
          <Hli key={4}><HLink to="/home">Vote Magic</HLink></Hli>
          <Hli key={2}><HLink to="/home">All Polls</HLink></Hli>
        </Hdiv>,
        <Hdiv>
          <Hli><HLink to="/signin">Sign In</HLink></Hli>,
          <Hli><HLink to="/signup">Sign Up</HLink></Hli>
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
