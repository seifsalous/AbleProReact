import { Fragment } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// ==============================|| BASIC WIZARD - REVIEW  ||============================== //

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99'
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45'
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51'
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11'
  },
  { name: 'Shipping', desc: '', price: 'Free' }
];

const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' }
];

export default function Review() {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem sx={{ py: 1, px: 0 }} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1">$34.06</Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid container direction="column" size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <Fragment key={payment.name}>
                <Grid size={6}>
                  <Typography>{payment.name}</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography>{payment.detail}</Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
