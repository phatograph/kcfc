import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Router, Route, Link } from 'react-router';
import $ from 'jquery';
let createBrowserHistory = require('history/lib/createBrowserHistory');

import style from './../css/style.css';

let App = React.createClass({
  getInitialState() {
    return {
      data: []
    };
  },

  componentDidMount() {
    $.get('../data.json', (result) => {
      this.setState({
        data: result
      });
    })
  },

  render() {
    return (
      <div className={style.container}>
        <h1>Karanaris C Fantasy</h1>
        <h2>Total {this.state.data.length} albums.</h2>
        <ul>
          {this.state.data.map((d, i) => {
            return (
              <li key={i}>
                <a href={d.url}>
                  <div className={style.img}>
                    <img src={d.img} alt="img" />
                  </div>
                  <div className={style.text}>
                    <h4>{d.title}</h4>
                    <h3>{d.name}</h3>
                    <h5>{d.count}</h5>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <footer>
          2016 &copy; phatograph.com
        </footer>
      </div>
    );
  }
});

let routes = (
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App} />
  </Router>
);

ReactDOM.render(routes, document.querySelector('#main'));
