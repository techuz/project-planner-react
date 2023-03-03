import React, { useEffect, useRef, useState } from 'react';
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
import { Button, ButtonGroup, Divider, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function DailyStanup(props) {
  const { data } = props;
  const [message, setMessage] = useState('');
  const [dailyStanups, setDailyStandups] = useState([]);
  const bottomElement = useRef(null);

  const handleSubmit = () => {
    const obj = {
      createdBy: 'Ryan thompsan',
      description: message,
      date: '27-02-2023'
    };
    let fk = dailyStanups;
    fk.push(obj);
    setDailyStandups([...fk]);
    setMessage('');
  };

  useEffect(() => {
    setDailyStandups(data.dailyStanups);
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      bottomElement.current.scrollIntoView({
        behavior: 'smooth'
      });
    }, 10);
  }, [dailyStanups]);
  return (
    <Box>
      <Paper elevation={4}>
        <Box>
          <ButtonGroup variant="text" color="primary" aria-label="medium secondary button group">
            <Button key="one">Last 3 months</Button>
            <Button key="two">Last 2 months</Button>
            <Button key="three">Last months</Button>
          </ButtonGroup>
          <Divider />
          <Timeline
            position="alternate"
            sx={{
              maxHeight: 410,
              overflowY: 'scroll'
            }}>
            {dailyStanups.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align={index % 2 === 0 ? 'right' : 'left'}
                  variant="body2"
                  color="text.secondary">
                  {item.date}
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
        <Paper
          elevation={4}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '8px 16px 8px 16px'
          }}>
          <TextField
            sx={{ width: '90%' }}
            id="outlined-multiline-flexible"
            placeholder="Create new standup..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            multiline
            maxRows={4}
          />
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
            Send
          </Button>
        </Paper>
      </Paper>
    </Box>
  );
}
