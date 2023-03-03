import React from 'react';
import ProjectListTable from '../../../components/Table/Project/List';
import { useFeatureFlags } from "../../../providers/FeatureFlagsProvider";

const Dashboard = () => {
  const { getIsFeatureEnabled } = useFeatureFlags();
  const isEnabled = getIsFeatureEnabled('DASHBOARD');
  //Below code added just for reference, it'll be always true for now
  return isEnabled ? <ProjectListTable /> : 'Permission Not Granted';
};

export default Dashboard;
