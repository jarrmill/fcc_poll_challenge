import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styled from 'styled-components';

const Hnav = styled.nav`
background-color: #eee;
`
const Hul = styled.ul`
  list-style: none;
  background-color: #444;
  text-align: center;
  padding: 0;
  margin: 0;
`
const Hli = styled.li`
  font-family: sans-serif;
  font-size: 1.2em;
  line-height: 40px;
  height: 40px;
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

class Header extends Component {
  renderLinks(){
    if (this.props.authenticated){
      return [<Hli key={1}>
      	<HLink to="/signout">Sign Out</HLink></Hli>,<Hli>
        <HLink to="/createpoll">New Poll</HLink></Hli>,<Hli>
        <HLink to="/userpolls">Your Polls</HLink></Hli>,<Hli>
        <HLink to="/home">Home</HLink>
      </Hli>]
    }else {
      return [<Hli key={2}>
        <HLink to="/signin">Sign In</HLink></Hli>,<Hli>
	      <HLink to="/signup">Sign Up</HLink></Hli>,<Hli>
        <HLink to="home">All Polls</HLink></Hli>]
    }
  }
  render() {
    return (
	<nav>
	  <Link to="/"><bold> Voting App</bold></Link>
	  <Hul  className="header">
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
