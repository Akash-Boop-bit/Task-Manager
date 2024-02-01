import {useState} from 'react'
import classes from './AddButton.module.css'

const AddButton = ( { onclose } ) => {
  return (
    <>
      <div className={classes.maindiv}>
        <button onClick={onclose} className={classes.mainbutton}>
          Add Tasks
        </button>
      </div>
    </>
  )
}

export default AddButton
