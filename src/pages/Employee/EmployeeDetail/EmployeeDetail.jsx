import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import ViewSummary from './View/Summary';
import EditSummary from './Edit/Summary';
import { useLocation } from 'react-router-dom';
import ProjectAllocation from './Edit/ProjectAllocation';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function EmployeeDetail() {
  const { state } = useLocation();
  const { row, permissions } = state;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={4}>
      {permissions === 'View' ? (
        <Box sx={{ width: '100%' }}>
          <ViewSummary data={row} />
        </Box>
      ) : (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="employee detail">
              <Tab label="Summary" {...a11yProps(0)} />
              <Tab label="Project allocation" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <EditSummary data={row} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProjectAllocation data={row} />
          </TabPanel>
        </Box>
      )}
    </Paper>
  );
}
