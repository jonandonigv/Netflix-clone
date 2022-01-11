const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFeching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFeching: false,
                error: false
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFeching: false,
                error: true
            };
        
            case "LOGOUT_START":
                return {
                    user: null,
                    isFeching: false,
                    error: false
                };
            case "LOGOUT_SUCCESS":
                return {
                    user: action.payload,
                    isFeching: false,
                    error: true
                };
            case "LOGOUT_FAILURE":
                return {
                    user: null,
                    isFeching: false,
                    error: true
                };
        default:
            return { ...state};
    }
}

export default AuthReducer;