import { Routes, Route } from 'react-router-dom';
import { EmployeeDetail } from './EmployeeDetail';
import { EmployeeList } from './EmployeeList';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/detail/:id" element={<EmployeeDetail />} />
    </Routes>
  );
}

export default Index;
