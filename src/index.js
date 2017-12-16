import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/index';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(rootReducer);

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
// registerServiceWorker();
