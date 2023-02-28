import { Box, FormLabel } from '@mui/material';
import RisksTable from '../../../../components/Table/Project/Risks';

export default function Risk(props) {
  const { data } = props;
  console.log(data);
  const riskLists = [
    {
      risk: 'risk 1',
      status: 'pending',
    },
    {
      risk: 'risk 2',
      status: 'resolved',
    },
  ];

  return (
    <Box>
      <FormLabel>Risk's list</FormLabel>
      <RisksTable rows={riskLists} />
    </Box>
  );
}
