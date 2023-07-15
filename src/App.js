import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const increament = () => {
    setNumber(number + 1);
  };

  const decreament = () => {
    setNumber(number - 1);
  };

  return (
    <div className="container">
      <h1 className="number">{number}</h1>
      <div className="buttons">
        <button onClick={increament}>Increment</button>
        <button onClick={decreament}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
