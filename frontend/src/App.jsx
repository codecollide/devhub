import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from '../src/components/layout/Layout'
import SignUpForm from '../src/components/signUpForm/SignUpForm'
import SignInForm from '../src/components/signInForm/SignInForm'
import Home from '../src/components/home/Home.jsx'
import Header from "./components/header/Header.jsx"
import logo from '../public/vite.svg'
import { useState } from "react"
import './App.css'

function App () {
  const [loggedIn, setLoggedIn] = useState(true)
  const [email, setEmail] = useState('')
  return (
    <>
    <Header logoSrc={logo} pageTitle='test application'></Header>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<SignInForm setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/signup" element={<SignUpForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
