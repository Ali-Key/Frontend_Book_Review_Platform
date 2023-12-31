import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import "./App.css"
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import Books from './pages/Books'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Books" element={<Books/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
