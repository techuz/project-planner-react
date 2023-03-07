import { Routes, Route } from 'react-router-dom';
import { EmployeeDetail } from './EmployeeDetail';
import { EmployeeList } from './EmployeeList';
import CreateEmployee from '../../components/Form/Employee/CreateEmployee';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/detail/:id" element={<EmployeeDetail />} />
      <Route path="/create-new-employee" element={<CreateEmployee />} />
    </Routes>
  );
}

export default Index;
