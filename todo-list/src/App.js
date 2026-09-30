import React,{useState} from "react";
import './App.css';

const App = () => {
  const [task,setTask] = useState("");
  const [todoList,setTodoList] = useState([]);

  const addTodo = () => {
   if(task.trim() === "") return;
    console.log("todoList",todoList);
   setTodoList([...todoList,task]);
  //  console.log("todoList",todoList);
  setTask("");
  }

  const removeTask = (indexToRemove) => {
    const updatedTasks = todoList.filter((_,index) => index !== indexToRemove);
    setTodoList(updatedTasks);
  }
return(
  <div>
    <h1>Todo List</h1>
    <div className="container">
    <input placeholder="enter city name" onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={addTodo}>submit</button>
    </div>
    <ul>
      {
        todoList.map((item,index)=>(
       <li key={index}>{item}
       <button onClick={()=>removeTask(index)}>Remove</button>
       </li>
        ))
      }
    </ul>
  </div>
)
}

export default App;