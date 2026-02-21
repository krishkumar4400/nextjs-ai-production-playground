import React from "react";
import { useCounterStore } from "../../store/counterStore.js";

const Counter = () => {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div>
      <h2>Count: {count} </h2>
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default Counter;
