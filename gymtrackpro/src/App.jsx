import React from 'react'
import { Login } from './components/Login'
import { Signup } from './components/signup'
import { Home } from './components/home'

function App() {
  return (
    <div className='App'>
      <Login />
      <Signup />
      <Home />
    </div>
  )
}

export default App
