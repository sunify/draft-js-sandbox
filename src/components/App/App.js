import React from 'react';
const cx = require('classnames/bind').bind(require('./App.css'));

export default class App extends React.Component {

  render() {
    return (
      <div className={cx('app')}>
        App
      </div>
    );
  }

}
