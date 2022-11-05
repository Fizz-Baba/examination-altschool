import "./App.css";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import ErrorTest from "./Components/ErrorTest";
import HomePage from "./Components/HomePage";
import Nav from "./Components/Nav";
import Reducer from "./Components/Reducer";
import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/useReducer" element={<Reducer />} />
        <Route path="/useCounter" element={<Counter />} />
        <Route path="/testError" element={<ErrorTest />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
