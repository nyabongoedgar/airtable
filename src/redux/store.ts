import { createStore, applyMiddleware, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import {RootState} from "./reducers/types"

const initialState = {}

const middleware = [thunk, logger];

const store = createStore<RootState, Action<any>, unknown, unknown>(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export type AppDispatch = typeof store.dispatch

export default store;
