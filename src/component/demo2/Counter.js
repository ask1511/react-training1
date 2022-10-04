import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(true);

  const increaseCounterHandler = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  // If I want my counter should not go above 5 we could do below:
  // const increaseCounterHandler = () => {
  //   setCounter((prevCount) => (prevCount <= 4 ? prevCount + 1 : prevCount));
  // };

  const decreaseCounterHandler = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const toggleCounterHandler = () => {
    setShowCounter((prevState) => !prevState);
  };

  return (
    <section className={styles.counter}>
      {showCounter && <h2>{counter}</h2>}
      <div className={styles.actions}>
        <button onClick={increaseCounterHandler}>Increment</button>

        <button onClick={toggleCounterHandler}>
          {showCounter ? "Hide" : "Show"} Counter
        </button>

        <button onClick={decreaseCounterHandler}>Decrement</button>
      </div>
    </section>
  );
};

export default Counter;
