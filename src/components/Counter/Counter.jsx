import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{count}</h2>
      <button className="btn btn-primary me-2" onClick={incrementCount}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={decrementCount}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
