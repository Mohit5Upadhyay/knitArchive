

// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserRole } from './types';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import RequestResources from './pages/RequestResources';
import ReportIssue from './pages/ReportIssue';
import Branch from './pages/Branch';
import Upload from './pages/Upload';
import FilterResource from './pages/FilterResources';
import ProtectedRoute from './components/ProtectedRoute';
import RoleProtectedRoute from './components/RoleProtectedRoute';
import { AuthProvider } from './context/AuthProvider';
import Home from './pages/Home';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/branch" element={<Branch />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/request-resources" element={<RequestResources />} />
                <Route path="/report-issue" element={<ReportIssue />} />
                <Route path="/filter-resources" element={<FilterResource />} />
              </Route>

              {/* Role Protected Routes */}
              <Route element={
                <RoleProtectedRoute roles={[UserRole.ADMIN, UserRole.CR]} />
              }>
                <Route path="/upload-resources" element={<Upload />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;