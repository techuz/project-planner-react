import { Routes, Route } from 'react-router-dom';
import { ProjectDetail } from './ProjectDetail';
import { ProjectList } from './ProjectList';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<ProjectList />} />
      <Route path="/detail/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default Index;
