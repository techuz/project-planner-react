import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import ViewSummary from './View/Summary';
import EditSummary from './Edit/Summary';
import { useParams } from 'react-router-dom';
import ProjectAllocation from './Edit/ProjectAllocation';
import employeeList from '../../../StaticData/employeeList.json';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const a = 'd';
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
  const params = useParams();
  const { id } = params;
  const [row, setRow] = useState({});
  const permissions = 'View';
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const details = employeeList.filter((item) => item.id === id);
    if (details.length > 0) setRow(details[0]);
  }, [id]);

  return (
    <Paper elevation={4}>
      {permissions === 'View' ? (
        Object.keys(row).length > 0 ? (
          <Box sx={{ width: '100%' }}>
            <ViewSummary data={row} />
          </Box>
        ) : (
          <Box
            sx={{
              width: '100%',
              minHeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Typography>No record found!</Typography>
          </Box>
        )
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
