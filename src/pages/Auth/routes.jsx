import { Routes, Route } from 'react-router-dom';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';
import { Login } from './Login';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default Index;
