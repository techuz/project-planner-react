import { Routes, Route } from 'react-router-dom';
import { ForgotPassword } from './ForgotPassword';
import { Login } from './Login';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default Index;
