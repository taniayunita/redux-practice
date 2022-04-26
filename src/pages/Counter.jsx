import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/reducer/counter/counterSlice";

const Counter = () => {
  let count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <span>{count}</span>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      
    </div>
  );
};

export default Counter;
