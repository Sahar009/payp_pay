import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='' element={<><Checkout/></>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App