import {useState} from 'react'
import classes from './Tasks.module.css'
import Task from './Task'

const Tasks = ({ post, onDeleteHandler }) => {
  
  const listtask = post.map((pos, index) => <li key={index} className={classes.list}>
    <Task hed={pos.hed} bod={pos.bod} ind={index} onDelete={onDeleteHandler}/>
  </li>)
  
  return (
    <>
      { 
        post.length === 0 ? 
          <div style={{textAlign: 'center', color:'white'}}>
            <h2>There are no tasks yet...</h2>
          </div> 
        : 
          <ul className={classes.unlist}>
            {listtask}
          </ul>
      }
    </>
  )
}

export default Tasks
