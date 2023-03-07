import { Routes, Route } from 'react-router-dom';
import { ProjectExperimentDetail } from './ProjectExperimentDetail';
import { ProjectExperimentList } from './ProjectExperimentList';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<ProjectExperimentList />} />
      <Route path="/detail/:id" element={<ProjectExperimentDetail />} />
    </Routes>
  );
}

export default Index;
