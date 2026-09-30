import React,{useState} from "react";
import "./styles.css";

 const intialState = {
    username:"",
    fullname:"",
    age:""
  }
const App = () => {
const [form,setValues] = useState(intialState);
const [display,setDisplay] = useState(false);
const inputValues = (e) => {
const {name,value} = e.target;
console.log(name,value);
setValues((prev)=>({
  ...form,
  [name]:value
}))
}
const printValues = (e) => {
e.preventDefault();
setDisplay(true);
}
  return(
    <form onSubmit={printValues}>
      <div>
        <label>
          UserName:
          <input name="username" placeholder="enter username" onChange={inputValues}/>
        </label>
      </div>
      <div>
        <label>
          FullName:
          <input name="fullname" placeholder="enter fullname" onChange={inputValues}/>
        </label>
      </div>
      <div>
        <label>
          Age:
          <input name="age" placeholder="enter age" onChange={inputValues}/>
        </label>
      </div>
      <button>Submit</button>
      {
        display && (
          <ul>
            <li>{form.username}</li>
            <li>{form.fullname}</li>
            <li>{form.age}</li>
          </ul>
        )
      }
    </form>
  )
}

export default App;