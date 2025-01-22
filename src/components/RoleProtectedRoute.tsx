

// components/RoleProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { UserRole } from '../types';

interface RoleProtectedRouteProps {
  roles: UserRole[];
}

const RoleProtectedRoute = ({ roles }: RoleProtectedRouteProps) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role && !roles.includes(user.role)) {
    return <Navigate to="/branch" replace />;
  }

  return <Outlet />;
};

export default RoleProtectedRoute;


