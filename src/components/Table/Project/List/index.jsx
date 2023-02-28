import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
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
import ActionTableCell from './ActionTableCell';
import AddIcon from '@mui/icons-material/Add';

import team1 from '../../../../assets/images/team-1.jpg';
import team2 from '../../../../assets/images/team-2.jpg';
import team3 from '../../../../assets/images/team-3.jpg';
import team4 from '../../../../assets/images/team-4.jpg';
import team5 from '../../../../assets/images/team-5.jpg';
import StatusTableCell from './StausTableCell';

function createData(
  project_name,
  project_lead,
  developers,
  date,
  budget,
  status,
  milestone
) {
  return {
    project_name,
    project_lead,
    developers,
    date,
    budget,
    status,
    milestone,
  };
}

function Row(props) {
  const { row } = props;
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          align="center"
          component="th"
          scope="row"
          onClick={() => navigate('/project-detail', { state: { row } })}
        >
          {row.project_name}
        </TableCell>
        <TableCell align="center">
          <ProjectLeadTableCell members={row.project_lead} />
        </TableCell>
        <TableCell align="center">
          <ProjectLeadTableCell members={row.developers} />
        </TableCell>
        <TableCell align="center">
          <Chip
            label={row.date}
            color={row.date === 'completed' ? 'success' : 'warning'}
          />
        </TableCell>
        <TableCell align="center">{row.budget}</TableCell>
        <TableCell align="center">
          <StatusTableCell statuses={row.status} />
        </TableCell>
        <TableCell align="center">
          <ActionTableCell />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
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
                          color={
                            mRow.status === 'completed' ? 'success' : 'warning'
                          }
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
    project_lead: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
    developers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        hours: PropTypes.string.isRequired,
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
        checklist: PropTypes.string.isRequired,
      })
    ).isRequired,
    project_name: PropTypes.string.isRequired,
    status: PropTypes.arrayOf(
      PropTypes.shape({
        initial: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        flag: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData(
    'Frozen yoghurt',
    [
      {
        name: 'Ryan Tompson',
        image: team1,
      },
    ],
    [
      {
        name: 'Ryan Tompson',
        image: team2,
        hours: '40 hours',
      },
      {
        name: 'Romina Hadid',
        image: team3,
        hours: '35 hours',
      },
      {
        name: 'Alexander Smith',
        image: team4,
        hours: '25 hours',
      },
      {
        name: 'Jessica Doe',
        image: team5,
        hours: '55 hours',
      },
    ],
    '2023-01-02',
    'FIX',
    [
      {
        name: 'Risk',
        initial: 'R',
        flag: true,
      },
      {
        name: 'Daily meetings',
        initial: 'DM',
        flag: false,
      },
      {
        name: 'Milestones',
        initial: 'ML',
        flag: true,
      },
    ],
    [
      {
        name: 'M1',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 1',
      },
      {
        name: 'M2',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 2',
      },
    ]
  ),
  createData(
    'Ice cream sandwich',
    [
      {
        name: 'Romina Hadid',
        image: team2,
      },
    ],
    [
      {
        name: 'Ryan Tompson',
        image: team1,
        hours: '40 hours',
      },
      {
        name: 'Romina Hadid',
        image: team3,
        hours: '35 hours',
      },
      {
        name: 'Alexander Smith',
        image: team4,
        hours: '25 hours',
      },
      {
        name: 'Jessica Doe',
        image: team5,
        hours: '55 hours',
      },
    ],
    '2023-01-02',
    'TM',
    [
      {
        name: 'Risk',
        initial: 'R',
        flag: true,
      },
      {
        name: 'Daily meetings',
        initial: 'DM',
        flag: false,
      },
      {
        name: 'Milestones',
        initial: 'ML',
        flag: true,
      },
    ],
    [
      {
        name: 'M1',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 1',
      },
      {
        name: 'M2',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 2',
      },
    ]
  ),
  createData(
    'Eclair',
    [
      {
        name: 'Alexander Smith',
        image: team3,
      },
    ],
    [
      {
        name: 'Ryan Tompson',
        image: team2,
        hours: '40 hours',
      },
      {
        name: 'Romina Hadid',
        image: team1,
        hours: '35 hours',
      },
      {
        name: 'Alexander Smith',
        image: team4,
        hours: '25 hours',
      },
      {
        name: 'Jessica Doe',
        image: team5,
        hours: '55 hours',
      },
    ],
    '2022-05-12',
    'TM',
    [
      {
        name: 'Risk',
        initial: 'R',
        flag: true,
      },
      {
        name: 'Daily meetings',
        initial: 'DM',
        flag: false,
      },
      {
        name: 'Milestones',
        initial: 'ML',
        flag: true,
      },
    ],
    [
      {
        name: 'M1',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 1',
      },
      {
        name: 'M2',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 2',
      },
    ]
  ),
  createData(
    'Cupcake',
    [
      {
        name: 'Jessica Doe',
        image: team4,
      },
    ],
    [
      {
        name: 'Ryan Tompson',
        image: team2,
        hours: '40 hours',
      },
      {
        name: 'Romina Hadid',
        image: team3,
        hours: '35 hours',
      },
      {
        name: 'Alexander Smith',
        image: team1,
        hours: '25 hours',
      },
      {
        name: 'Jessica Doe',
        image: team5,
        hours: '55 hours',
      },
    ],
    '2021-07-27',
    'FIX',
    [
      {
        name: 'Risk',
        initial: 'R',
        flag: true,
      },
      {
        name: 'Daily meetings',
        initial: 'DM',
        flag: false,
      },
      {
        name: 'Milestones',
        initial: 'ML',
        flag: true,
      },
    ],
    [
      {
        name: 'M1',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 1',
      },
      {
        name: 'M2',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 2',
      },
      {
        name: 'M3',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 3',
      },
      {
        name: 'M4',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 4',
      },
    ]
  ),
  createData(
    'Gingerbread',
    [
      {
        name: 'John Doe',
        image: team5,
      },
    ],
    [
      {
        name: 'Ryan Tompson',
        image: team2,
        hours: '40 hours',
      },
      {
        name: 'Romina Hadid',
        image: team3,
        hours: '35 hours',
      },
      {
        name: 'Alexander Smith',
        image: team4,
        hours: '25 hours',
      },
      {
        name: 'Jessica Doe',
        image: team1,
        hours: '55 hours',
      },
    ],
    '2022-11-20',
    'TM',
    [
      {
        name: 'Risk',
        initial: 'R',
        flag: true,
      },
      {
        name: 'Daily meetings',
        initial: 'DM',
        flag: false,
      },
      {
        name: 'Milestones',
        initial: 'ML',
        flag: true,
      },
    ],
    [
      {
        name: 'M1',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'pending',
        checklist: 'this is milestone 1',
      },
      {
        name: 'M2',
        startDate: '2023-01-02',
        endDate: '2023-01-02',
        status: 'completed',
        checklist: 'this is milestone 2',
      },
    ]
  ),
];

export default function Index() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Box sx={{ float: 'right', paddingBottom: 2 }} color="primary" px={2}>
        <Button
          onClick={() => navigate('/dashboard/create-new-project')}
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
        >
          add new project
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">Project name</TableCell>
              <TableCell align="center">Project lead</TableCell>
              <TableCell align="center">Users</TableCell>
              <TableCell align="center">Upcoming deadline</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
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