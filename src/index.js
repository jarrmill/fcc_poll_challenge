import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app';
import requireAuth from './components/require_authentication';
import requireEmail from './components/require_email';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import CreatePoll from './components/createpoll';
import Home from './components/home';
import UserPollList from './components/userpolls';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
const email = localStorage.getItem('email');

if (token) {
  // we need to update application state
  if (email){
    store.dispatch({type: AUTH_USER, payload: email})
  }else{
  store.dispatch({type: AUTH_USER});
  }
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={requireEmail(Home)} />
        <Route path="createPoll" component={requireAuth(CreatePoll)} />
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
        <Route path="userpolls" component={requireAuth(UserPollList)} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
  registerServiceWorker();
