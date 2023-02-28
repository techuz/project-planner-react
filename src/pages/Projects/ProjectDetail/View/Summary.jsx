import { Box, Avatar, FormLabel, Typography } from '@mui/material';

import ProjectLeadTableCell from '../../../../components/Table/Project/List/ProjectLeadTableCell';

export default function Summary(props) {
  const { data } = props;

  return (
    <Box sx={{ margin: 3 }}>
      <FormLabel>Summary</FormLabel>
      <Box sx={{ margin: 1 }}>
        <Typography>Project name: {data.project_name}</Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography>Upcoming deadline: {data.date}</Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex' }}>
          <Typography sx={{ marginRight: 1 }}>Project lead: </Typography>

          {data.project_lead.map((item) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src={item?.image}
                alt="name"
                sx={{ width: 20, height: 20 }}
              />
              <Typography ml={1}>{item?.name}</Typography>
            </Box>
          ))}
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography sx={{ display: 'flex' }}>
          <Typography sx={{ marginRight: 3 }}>Team: </Typography>
          <ProjectLeadTableCell members={data.developers} />
        </Typography>
      </Box>
    </Box>
  );
}
