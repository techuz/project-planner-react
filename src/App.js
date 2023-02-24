import { Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from './components/ProtectedRoute';

import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { EmployeeList } from './pages/EmployeeList';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee-list"
          element={
            <ProtectedRoute>
              <EmployeeList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
