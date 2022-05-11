import { combineReducers } from 'redux';
import auth from './authentication.reducer';

import {
    LOGOUT_USER,
} from '../actions/actionTypes';

const appReducer = combineReducers({
    auth,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === LOGOUT_USER.SUCCESS) {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;


