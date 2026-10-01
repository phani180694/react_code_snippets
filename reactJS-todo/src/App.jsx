import {useState} from "react";
import './App.css'

import TaskItem from './Components/TaskItem';

function App() {
  const [newTask,setNewTask] =useState("");
  const [myTasks,setMyTasks] = useState([])
  const [completedTasks,setCompletedTasks] = useState([]);

function handleInput(e){
  let newValue=e.target.value;
  setNewTask(newValue);
}

function addTask(){
setMyTasks(prev=>[...prev,newTask]);
}

function deleteTask(taskName){
  let afterDeletionTasks=myTasks.filter(x=>x!=taskName);
  setMyTasks(afterDeletionTasks)
}

function completeTask(taskName){
  let completedTask=myTasks.filter(x=>x==taskName);
  let afterFiltering =myTasks.filter(x=>x !=taskName);
  setMyTasks(afterFiltering);
  console.log(completedTask[0]);
  setCompletedTasks(prev=>[...prev,completedTask[0]])
}

  return (
    <div className='main-body d-flex justify-content-center align-items-center'>
      <div className='todo-list-mainDiv'>
      <h3>My To do List</h3>
      <div>
        <div className='todo-task-input-div'>
         <div className="form-floating w-75">
           <input type="text" className="form-control" id="floatingInput" placeholder="todo task" onChange={(e)=>{handleInput(e)}}
           value={newTask}
           />
            <label htmlFor="floatingInput">Todo task</label>
         </div>
             <button className='btn btn-primary' id="add-button" onClick={()=>{addTask()}}>+</button>
        </div>
        <h6>To be completed</h6>
        <ul className='task-list'>
          {
            myTasks.map(
              (task,index) =>
              <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask}/>
              )
          }
        </ul>
        <hr />
        <br />
        <h6>completed Tasks</h6>
        <ul className='task-list'>
          {
            completedTasks.map(
              (task,index) =>
              <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask}/>
              )
          }
        </ul>
      </div>
      </div>
      
    </div>
  )
}

export default App
