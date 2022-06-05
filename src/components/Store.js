import { legacy_createStore as createStore, combineReducers } from 'redux';
import io from 'socket.io-client';
import { setState } from '../action_creators';

import Reducer from './Reducer';

const reducers = combineReducers({
    voting: Reducer
})

const store = createStore(reducers);

const socket = io(`http://localhost:8090`, {rejectUnauthorized: false});

socket.on('state', state => {
    store.dispatch(setState(state))
});

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});


export { store };