import {useState} from 'react'
import classes from './AddButton.module.css'

const AddButton = () => {
  return (
    <>
      <div className={classes.maindiv}>
        <button className={classes.mainbutton}>
          Add Tasks
        </button>
      </div>
    </>
  )
}

export default AddButton
