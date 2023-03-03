import { Box, Typography, FormLabel, Chip, Avatar, Link } from '@mui/material';

import ProjectUsersTableCell from '../../../../components/Table/ContentPlan/ProjectUsersTableCell';
import xcel from '../../../../assets/images/xcel.jpeg';

export default function Summary(props) {
  const { data } = props;

  return (
    <Box sx={{ padding: 3 }}>
      <FormLabel>Summary</FormLabel>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Documents: &nbsp;
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Avatar src={xcel} alt="name" sx={{ width: 20, height: 20, mr: 1 }} variant="square" />
            <Link href={data.docs[0].link} target="_blank">
              {data.docs[0].name}
            </Link>
          </Box>
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Topic: &nbsp;
          {data.topic}
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Category: &nbsp;
          {data.category}
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Deadline: &nbsp;
          <Chip label={data.deadline} color={'warning'} />
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Users: &nbsp;&nbsp;
          <ProjectUsersTableCell members={data.users} />
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Allocated By : &nbsp;&nbsp;
          <ProjectUsersTableCell members={data.allocatedBy} />
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Status: &nbsp;
          <Chip label={data.status} color={data.status === 'completed' ? 'success' : 'warning'} />
        </Typography>
      </Box>
    </Box>
  );
}
