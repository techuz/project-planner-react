import { Routes, Route } from 'react-router-dom';
import { ProjectDetail } from './ProjectDetail';
import { ProjectList } from './ProjectList';
import CreateProject from '../../components/Form/Project/CreateProject';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<ProjectList />} />
      <Route path="/detail/:id" element={<ProjectDetail />} />
      <Route path="/create" element={<CreateProject />} />
    </Routes>
  );
}

export default Index;
