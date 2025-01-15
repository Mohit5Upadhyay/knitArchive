import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import RequestResources from './pages/RequestResources'
import ReportIssue from './pages/ReportIssue'

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/forgot-password'element={<ForgotPassword />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/request-resources' element={<RequestResources />} />
        <Route path='/report-issue' element={<ReportIssue/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
      
      
    </Router>
  )
}

export default App