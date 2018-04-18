import { LOGIN, LOGOUT } from '../constants/action-types.js';

const rootReducer = (state = {token: 0}, action) => {
  switch(action.type) {
    case LOGIN:
      return Object.assign({}, state, { token: action.payload.token });

    case LOGOUT:
      return Object.assign({}, state, { token: 0 });
      
    default:
      return state;
  }
};

export default rootReducer;