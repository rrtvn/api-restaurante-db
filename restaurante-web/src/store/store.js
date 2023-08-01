import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {platosReducer} from '../reducers/platosReducer.js';

const composeEnhancers = (typeof window !== 'undefined'
    && window.__REDUX_DEV_TOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    platos: platosReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));