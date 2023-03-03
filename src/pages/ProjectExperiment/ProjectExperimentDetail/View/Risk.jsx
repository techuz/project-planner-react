import { Box } from '@mui/material';
import RisksTable from '../../../../components/Table/Project/Risks';

export default function Risk(props) {
  const { data } = props;

  return (
    <Box>
      <RisksTable rows={data.risks} />
    </Box>
  );
}
