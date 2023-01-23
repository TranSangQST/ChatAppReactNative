import { AUTO_LOGIN, LOGIN, LOGOUT, SET_USER, OPEN } from "./contants";

const initState = {
    user: {},
    isLogin: false,
    isOpen: false,
};

function reducer(state, action) {
    switch (action.type) {
        case OPEN: {
            return {
                ...state,
                isOpen: true,
            };
        }
        case LOGIN: {
            return {
                ...state,
                isLogin: true,
                user: action.payload,
            };
        }
        case LOGOUT: {
            return {
                ...state,
                isLogin: false,
                user: {},
            };
        }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        default:
            throw new Error("Invalid action: ", action);
    }
}

export { initState };
export default reducer;
