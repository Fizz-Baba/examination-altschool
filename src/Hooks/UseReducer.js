import { useReducer } from "react";

const UseReducer = () => {
  function setValue(value, count) {
    let num = Number(value);
    if (String(num) == "NaN" || value == "") {
      return count;
    }
    return num;
  }

  const reducer = (count, action) => {
    switch (action.type) {
      case "setValue":
        return setValue(action.payload, count);
      case "increment":
        return ++count;
      case "decrement":
        return --count;
      case "reset":
        return 0;
      default:
        return count;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return { count, dispatch };
};

export default UseReducer;
