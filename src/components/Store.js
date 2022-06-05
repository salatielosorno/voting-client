import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import io from 'socket.io-client';

import { setState } from '../action_creators';
import remoteActionMiddleware from './removeActionMiddleware';

import Reducer from './Reducer';

const reducers = combineReducers({
    voting: Reducer
})

const socket = io(`http://localhost:8090`, {rejectUnauthorized: false});

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore)

const store = createStoreWithMiddleware(reducers);

socket.on('state', state => {
    store.dispatch(setState(state))
});

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});


export { store };