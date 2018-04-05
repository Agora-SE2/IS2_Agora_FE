const rootReducer = (state = {user: {}}, action) => {
  switch(action.type) {
    case "LOGIN":
      state.user = action.payload;
      return state;

    case "LOGOUT":
      state.user = {}
      return state;
      
    default:
      return state;
  }
};

export default rootReducer;