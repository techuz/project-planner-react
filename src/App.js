import { Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from './components/ProtectedRoute';

import { Login } from './pages/Login';
import { Dashboard } from './pages/Projects/Dashboard';
import { EmployeeList } from './pages/Employee/EmployeeList';
import { AuthProvider } from './providers/AuthProvider';
import { ProjectDetail } from './pages/Projects/ProjectDetail';
import { ProjectExperimentDetail } from './pages/ProjectExperiment/ProjectExperimentDetail';
import { EmployeeDetail } from './pages/Employee/EmployeeDetail';
import CreateProject from './components/Form/Project/CreateProject';
import CreateEmployee from './components/Form/Employee/CreateEmployee';
import { GlobalDailyStandups } from './pages/GlobalDailyStandups';
import { ContentPlan } from './pages/ContentPlan';
import { ProjectExperimentList } from './pages/ProjectExperiment/ProjectExperimentList';

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
        <Route
          path="/global-daily-standups"
          element={
            <ProtectedRoute>
              <GlobalDailyStandups />
            </ProtectedRoute>
          }
        />
        <Route
          path="/content-plan"
          element={
            <ProtectedRoute>
              <ContentPlan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project-experiment"
          element={
            <ProtectedRoute>
              <ProjectExperimentList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project-detail"
          element={
            <ProtectedRoute>
              <ProjectDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee-detail"
          element={
            <ProtectedRoute>
              <EmployeeDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project-experiment-detail"
          element={
            <ProtectedRoute>
              <ProjectExperimentDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/create-new-project"
          element={
            <ProtectedRoute>
              <CreateProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee-list/create-new-employee"
          element={
            <ProtectedRoute>
              <CreateEmployee />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
