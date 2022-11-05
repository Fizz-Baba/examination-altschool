import React from "react";
import UseReducer from "../Hooks/UseReducer";
import "../App.css";

const Reducer = () => {
  const { count, dispatch } = UseReducer();

  const Increment = () => {
    dispatch({ type: "increment" });
  };
  const Decrement = () => {
    dispatch({ type: "decrement" });
  };
  const Reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <main className="app">
      <h1 className="h1-design">
        Welcome to the useReducer page... <br /> Check out the Counter!
      </h1>
      <div className="counter">
        <input
          type="text"
          placeholder="set counter value"
          onChange={(e) =>
            dispatch({ type: "setValue", payload: e.target.value })
          }
        />

        <h2>COUNTER = {count}</h2>
        <div className="btn">
          <button className="increment" onClick={Increment}>
            Increment
          </button>
          <button className="decrement" onClick={Decrement}>
            Decrement
          </button>
          <button className="reset" onClick={Reset}>
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};
export default Reducer;
