import * as React from 'react';
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
import { Button, ButtonGroup, Divider, FormLabel, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function DailyStanup(props) {
  const { data } = props;
  const [message, setMessage] = React.useState('');
  const [dailyStanups, setDailyStandups] = React.useState([
    {
      heading: 'Mysql',
      description: 'Because you need strength',
      date: '27-02-2023',
    },
    {
      heading: 'Node js',
      description: 'Because you need strength',
      date: '27-02-2023',
    },
    {
      heading: 'Reactjs',
      description: 'Some UI changes need to done',
      date: '28-02-2023',
    },
    {
      heading: 'Angular',
      description: 'Need to  configure authentication api',
      date: '28-02-2023',
    },
    {
      heading: 'Mysql',
      description: 'Configure the tables',
      date: '24-02-2023',
    },
    {
      heading: 'Mysql',
      description: 'Because you need strength',
      date: '27-02-2023',
    },
    {
      heading: 'Mysql',
      description: 'Because you need strength',
      date: '27-02-2023',
    },
    {
      heading: 'Mysql',
      description: 'Because you need strength',
      date: '27-02-2023',
    },
    {
      heading: 'Mysql',
      description: 'Because you need strength',
      date: '27-02-2023',
    },
    {
      heading: 'react js',
      description: 'Because you need strength',
      date: '27-02-2023',
    },
    {
      heading: 'node js',
      description: 'Because you need strength',
      date: '27-02-2023',
    },
    {
      heading: 'Mysql',
      description: 'Because you need strength',
      date: '27-02-2023',
    },
    {
      heading: 'php',
      description: 'Because you need strength',
      date: '27-02-2023',
    },
  ]);
  const bottomElement = React.useRef(null);

  const handleSubmit = () => {
    const obj = {
      heading: 'php',
      description: message,
      date: '27-02-2023',
    };
    let fk = dailyStanups;
    fk.push(obj);
    setDailyStandups([...fk]);
    setMessage('');
  };

  React.useEffect(() => {
    setTimeout(() => {
      bottomElement.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 10);
  }, [dailyStanups]);
  console.log(data);
  return (
    <Box>
      <FormLabel>Daily standups/ meetings</FormLabel>
      <Paper elevation={4} sx={{ mt: 2 }}>
        <Box>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="medium secondary button group"
          >
            <Button key="one">Last 2 months</Button>
            <Button key="two">Last months</Button>
            <Button key="three">Last week</Button>
          </ButtonGroup>
          <Divider />
          <Timeline
            position="alternate"
            sx={{
              maxHeight: 370,
              overflowY: 'scroll',
            }}
          >
            {dailyStanups.map((item, index) => (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align={index % 2 === 0 ? 'right' : 'left'}
                  variant="body2"
                  color="text.secondary"
                >
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
                    <Typography variant="h6" component="span">
                      {item.heading}
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
            padding: '8px 16px 8px 16px',
          }}
        >
          <textarea
            placeholder="Create new standup..."
            style={{ padding: '8px 16px 8px 16px', width: '90%' }}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </Paper>
      </Paper>
    </Box>
  );
}
