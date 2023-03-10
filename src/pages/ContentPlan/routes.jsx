import { Routes, Route } from 'react-router-dom';
import { ContentPlanDetail } from './ContentPlanDetail';
import { ContentPlanList } from './ContentPlanList';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<ContentPlanList />} />
      <Route path="/detail/:id" element={<ContentPlanDetail />} />
    </Routes>
  );
}

export default Index;
