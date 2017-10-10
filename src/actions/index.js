import axios from 'axios';
import { browserHistory } from 'react-router';

import {AUTH_USER, UNAUTH_USER, GET_POLLS, GET_POLL, VOTE_POLL, ANON_USER, ERROR, USER_POLLS} from './types';
var twitterAPI = require('node-twitter-api');

const ROOT_URL = 'https://pacific-scrubland-65914.herokuapp.com'; //3090
var twitter = new twitterAPI({
  consumerKey: 'dEr2AkrDLJSdDZfjqiLAzFkRz',
  consumerSecret: 'JI7E8cfjSWNdKFFEoX1lMLoJB3ENdxQz1VpXfg6gbLQnfx8HVT',
  callback: 'https://jsfccpoll.herokuapp.com/home'
});

export function signinUser({email, password}) {
  const userEmail = {email, password}.email;
  //Submit email/password to the server
  return function(dispatch){
     axios.post(`${ROOT_URL}/signin`, {email, password}).then(response => {
       dispatch({type: AUTH_USER, payload: email});
       localStorage.setItem('token', response.data.token);
       localStorage.setItem('email', userEmail);

	     browserHistory.push('/');
         }).catch((error)=> {
           console.log(error);
         });
      }
}
export function signinUserTwitter(){
  console.log("signinUserTwitter invalidated");
}
export function signupUser({email, password}) {
  const userEmail = {email, password}.email;
  //Submit email/password to the server
  return function(dispatch){
     axios.post(`${ROOT_URL}/signup`, {email, password}).then(response => {
       dispatch({type: AUTH_USER, payload: email});
       localStorage.setItem('token', response.data.token);
       localStorage.setItem('email', userEmail);

	     browserHistory.push('/home');
         }).catch((error)=> {
           console.log(error);
         });
      }
}
export function handleAnonUser(){
  //create a temp email address
  //send type/payload to reducer which
  //sets email but keeps authenticated false

  var randNum = Math.floor(Math.random() * (10000000 - 100)) + 100;
  var randEmail = "rand_email" + randNum.toString() + "@rand.com";
  return {type: ANON_USER, payload: randEmail};
}
export function signoutUser(){
  localStorage.removeItem('token');
  return {type: UNAUTH_USER};
}
export function twitterSignIn(){
  twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
    if (error) {
      console.log("Error getting OAuth request token: " + error);
    } else {
      console.log("Success, finally!", requestToken, requestTokenSecret, results);
    }
  });
  return {type: AUTH_USER, payload: null};
}
//vote //
export function vote(pollId, vote, userEmail, voter_list){
  return function(dispatch){
    if(voter_list.indexOf(userEmail) !== -1){
      console.log("WEEWOO CHEATER ALERT! WEEWOO");
    }

    axios.post(`${ROOT_URL}/vote`,
      {id: pollId,
       vote: vote,
       email: userEmail}).then(response => {
       dispatch({type: VOTE_POLL, payload: response.data});

    }).catch((error) => {
      console.error(error);
    })
    // return {type: VOTE_POLL, payload: poll}; /*{newPoll: poll, foo: randNum}*/
  }
}
export function getSpecificPoll(id){
  var poll = axios.get(`${ROOT_URL}/findpoll`, {headers:{id:id}}).then(response => {
      return response.data;
    }).catch((error) => { console.error(error);});
  return {type: GET_POLL, payload: poll};
}
export function getPolls(){
  var polls = axios.get( `${ROOT_URL}/listpolls`).then(response => {
    return response;
  }).catch((error) => {
    console.error(error);
  });
  return {type: GET_POLLS, payload: polls};
}
export function getUserPolls(email){
  //
  var polls = axios.get(`${ROOT_URL}/listuserpolls`, {headers: {email}}).then(response => {
    return response.data;
  }).catch((error) => { console.error(error)});
  console.log("sending payload: ", polls)
  return {type: USER_POLLS, payload: polls};
}
export function createPoll(newPoll){
  axios.post(`${ROOT_URL}/createpoll`, newPoll).then(response => {
    console.log(response);
  }).catch(error => {
    console.error(error);
  })
}
