import React, { useState } from "react";

const Counter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment = (x) => {
    for (let i = 0; i < x; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        className="btn btn-outline-primary ml-2 mr-2"
        onClick={() => setCount(initialCount)}
      >
        Reset
      </button>
      <button
        className="btn btn-outline-success mr-2"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
      <button
        className="btn btn-outline-success mr-2"
        onClick={() => setCount(count - 1)}
      >
        decrement
      </button>
      <button
        className="btn btn-outline-warning mr-2"
        onClick={() => increment(2)}
      >
        increment by 2
      </button>
      <button
        className="btn btn-outline-warning mr-2"
        onClick={() => increment(3)}
      >
        increment by 3
      </button>
      <br />
      <hr />
    </div>
  );
};

export default Counter;
