import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import burgerBuilderReducer from "./store/reducers/burgerBuilder";
import orderReducer from "./store/reducers/order";
import authReducer from "./store/reducers/auth";

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {watchAuth, watchBurgerBuilder, watchOrder} from "./store/sagas/index";

import reportWebVitals from './reportWebVitals';

const composeEnhancers = process.env.NODE_ENV === "development" ? 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
	burgerBuilder: burgerBuilderReducer,
	order: orderReducer,
	auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, 
	composeEnhancers(
		applyMiddleware(thunk, sagaMiddleware)
	));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBurgerBuilder);
sagaMiddleware.run(watchOrder);

ReactDOM.render(
	<Provider store = {store}>
	  <React.StrictMode>
	  	<BrowserRouter>
	    	<App />
	    </BrowserRouter>
	  </React.StrictMode>
  	</Provider>,
  document.getElementById('root')
);

reportWebVitals();