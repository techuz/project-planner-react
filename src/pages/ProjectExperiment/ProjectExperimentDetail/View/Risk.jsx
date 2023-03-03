import { Box } from '@mui/material';
import RisksTable from '../../../../components/Table/Project/Risks';
import image1 from '../../../../assets/images/team-1.jpg';
import image2 from '../../../../assets/images/team-2.jpg';
import image3 from '../../../../assets/images/team-3.jpg';

export default function Risk(props) {
  const riskLists = [
    {
      risk: 'risk 1',
      status: 'pending',
      raisedBy: {
        name: 'Ryan Thompsan',
        image: image1
      },
      resolvedBy: {}
    },
    {
      risk: 'risk 2',
      status: 'resolved',
      raisedBy: {
        name: 'Ramina hadid',
        image: image2
      },
      resolvedBy: {
        name: 'Alexander smith',
        image: image3
      }
    }
  ];

  return (
    <Box>
      <RisksTable rows={riskLists} />
    </Box>
  );
}
