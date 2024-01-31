
import classes from './Header.module.css'


function Header() {
  return(
    <>
      <div className={classes.main}>
        <h1 className={classes.heading1}>Task Manager</h1>
      </div>
      <div style={{height:"0.5vw", backgroundColor:'white'}}></div>
    </>
  )

}

export default Header