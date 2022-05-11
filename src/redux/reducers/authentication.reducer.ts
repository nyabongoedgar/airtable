import * as actionTypes from '../actions/actionTypes';
import { actionType, authStateType } from './types';

const token = localStorage.getItem('token');


const initialState: authStateType = {
    loading: false,
    isAuthenticated: token !== null && token !== undefined && Boolean(token),
    error: null,
    user: null,
};

const authReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER.INIT:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.LOGIN_USER.SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
            };
        case actionTypes.LOGIN_USER.ERROR:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                error: action.payload,
            };
        case actionTypes.LOGOUT_USER.SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                error: null,
                user: null,
            };

        // case actionTypes.GET_USER_INFO.INIT:
        //     return {
        //         ...state,
        //         loading: true,
        //         error: null,
        //     };
        // case actionTypes.GET_USER_INFO.SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         user: action.payload,
        //         error: null,
        //     };
        // case actionTypes.GET_USER_INFO.ERROR:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload,
        //     };

        default:
            return {
                ...state,
            };
    }
};

export default authReducer;
