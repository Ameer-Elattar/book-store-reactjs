import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../redux/counterSlice";

export function Counter() {
  const { count } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  const { increase, decrease } = counterActions;
  const increaseHandler = () => {
    dispatch(increase());
  };
  const decreaseHandler = () => {
    dispatch(decrease());
  };
  return (
    <div className=" bg-light text-center p-5">
      <h1>Counter Comp</h1>
      <div className="container">
        <p className="text-muted"> Counter : {count}</p>
        <button className="btn btn-primary mx-2" onClick={increaseHandler}>
          +
        </button>
        <button className="btn btn-danger mx-2" onClick={decreaseHandler}>
          -
        </button>
      </div>
    </div>
  );
}
