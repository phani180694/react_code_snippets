import React, { useState } from 'react';
import './style.css';
import ProgressBar from "./ProgressBar";

const App = () => {
  const [val,setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value))
  return(
    <>
    <div className='App'>
      <h1>Progress Bar</h1>
      <ProgressBar width={val}/>
      <form>
        <label>
          Input:
          <input type={Number} onChange={setValuer}/>
        </label>
      </form>

    </div>
    </>
  )
}


export default App;
