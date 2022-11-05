import React from "react";
import useCounter from "../Hooks/UseCounter";

const Counter = () => {
  const [value, increment, decrement, reset, setInput] = useCounter();
  return (
    <main className="app">
      <h1 className="h1-design">
        Welcome to the custom Hook page... <br /> Check out the Counter!
      </h1>
      <div className="counter">
        <input
          type="text"
          placeholder="set counter value"
          onChange={setInput}
        />

        <h2>COUNTER = {value}</h2>
        <div className="btn">
          <button className="increment" onClick={increment}>
            Increment
          </button>
          <button className="decrement" onClick={decrement}>
            Decrement
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
