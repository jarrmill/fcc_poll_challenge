import axios from 'axios';
import { browserHistory } from 'react-router';

import {AUTH_USER, UNAUTH_USER, GET_POLLS, GET_POLL, CREATE_POLL, VOTE_POLL, ANON_USER, ERROR, USER_POLLS, DELETE_POLL, ADD_OPTION} from './types';
var twitterAPI = require('node-twitter-api');

const ROOT_URL =  process.env.DB_PATH;
if (!ROOT_URL) {console.log("ENV Problem. DB Directory not found.");}

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
//vote //
export function vote(pollId, vote, userEmail, voter_list){
  return function(dispatch){
    if(voter_list.indexOf(userEmail) !== -1){
      console.log("WEEWOO CHEATER ALERT! WEEWOO");
      return {type: VOTE_POLL, payload: null};
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
export function addOption(pollId, newOptions, voter, voter_list){
  if(!pollId || !newOptions || !voter || !voter_list){
    console.log("AddOption - not all arguments supplied");
    console.log(pollId, newOptions, voter, voter_list);
    return {type:VOTE_POLL, payload: null};
  }
  return function(dispatch){
    if(voter_list.indexOf(voter) !== -1){
      console.log("You have already voted, sorry!");
      return {type: VOTE_POLL, payload: null};
    }
    axios.post(`${ROOT_URL}/newoption`,
      {id: pollId,
       options: newOptions,
       voter: voter}).then(response => {
         console.log("New Option Request Sent");
         return {type: ADD_OPTION}
       }).catch((error) => {
         console.error(error);
       });
    // return {type: VOTE_POLL, payload: poll}; /*{newPoll: poll, foo: randNum}*/
  }
}
export function deletePoll(pollId){
  var polls = axios.post(`${ROOT_URL}/deletepoll`, {id: pollId}).then(response => {
    console.log("Delete Response is: ", response.data);
    return response.data;
  }).catch((error) => { console.error(error);});
  return {type: DELETE_POLL, payload: polls};
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
  return {type: USER_POLLS, payload: polls};
}
export function createPoll(newPoll){
  console.log("attempting to create poll");
  axios.post(`${ROOT_URL}/createpoll`, newPoll).then(response => {
    console.log("Poll created: ", response);
    browserHistory.push('/home');
  }).catch(error => {
    console.error(error);
  });
  return {type: CREATE_POLL}
}
