
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Trips } from './trips';
import { createForms } from 'react-redux-form'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialCard } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            trips: Trips,
            ...createForms({
                tCard: InitialCard
            })
       
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}