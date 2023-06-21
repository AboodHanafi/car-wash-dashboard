import { useState, ChangeEvent } from 'react';
import classes from './Counter.module.css';

function Counter() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    if (num < 150) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value));
  };
  return (
    <div className={classes.counter}>
      <div>
        <button
          className='btn btn-outline-primary'
          type='button'
          onClick={decNum}
        >
          -
        </button>
      </div>
      <input
        type='number'
        className='form-control'
        value={num}
        onChange={handleChange}
      />
      <div className='input-group-prepend'>
        <button
          className='btn btn-outline-primary'
          type='button'
          onClick={incNum}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
