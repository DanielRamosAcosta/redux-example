import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import { allReducers } from "./store/allReducers";

const promiseMiddleware = store => next => action => {  
  if (action.payload instanceof Promise) {
    store.dispatch({
      type: action.type + '_PENDING'
    })

    action.payload
      .then(result => {
        store.dispatch({
          type: action.type + '_FULFILLED',
          payload: result
        })
      })
      .catch(err => {
        store.dispatch({
          type: action.type + '_REJECTED',
          payload: err
        })
      })
  } else {
    next(action)
  }
}

const middleware = [ logger, promiseMiddleware ]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

export const store = createStore(
  allReducers, 
  enhancer
)
