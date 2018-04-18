import { LOGIN, LOGOUT } from '../constants/action-types.js';

export function login(token) {
    console.log("login");
    return {
        type: LOGIN,
        payload: {
            token: token
        }
    }
}

export function logout(token) {
    console.log("logout");
    return {
        type: LOGOUT
    }
}