import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}  />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
