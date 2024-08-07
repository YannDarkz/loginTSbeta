// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import { AuthProvider } from './context/AuthProvider'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'
import { Screen } from './components/Screen'
import RedirectToLogin from './components/RedirectToLogin'
import "./app.scss"

function App() {

  return (
    <div className='container_app'>
      <Router>

        <AuthProvider>
          <Routes>

            <Route path='/' element={<RedirectToLogin />} />
            <Route path='/profile' element={<ProtectedLayout> <Screen /> </ProtectedLayout>} />
            <Route path='/login' element={<Login />} />

          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
