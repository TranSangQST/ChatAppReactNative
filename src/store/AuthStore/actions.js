import { LOGIN, LOGOUT, SET_USER, OPEN } from "./contants";

export const login = (payload) => ({
    type: LOGIN,
    payload,
});

export const logout = (payload) => ({
    type: LOGOUT,
    payload,
});

export const setUser = (payload) => ({
    type: SET_USER,
    payload,
});

export const open = (payload) => ({
    type: OPEN,
    payload,
});

export default {
    login,
    logout,
    setUser,
    open,
};
