import { useDispatch, useSelector } from 'react-redux';
import { decrement, incrementBy } from './counterActions';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementBy = () => {
    dispatch(incrementBy(5));
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrementBy}>+5</button>
    </div>
  );
};
