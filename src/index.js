import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers';
import { createStore } from 'redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
  <GoogleOAuthProvider clientId={'614283000932-5rtuts8k2f20phqjr3lu2qsvbmuqelt7.apps.googleusercontent.com'}>
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
