import React, { useEffect, useRef } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import globalDailyStandupsList from '../../StaticData/globalDailyStandupsList.json';

export default function GlobalDailyStandups() {
  const dailyStanups = globalDailyStandupsList;
  const bottomElement = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      bottomElement.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 10);
  }, [dailyStanups]);

  return (
    <Box>
      <Paper elevation={4} sx={{ mt: 2, padding: 2 }}>
        <Box>
          <Timeline
            position="alternate"
            sx={{
              maxHeight: 560,
              overflowY: 'scroll',
            }}
          >
            {dailyStanups.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align={index % 2 === 0 ? 'right' : 'left'}
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography>{item.time}</Typography>
                  <Typography>{item.project}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                    <Typography variant="caption" component="span">
                      {item.createdBy}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
            <div className="bottom" ref={bottomElement} />
          </Timeline>
        </Box>
      </Paper>
    </Box>
  );
}
