import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import reducers from './reducers';
import './index.css';
import App from './App';

const translationsObject = {
  th: {
    welcome: 'ยินดีต้อนรับสูตัวอย่างการใช้งาน React Redux i18n',
    detail: 'ตัวอย่างการใช้งาน React Redux i18n'
  },
  en: {
    welcome: 'Welcome to Example for React Redux i18n',
    detail: 'Example for React Redux i18n'
  }
}

const store =  createStore(
  combineReducers({
    ...reducers,
    i18n: i18nReducer
  }),
  applyMiddleware(thunk)
);
syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('th'));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
