
import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [modal, setmodal] = useState(true)

  function onClose () {
    console.log(modal)
    setmodal(!modal)
  }

  return (
    <>
      <Header />
    </>
  )
}

export default App
