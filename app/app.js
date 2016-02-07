import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Router, Route, Link } from 'react-router';
import $ from 'jquery';
import classnames from 'classnames';
let createBrowserHistory = require('history/lib/createBrowserHistory');

import style from './../css/style.css';

let App = React.createClass({
  getInitialState() {
    return {
      dataOri: [],
      data: [],
      sorting: 'date'
    };
  },

  componentDidMount() {
    $.get('data.json', (result) => {
      result = result.filter((a) => a.count.match(/\d+/)[0] > 0);

      this.setState({
        dataOri: result,
        data: result
      });
    })
  },

  _sort(sorting, e) {
    e.preventDefault();

    let _data = this.state.dataOri.slice(0, this.state.dataOri.length);

    if (sorting == 'alpha') {
      _data = _data.sort((a, b) => a.title.localeCompare(b.title))
    }

    this.setState({
      data: _data,
      sorting
    });
  },

  render() {
    return (
      <div className={style.container}>
        <h1>Karanaris C Fantasy</h1>
        <h2>Total {this.state.data.length} albums.</h2>
        <ul className={style.sorting}>
          <li><a href="#" className={this.state.sorting == 'date' ? style.active : ''} onClick={this._sort.bind(this, 'date')}>เรียงตามลำดับที่สร้าง</a></li>
          <li><a href="#" className={this.state.sorting == 'alpha' ? style.active : ''} onClick={this._sort.bind(this, 'alpha')}>เรียงตามตัวอักษร</a></li>
        </ul>
        <ul className={style.data}>
          {this.state.data.map((d, i) => {
            return (
              <li key={i}>
                <a href={d.url} target="_blank">
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
        <a className={style.gh} href="https://github.com/phatograph/kcfc" target="_blank"><img src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" /></a>
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
