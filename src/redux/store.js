import counterReducer from "./reducers/counterReducer";
import addCartReducer from "./reducers/addCartReducer";
import dataImgReducer from "./reducers/dataImgReducer";
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counterReducer,
  addCartReducer,
  dataImgReducer,
});

export const getCatImg = () => (dispatch) => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "LOADIMG",
        payload: data[0].url,
      });
    });
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
