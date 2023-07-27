import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import { logo } from './assets';
import { Home, AddPost } from './pages/';

function App() {

  return (
    <Router>
      <header className='header'>
        <Link to="/">
          <img src={logo} alt='logo' className='w-28 object-contain' />
        </Link>

        <Link to="/add-post" className='post-btn'>
          Add
        </Link>
      </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add-post' element={<AddPost/>}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App
