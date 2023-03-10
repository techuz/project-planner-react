import { Routes, Route } from 'react-router-dom';
import { GlobalDailyStandups } from './index';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<GlobalDailyStandups />} />
    </Routes>
  );
}

export default Index;
