import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatImg } from "../redux/store";

export default function Counter() {
  const { count, cart, imgURL } = useSelector((state) => ({
    ...state.counterReducer,
    ...state.addCartReducer,
    ...state.dataImgReducer,
  }));

  const dispatch = useDispatch();

  const [cartData, setCartData] = useState(0);

  useState(() => dispatch(getCatImg()), []);

  const incrFunc = () => {
    dispatch({
      type: "INCR",
    });
  };

  const decrFunc = () => {
    dispatch({
      type: "DECR",
    });
  };

  const addToCartFunc = () => {
    dispatch({
      type: "ADDCART",
      payload: cartData,
    });
  };

  return (
    <div>
      <h1>
        Votre Panier : {cart} {count}
      </h1>
      {/* <button onClick={decrFunc}>-1</button>
      <button onClick={incrFunc}>+1</button> */}
      <input
        value={cartData}
        onInput={(e) => setCartData(e.target.value)}
        type="number"
      />
      <br />
      <button onClick={addToCartFunc}>Ajouter au panier</button>
      <br />
      {imgURL && <img style={{ width: "300px" }} src={imgURL} />}
    </div>
  );
}
