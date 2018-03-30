import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import { setLocale } from 'react-redux-i18n'
import './App.css';
const locale = require('react-redux-i18n').I18n

class App extends Component {

  handleChangLanguage = (l) => {
    if (this.props.l !== l) {
      this.props.setLang(l)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="MenuHeader">
          <a href="#" id="lang-en" onClick={() => this.handleChangLanguage('en')}>
            <span className="lableLang">EN</span>
          </a>
          |
          <a href="#" id="lang-th" onClick={() => this.handleChangLanguage('th')}>
            <span className="lableLang">ไทย</span>
          </a>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{locale.t('welcome')}</h1>
        </header>
        <p className="App-intro">
        {locale.t('detail')}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  l: state.i18n.locale,
})

const mapDispatchToProps = dispatch => ({
  setLang: (l) => {
    dispatch(setLocale(l))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
