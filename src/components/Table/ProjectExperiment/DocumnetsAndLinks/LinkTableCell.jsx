import { Box, Avatar, Typography, Link } from '@mui/material';
import xcel from '../../../../assets/images/xcel.jpeg';

const LinkTableCell = (props) => {
  const { link } = props;
  if (link && Object.keys(link).length === 0) {
    return;
  }
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
    >
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src={xcel}
          alt="name"
          sx={{
            border: '2px solid #FFF',
            cursor: 'pointer',
            position: 'relative',
            mr: 1,
            width: 20,
            height: 20,
          }}
          variant="square"
        />
        <Link
          href="https://docs.google.com/spreadsheets/d/1xuR8cD8QkTgqP07JkQqRVFYcGAFs0nsLyplk16Bq-Ps/edit?usp=sharing"
          target="_blank"
        >
          {link.name}
        </Link>
      </Typography>
    </Box>
  );
};

export default LinkTableCell;
