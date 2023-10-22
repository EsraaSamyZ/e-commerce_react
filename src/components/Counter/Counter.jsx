// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/slices/counterSlice";

const Counter = () => {
  // const [count, setCount] = useState(10);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // const decrementCount = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  const dispatch = useDispatch();

  const counterGlobalState = useSelector( store => store.counterReducer.counter );
  // console.log(counterGlobalState);

  const handelIncrement = () => {
    dispatch(increment());
  }

  const handelDecrement = () => {
    dispatch(decrement());
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{counterGlobalState}</h2>
      <button className="btn btn-primary me-2" onClick={handelIncrement}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={handelDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
