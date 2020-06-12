import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { User } from "./components/User/User.js"
import { TamblerPost } from "./components/TamblerPost/TamblerPost.js"

ReactDOM.render(
  <React.Fragment>
      <User
        userHeader="https://pbs.twimg.com/profile_banners/1219326145285558272/1579547226/1500x500"
      />
      <TamblerPost
        avatar="https://i.gyazo.com/a21da37cb4a4dfeba1d86c06dfd37534.png"
        name="George"
        username="@georgesfurniture"
        when="2 hours ago"
        content={
          {
            maintext:"Come to my store!",
            footertext:"",
            link:"https://federicoig.github.io/George-s-Furniture/",
            img: {
                src: "https://i.gyazo.com/e3d627d058a2e19216c17ff7aba66f90.png",
                alt: ""
            }
          }
        }
      />
      <TamblerPost
        avatar="https://i.gyazo.com/7d308f43dd9ddbfc474fee90664f074c.png"
        name="Los Simuladores"
        username="@simuladoresbot"
        when="5 hours ago"
        content={
          {
            maintext:"Un año en la selva... kjjjjjjjjj",
            footertext:"",
            link:"",
            img: {
                src: "",
                alt: ""
            }
          }
        }
      />
      <TamblerPost
        avatar="https://avatars1.githubusercontent.com/u/56234680?s=460&u=c8b81c525b1fd029db3020b17177dde2458a994e&v=4"
        name="federico"
        username="@federicoig"
        when="12 hours ago"
        content={
          {
            maintext:"I also made a memotest, here's the link if you want to play!",
            footertext:"",
            link:"https://my-memotest.herokuapp.com/",
            img: {
                src: "",
                alt: ""
            }
          }
        }
      />
      <TamblerPost
        avatar="https://avatars1.githubusercontent.com/u/56234680?s=460&u=c8b81c525b1fd029db3020b17177dde2458a994e&v=4"
        name="federico"
        username="@federicoig"
        when="12 hours ago"
        content={
          {
            maintext:"Original theme by @sorrism",
            footertext:"",
            link:"https://sorrism.tumblr.com/post/187334088020/vertigo-preview-1-preview-2-code-a-free/",
            img: {
                src: "https://66.media.tumblr.com/5adbc03b7eec85d982eae8a75b268d95/tumblr_pwyp9pdS1Y1up3ob0o2_1280.png",
                alt: "example of the original theme."
            }
          }
        }
      />
  </React.Fragment>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
