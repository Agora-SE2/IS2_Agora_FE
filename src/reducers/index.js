import { LOGIN, LOGOUT } from '../constants/action-types.js';

const rootReducer = (state = {token: 0}, action) => {
  switch(action.type) {
    case LOGIN:
      console.log("reduce login");
      return Object.assign({}, state, { token: action.payload.token });

    case LOGOUT:
      console.log("reduce logout");
      return Object.assign({}, state, { token: 0 });
      
    default:
      console.log("reduce default");
      return state;
  }
};

export default rootReducer;