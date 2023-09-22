import * as React from 'react';
import { useState } from 'react';
import './style.css';

function Button({ text }) {
  console.log(typeof text);
  return !(text % 1) ? <p>divisible entre 3</p> : null;
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <br />
      <br />
      <Button text={count / 3} />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
