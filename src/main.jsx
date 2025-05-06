import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/projects/Projects.jsx'
import Home from './pages/home/Home.jsx'
import Cv from './pages/cv/Cv.jsx'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/cv' element={<Cv/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
