import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './src/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('app'));