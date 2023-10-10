import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {categoriasReducer} from '../reducers/categoriasReducer.js';
import {platosReducer} from '../reducers/platosReducer.js';
import {reservaReducer} from '../reducers/reservaReducer.js';
import {usersReducer} from '../reducers/usersReducer.js';

const composeEnhancers = (typeof window !== 'undefined'
    && window.__REDUX_DEV_TOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    categorias: categoriasReducer,
    platos: platosReducer,
    reservas: reservaReducer,
    users: usersReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));