import React, { createContext, useContext } from "react";

const AppContext = createContext();
const App = () => {
  return (
    <div>
      <AppContext.Provider value={{ name: "John", age: 30 }}>
        <Children />
      </AppContext.Provider>
    </div>
  );
};

export default App;

const Children = () => {
  const context = useContext(AppContext);
  return (
    <div>
      <h1>Name: {context.name}</h1>
      <h2>Age: {context.age}</h2>
    </div>
  );
};
