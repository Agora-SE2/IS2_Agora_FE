import { LOGIN, LOGOUT } from '../constants/action-types.js';

export function login(token) {
    console.log("this is fucking working y'all!");
    return {
        type: LOGIN,
        payload: {
            user: {
                token: token
            }
        }
    }
}

export function logout(token) {
    console.log("see you never fuckers");
    return {
        type: LOGOUT
    }
}