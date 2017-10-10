import axios from 'axios';
import { browserHistory } from 'react-router';

import {AUTH_USER, UNAUTH_USER, GET_POLLS, GET_POLL, VOTE_POLL, ANON_USER, ERROR, USER_POLLS} from './types';
const ROOT_URL = 'https://pacific-scrubland-65914.herokuapp.com'; //3090

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
  return function(dispatch){
    axios.get(`${ROOT_URL}/twitter`).then(response => {
      dispatch({type: AUTH_USER, payload: 'twitter@email.com'});
      localStorage.setItem('token', response.data.token);

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
export function twitterSignIn(){
  console.log("Signing in with twitter!");
  var twitterToken = axios.post('https://api.twitter.com/oauth/request_token', {headers:{oauth_callback: 'https://jsfccpoll.herokuapp.com/'}}).then(response => {
    if (response.data.oauth_callback_confirmed){
      console.log("Success! Got twitter token");
      console.log(response.data);
      return response;
    }else{
      console.log("uh oh, something went wrong");
      return null;
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
