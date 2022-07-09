import React, { useState } from 'react';

function CountUp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
export default CountUp;
