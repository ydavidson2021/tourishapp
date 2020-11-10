import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { sites } from './sites';
import { comments } from './comments';
import { parks } from './parks';
import { zoos } from './zoos';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            sites,
            comments,
            parks,
            zoos, 
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}