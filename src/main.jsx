import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThankYouPage from './ThankYouPage.jsx'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App /> }/>
        <Route path='/ThankYou' element={<ThankYouPage />}/>
      </Routes>
    </Router>
   
  </React.StrictMode>,
)
