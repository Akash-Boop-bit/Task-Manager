import { useState} from 'react'
import classes from './Modal.module.css'

const Modal = ({children , onclose}) => {
  return (
    <>
      <div onClick={onclose} className={classes.backdrop}/>
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  )
}

export default Modal
