import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import { Avatar } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ProjectLeadTableCell from './ProjectLeadTableCell';

import xcel from '../../../../assets/images/xcel.jpeg';
import StatusTableCell from './StausTableCell';
import Link from '@mui/material/Link';
import experimentProjectList from '../../../../StaticData/experimentProjectList.json';

function Row(props) {
  const { row } = props;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={xcel} alt="name" sx={{ width: 20, height: 20, mr: 1 }} variant="square" />
            <Link
              href="https://docs.google.com/spreadsheets/d/1xuR8cD8QkTgqP07JkQqRVFYcGAFs0nsLyplk16Bq-Ps/edit?usp=sharing"
              target="_blank">
              {row.project_name}
            </Link>
          </Box>
        </TableCell>
        <TableCell
          align="center"
          component="th"
          scope="row"
          onClick={() => navigate(`/project-experiment/detail/${row.id}`)}>
          {row.project_name}
        </TableCell>
        <TableCell align="center">
          <ProjectLeadTableCell members={row.project_lead} />
        </TableCell>
        <TableCell align="center">
          <ProjectLeadTableCell members={row.developers} />
        </TableCell>
        <TableCell align="center">
          <Chip label={row.date} color={row.date === 'completed' ? 'success' : 'warning'} />
        </TableCell>
        <TableCell align="center">{row.budget}</TableCell>
        <TableCell align="center">
          <StatusTableCell statuses={row.status} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Milestone
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Start date</TableCell>
                    <TableCell align="center">End date</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Checklist</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.milestone.map((mRow) => (
                    <TableRow key={mRow.startDate}>
                      <TableCell align="center" component="th" scope="row">
                        {mRow.name}
                      </TableCell>
                      <TableCell align="center">{mRow.startDate}</TableCell>
                      <TableCell align="center">{mRow.endDate}</TableCell>
                      <TableCell align="center">
                        <Chip
                          label={mRow.status}
                          color={mRow.status === 'completed' ? 'success' : 'warning'}
                        />
                      </TableCell>
                      <TableCell align="center">{mRow.checklist}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    project_lead: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
    ).isRequired,
    developers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        hours: PropTypes.string.isRequired
      })
    ).isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    milestone: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        checklist: PropTypes.string.isRequired
      })
    ).isRequired,
    project_name: PropTypes.string.isRequired,
    status: PropTypes.arrayOf(
      PropTypes.shape({
        initial: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        flag: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

const rows = experimentProjectList;

export default function Index() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <TableContainer component={Paper} elevation={4}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">Links</TableCell>
              <TableCell align="center">Project name</TableCell>
              <TableCell align="center">Project lead</TableCell>
              <TableCell align="center">Users</TableCell>
              <TableCell align="center">Upcoming deadline</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <Row key={row.project_name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
