import { useState } from 'react'
import Home from './components/Home'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
      <Modal />
      <Sidebar />
    </div>
  )
}

export default App
