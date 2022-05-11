import rootReducer from ".";

export type actionType = {
    type: string;
    payload: any;
}

export type authStateType = {
    loading: boolean,
    isAuthenticated: boolean,
    error: null | any,
    user: null | any,
};

export type RootState = ReturnType<typeof rootReducer>