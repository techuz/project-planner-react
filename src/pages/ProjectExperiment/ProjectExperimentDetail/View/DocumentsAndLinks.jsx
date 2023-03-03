import { Box } from '@mui/material';
import DocumentsAndListTable from '../../../../components/Table/Project/DocumnetsAndLinks';

export default function DocumentsAndLinks(props) {
  const documents = [
    {
      name: 'Project planning',
      link: 'https://docs.google.com/spreadsheets/d/1xuR8cD8QkTgqP07JkQqRVFYcGAFs0nsLyplk16Bq-Ps/edit?usp=sharing',
    },
    {
      name: 'SOW',
      link: 'https://docs.google.com/spreadsheets/d/1xuR8cD8QkTgqP07JkQqRVFYcGAFs0nsLyplk16Bq-Ps/edit?usp=sharing',
    },
    {
      name: 'Wire frames',
      link: 'https://docs.google.com/spreadsheets/d/1xuR8cD8QkTgqP07JkQqRVFYcGAFs0nsLyplk16Bq-Ps/edit?usp=sharing',
    },
  ];

  return (
    <Box>
      <DocumentsAndListTable rows={documents} />
    </Box>
  );
}
