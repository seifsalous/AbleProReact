// material-ui
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// ==============================|| BASIC WIZARD - ADDRESS  ||============================== //

export default function AddressForm() {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 1 }}>
            <InputLabel>First Name</InputLabel>
            <TextField required id="firstNameBasic" name="firstName" placeholder="First Name" fullWidth autoComplete="given-name" />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 1 }}>
            <InputLabel>Last Name</InputLabel>
            <TextField required id="lastNameBasic" name="lastName" placeholder="Last name" fullWidth autoComplete="family-name" />
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack sx={{ gap: 1 }}>
            <InputLabel>Address 1</InputLabel>
            <TextField
              required
              id="address1Basic"
              name="address1"
              placeholder="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack sx={{ gap: 1 }}>
            <InputLabel>Address 2</InputLabel>
            <TextField id="address2Basic" name="address2" placeholder="Address line 2" fullWidth autoComplete="shipping address-line2" />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 1 }}>
            <InputLabel>Enter City</InputLabel>
            <TextField required id="cityBasic" name="city" placeholder="City" fullWidth autoComplete="shipping address-level2" />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 1 }}>
            <InputLabel>Enter State</InputLabel>
            <TextField id="stateBasic" name="state" placeholder="State/Province/Region" fullWidth />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 1 }}>
            <InputLabel>Zip Code</InputLabel>
            <TextField required id="zipBasic" name="zip" placeholder="Zip / Postal code" fullWidth autoComplete="shipping postal-code" />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 1 }}>
            <InputLabel>Enter Country</InputLabel>
            <TextField required id="countryBasic" name="country" placeholder="Country" fullWidth autoComplete="shipping country" />
          </Stack>
        </Grid>
        <Grid size={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </>
  );
}
