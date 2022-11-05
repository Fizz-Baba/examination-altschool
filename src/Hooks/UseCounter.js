import {useState} from 'react'

function UseCounter() {
    const [value, setValue] = useState(0);
    const increment = () => {
      setValue((prevValue) => prevValue + 1);
    };
  
    const decrement = () => {
      setValue((prevValue) => prevValue - 1);
    };
  
    const reset = () => {
      setValue(0);
    };

    function setInput(value) {
        let num = Number(value)
        if(String(num) == "NaN" || value == "") {
            return value;
        }
        return num;
      }

    return [value, increment, decrement, reset, setInput]


}

export default UseCounter

