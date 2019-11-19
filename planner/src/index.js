import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import appReducers from './redux/reducers/appReducers';
import { BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-thunk';

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  appReducers,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(<Router>
            <Provider store={store}>
                <App />
            </Provider>
            </Router>, document.getElementById('root'));

