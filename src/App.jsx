import AddButton from './components/AddButton'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Modal from './components/Modal'
import AddTask from './components/AddTask'

function App() {
  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState('')
  const [post, setPost] = useState([])

  function onAddTask(taskData) {
    setPost((prevPost) => [taskData , ...prevPost])
  }

  function onDeleteHandler(index) {
    const updatedPost = post.filter((_, i) => i!==index )
    setPost(updatedPost)
  }

  function onClose () {
    setModal(!modal)
  }

  function onTitle(event) {
    setTitle(event.target.value)
  }

  function onDescription(event){
    setDescription(event.target.value)
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    const taskData = {
      hed: title,
      bod: description,
    }
    onAddTask(taskData)
    onClose()

  }

  return (
    <>
      {modal && <Modal onclose={onClose}>
        <AddTask 
          onclose={onClose}
          title={title}
          description={description}
          ontitle={onTitle}
          ondescription={onDescription}
          submitHandler={onSubmitHandler}
         />
      </Modal>}
      <Header />
      <AddButton onclose={onClose}/>
      <Tasks 
        post={post}
        onDeleteHandler={onDeleteHandler}
        />
    </>
  )
}

export default App
