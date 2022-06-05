import { legacy_createStore as createStore, combineReducers } from 'redux';
import io from 'socket.io-client';

import Reducer from './Reducer';

const reducers = combineReducers({
    voting: Reducer
})

const store = createStore(reducers);

const socket = io(`http://localhost:8090`, {rejectUnauthorized: false});

socket.on('state', state => {
    store.dispatch({ type: 'SET_STATE', state })
});

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});


export { store };