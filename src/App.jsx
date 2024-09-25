import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function resetCount() {
    setCount(0);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="App">
      <h1 className="heading"> React Counter</h1>
      <div className="count-container">
        <div>
          <h5>Your current count is</h5>
        </div>

        <div>
          <h1 className="current-count">{count}</h1>
        </div>
        <div className="button-container">
          <button className="small-button" onClick={decrementCount}>
            -
          </button>
          <button className="large-button" onClick={resetCount}>
            Reset
          </button>
          <button className="small-button" onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
