const INITIAL_STATE = {
  imgURL: "",
};

function dataImgReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOADIMG": {
      return {
        ...state,
        imgURL: action.payload
      };
    }
  }

  return state;
}

export default dataImgReducer;
