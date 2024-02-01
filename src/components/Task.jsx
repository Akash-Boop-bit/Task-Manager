import {useState} from 'react'
import classes from './Task.module.css'

const Task = ({ hed, bod, onDelete, ind }) => {
  return (
    <div className={classes.maindiv}>
      <h2 className={classes.head}>{hed}</h2>
      <div className={classes.linediv}></div>
      <span className={classes.par}>{bod}</span>
      <div className={classes.buttons}>
        <button onClick={() => onDelete(ind)} className={classes.delete}>Delete</button>
      </div>
    </div>
  )
}

export default Task
