import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
            <div className='pages'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                </Routes>
            </div>
       </BrowserRouter>
    </>
  )
}

export default App
