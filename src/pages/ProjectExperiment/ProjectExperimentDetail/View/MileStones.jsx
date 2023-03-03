import { Box, FormLabel } from '@mui/material';
import MilestonesTable from '../../../../components/Table/Project/Milestones';

export default function Milestones(props) {
  const { data } = props;

  return (
    <Box sx={{ margin: 3 }}>
      <FormLabel>Milestones</FormLabel>
      <MilestonesTable rows={data.milestone} />
    </Box>
  );
}
