import { useState } from 'react';

// material-ui
import { alpha } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

// project-imports
import { header } from './basic';
import IconButton from 'components/@extended/IconButton';
import MainCard from 'components/MainCard';
import { CSVExport } from 'components/third-party/react-table';

// assets
import { ArrowDown2, ArrowRight2 } from 'iconsax-reactjs';

// table data
type BasicTableData = {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  price: number;
  history?: { date: string; customerId: string; amount: number }[];
};
function createData(name: string, calories: number, fat: number, carbs: number, protein: number, price: number) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 }
    ]
  };
}

function Row({ row }: { row: BasicTableData }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ pl: 3 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            disableRipple
            color={open ? 'primary' : 'secondary'}
            sx={{ '&::after': { content: 'none' } }}
            onClick={() => setOpen(!open)}
          >
            {open ? <ArrowRight2 /> : <ArrowDown2 />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right" sx={{ pr: 3 }}>
          {row.protein}
        </TableCell>
      </TableRow>
      <TableRow
        sx={(theme) => ({
          bgcolor: alpha(theme.palette.primary.lighter, 0.1),
          ...theme.applyStyles('dark', { bgcolor: alpha(theme.palette.secondary.light, 0.25) }),
          '&:hover': {
            bgcolor: `${alpha(theme.palette.primary.lighter, 0.1)} !important`,
            ...theme.applyStyles('dark', { bgcolor: `${alpha(theme.palette.secondary.light, 0.25)} !important` })
          }
        })}
      >
        <TableCell sx={{ py: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {open && (
              <Box sx={{ py: 3, pl: { xs: 3, sm: 5, md: 6, lg: 10, xl: 12 } }}>
                <TableContainer>
                  <MainCard content={false}>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Customer</TableCell>
                          <TableCell align="right">Amount</TableCell>
                          <TableCell align="right">Total price ($)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row.history?.map((historyRow: { date: string; customerId: string; amount: number }) => (
                          <TableRow hover key={historyRow.date}>
                            <TableCell component="th" scope="row">
                              {historyRow.date}
                            </TableCell>
                            <TableCell>{historyRow.customerId}</TableCell>
                            <TableCell align="right">{historyRow.amount}</TableCell>
                            <TableCell align="right">{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </MainCard>
                </TableContainer>
              </Box>
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5)
];

// ==============================|| MUI TABLE - COLLAPSIBLE ||============================== //

export default function TableCollapsible() {
  return (
    <MainCard
      content={false}
      title="Collapsible Table"
      secondary={<CSVExport data={rows} headers={header} filename={'collapsible-table-data.csv'} />}
    >
      {/* table */}
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 3 }} />
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell sx={{ pr: 3 }} align="right">
                Protein&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
