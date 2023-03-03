import { Box } from '@mui/material';
import DocumentsAndListTable from '../../../../components/Table/Project/DocumnetsAndLinks';

export default function DocumentsAndLinks(props) {
  const { data } = props;

  return (
    <Box>
      <DocumentsAndListTable rows={data.documents} />
    </Box>
  );
}
