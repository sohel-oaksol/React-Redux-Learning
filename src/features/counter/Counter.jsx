import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount,decrementByAmount } from './CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
          Increment by Amount
        </button>
        <button onClick={() => dispatch(decrementByAmount(Number(incrementAmount)))}>
          Decrement by Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
