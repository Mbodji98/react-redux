const INITIAL_STATE = {
  cart: 60,
};

function addCartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDCART": {
      return {
        ...state,
        cart: action.payload
      };
    }
  }

  return state;
}

export default addCartReducer;