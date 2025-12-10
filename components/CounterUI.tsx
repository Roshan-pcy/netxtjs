"use client";
import useCounterStore from "@/app/store/counterStore";
export default function CounterUi() {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
