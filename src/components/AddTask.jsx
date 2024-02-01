import {useState} from 'react'
import classes from './AddTask.module.css'

const AddTask = ({ onclose, submitHandler, ondescription, ontitle,  title, description }) => {
  return (
    
      <form className={classes.maindiv} onSubmit={submitHandler}>
        <label className={classes.heading}>TItle</label>
        <input onChange={ontitle} className={classes.inp} type="text" placeholder='Enter the Title...' />
        <label className={classes.heading}>Description</label>
        <textarea onChange={ondescription} className={classes.textinp} cols="30" rows="5" placeholder='Enter a Description'></textarea>
        <div className={classes.mindiv}>
          <button type='button' onClick={onclose} className={classes.cancel}>Cancel</button>
          <button type='submit' className={classes.add}>Add</button>
        </div>
      </form>
    
  )
}

export default AddTask
