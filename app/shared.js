import React from 'react';
import styles from './../css/style.css';

export class NameHeading extends React.Component {
  render() {
    return (
      <h1>
        <span>Phat</span><span className={styles.light}>tara</span><br />
        <span>Wang</span><span className={styles.light}>rungarun</span>
      </h1>
    );
  }
}

export class Contact extends React.Component {
  render() {
    return (
      <h6>
        St Andrews, UK &middot; Thai citizen &middot; born in 1987<br />
        <a href="mailto:phatograph@gmail.com?subject=Hello!">phatograph@gmail.com</a> &middot;
        <a href="http://www.phatograph.com" target="_blank">phatograph.com</a><br />
        +44 7934 592402
      </h6>
    );
  }
}
