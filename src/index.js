import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import rootSaga from './sagas/index';
import App from './App';
import './index.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<React.Fragment><Provider store={store}><App /></Provider></React.Fragment>, document.getElementById('root'), () => console.log('Render Successfully 👍'))