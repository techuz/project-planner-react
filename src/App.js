import { Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from './components/ProtectedRoute';

import { Login } from './pages/Login';
import { AuthProvider } from './providers/AuthProvider';
import GlobalDailyStandups from './pages/GlobalDailyStandups/routes';
import ProjectList from './pages/Projects/routes';
import EmployeeList from './pages/Employee/routes';
import ContentPlan from './pages/ContentPlan/routes';
import ProjectExperimentList from './pages/ProjectExperiment/routes';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/projects/*"
          element={
            <ProtectedRoute>
              <ProjectList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employees/*"
          element={
            <ProtectedRoute>
              <EmployeeList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/global-daily-standups/*"
          element={
            <ProtectedRoute>
              <GlobalDailyStandups />
            </ProtectedRoute>
          }
        />
        <Route
          path="/content-plan/*"
          element={
            <ProtectedRoute>
              <ContentPlan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project-experiment/*"
          element={
            <ProtectedRoute>
              <ProjectExperimentList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
