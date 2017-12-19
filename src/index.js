import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import thunk from 'redux-thunk';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);                       

// import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
// registerServiceWorker();
