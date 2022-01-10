import AuthReducer from "./AuthReducer";
import {createContext, useReducer} from 'react'

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispathc] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{user:state.user, isFetching: state.isFetching, error: state.error, dispathc}}>{children}</AuthContext.Provider>
    );
}