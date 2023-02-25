import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Summary from './Summary';
import { useLocation } from 'react-router-dom';
import Milestones from './MileStones';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
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
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProjectDetail() {
  const { state } = useLocation();
  const { row } = state;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="project detail"
          >
            <Tab label="Summary" {...a11yProps(0)} />
            <Tab label="Milestones" {...a11yProps(1)} />
            <Tab label="Daily standup/ meetings" {...a11yProps(2)} />
            <Tab label="Risks" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Summary data={row} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Milestones data={row} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Daily standup/ meetings
        </TabPanel>
        <TabPanel value={value} index={3}>
          Risks
        </TabPanel>
      </Box>
    </Paper>
  );
}
