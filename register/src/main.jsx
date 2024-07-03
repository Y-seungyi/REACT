import React from 'react'
import ReactDOM from 'react-dom/client'
import RegisterPage from './RegisterPage.jsx'
import LoginPage from './LoginPage.jsx'

import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/Register' element={<RegisterPage/>}></Route>
    <Route path='/Login' element={<LoginPage/>}></Route>
  </Routes>
  </BrowserRouter>
  
)
