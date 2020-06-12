import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { User } from "./components/User/User.js"

ReactDOM.render(
  <User
    userHeader="https://pbs.twimg.com/profile_banners/1219326145285558272/1579547226/1500x500"
  >
  </User>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
