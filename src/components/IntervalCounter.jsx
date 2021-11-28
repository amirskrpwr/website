import React, { useEffect, useState } from "react";

function IntervalCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h2>Timer: {count} </h2>
      <hr />
    </div>
  );
}

export default IntervalCounter;
