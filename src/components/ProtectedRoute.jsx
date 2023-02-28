import { Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import AppBar from './AppBar';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return <AppBar>{children}</AppBar>;
};
