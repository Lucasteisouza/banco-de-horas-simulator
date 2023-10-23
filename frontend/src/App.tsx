import './App.css'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/" element={ <Navigate to={'/login'}/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
