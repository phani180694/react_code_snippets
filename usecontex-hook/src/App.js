
import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext({ count: 0, inc: () => {} });

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const inc = () => setCount((c) => c + 1);

  return (
    <CounterContext.Provider value={{ count, inc }}>
      {children}
    </CounterContext.Provider>
  );
}

function Display() {
  const { count } = useContext(CounterContext);
  return <div>Count: {count}</div>;
}

function IncrementButton() {
  const { inc } = useContext(CounterContext);
  return <button onClick={inc}>+1</button>;
}

export default function App() {
  return (
    <CounterProvider>
      <Display />
      <IncrementButton />
    </CounterProvider>
  );
}
