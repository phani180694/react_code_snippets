
const TaskItem = ({taskName,deleteTask,completeTask}) => {
    return(
        <div>
           <li className='task d-flex justify-content-between'>{taskName}
          <div className='task-buttons w-50 d-flex justify-content-end'>
            <button className='btn btn-sm btn-success' onClick={()=>{completeTask(taskName)}}>complete</button>
            <button className='btn btn-sm btn-danger' onClick={()=>{deleteTask(taskName)}}>Delete</button>
          </div>
          </li>
        </div>
    )
}

export default TaskItem;