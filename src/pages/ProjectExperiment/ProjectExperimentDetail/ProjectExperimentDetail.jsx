import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Paper, Tab } from '@mui/material';
import Summary from './View/Summary';
import { useParams } from 'react-router-dom';
import Milestones from './View/MileStones';
import DailyStanup from './View/DailyStanup';
import Risk from './View/Risk';
import DocumentsAndLinks from './View/DocumentsAndLinks';
import experimentProjectList from '../../../StaticData/experimentProjectList.json';

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

export default function ProjectExperimentDetail() {
  const params = useParams();
  const { id } = params;
  const [row, setRow] = useState({});
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const details = experimentProjectList.filter((item) => item.id === id);
    if (details.length > 0) setRow(details[0]);
  }, [id]);

  return (
    <Paper elevation={4}>
      {Object.keys(row).length > 0 ? (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="project detail"
            >
              <Tab label="Summary" {...a11yProps(0)} />
              <Tab label="Daily standup/ meetings" {...a11yProps(1)} />
              <Tab label="Risks" {...a11yProps(2)} />
              <Tab label="Documents & links" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box sx={{ paddingBottom: 3 }}>
              <Card>
                <Summary data={row} />
              </Card>
            </Box>
            <Box sx={{ paddingBottom: 3 }}>
              <Card>
                <Milestones data={row} />
              </Card>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box>
              <DailyStanup data={row} />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box>
              <Risk data={row} />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box>
              <DocumentsAndLinks data={row} />
            </Box>
          </TabPanel>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            minHeight: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>No record found!</Typography>
        </Box>
      )}
    </Paper>
  );
}
