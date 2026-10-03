import React, { useRef } from "react";

function App() {
  const focusPoint = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.value = "phani";
    focusPoint.current.focus();
  };
  return (
    <div>
      <div>
        <button onClick={onClickHandler}>ACTION</button>
      </div>
      <label>Click on the action button to focus and populate the text.</label>
      <br />
      <textarea ref={focusPoint} />
    </div>
  );
}
export default App;
