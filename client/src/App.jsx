import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import AppLayout from './layouts';
import { Home, AddPhoto } from './pages/';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home/>}/>
          <Route path='/add-post' element={<AddPhoto />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
