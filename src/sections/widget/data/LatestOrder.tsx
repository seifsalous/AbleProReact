import { Link as RouterLink } from 'react-router-dom';

// material-ui
import CardMedia from '@mui/material/CardMedia';
import Chip, { ChipProps } from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

// project-imports
import IconButton from 'components/@extended/IconButton';
import MainCard from 'components/MainCard';

// assets
import { Edit, Trash } from 'iconsax-reactjs';

import Phone1 from 'assets/images/widget/PHONE1.jpg';
import Phone2 from 'assets/images/widget/PHONE2.jpg';
import Phone3 from 'assets/images/widget/PHONE3.jpg';
import Phone4 from 'assets/images/widget/PHONE4.jpg';

// table data
function createData(
  customer: string,
  cid: string,
  photo: string,
  product: string,
  quantity: string,
  date: string,
  status: string,
  statuscolor: ChipProps['color']
) {
  return { customer, cid, photo, product, quantity, date, status, statuscolor };
}

const rows = [
  createData('John Deo', '#81412314', Phone1, 'Moto G5', '10', '17-2-2017', 'Pending', 'warning'),
  createData('Jenny William', '#68457898', Phone2, 'iPhone 8', '16', '20-2-2017', 'Paid', 'primary'),
  createData('Lori Moore', '#45457898', Phone3, 'Redmi 4', '20', '17-2-2017', 'Success', 'success'),
  createData('Austin Pena', '#62446232', Phone4, 'Jio', '15', '25-4-2017', 'Failed', 'error')
];

// =========================|| DATA WIDGET - LATEST ORDER ||========================= //

export default function LatestOrder() {
  return (
    <MainCard
      title="Latest Order"
      content={false}
      secondary={
        <Link component={RouterLink} to="#" color="primary">
          View all
        </Link>
      }
    >
      <TableContainer>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 3 }}>Customer</TableCell>
              <TableCell>Order Id</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Product</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center" sx={{ pr: 3 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={index}>
                <TableCell sx={{ pl: 3 }}>{row.customer}</TableCell>
                <TableCell>{row.cid}</TableCell>
                <TableCell>
                  <CardMedia component="img" image={row.photo} title="image" sx={{ width: 20, height: 'auto' }} />
                </TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">
                  <Chip color={row.statuscolor} label={row.status} size="small" />
                </TableCell>
                <TableCell align="center" sx={{ pr: 3 }}>
                  <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton color="primary" size="large">
                      <Edit />
                    </IconButton>
                    <IconButton color="inherit" size="large">
                      <Trash />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
