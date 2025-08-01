// material-ui
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

// project-imports
import MainCard from 'components/MainCard';
import countries from 'data/countries';
import trimFc from 'utils/trimFc';

// assets
import GoogleMaps from './GoogleMap';

// validation schema
const validationSchema = yup.object({
  country: yup.string().required('Country is required').nullable(),
  county: yup.string().required('Region required'),
  city: yup.string().required('City required'),
  address1: yup.string().required('Address1 is required'),
  postCode: yup.string().required('Post Code is required')
});

// ==============================|| FORMS VALIDATION - ADDRESS ||============================== //

export default function GoogleMapAutocomplete() {
  const formik = useFormik({
    initialValues: {
      address1: '',
      address2: '',
      city: '',
      county: '',
      country: '',
      postCode: ''
    },
    validationSchema,
    onSubmit: async () => {
      // submit location
    }
  });

  return (
    <MainCard title="Google Map Autocomplete (Address)">
      <form onSubmit={formik.handleSubmit} id="google-map-forms">
        <Grid container spacing={3.5}>
          <Grid size={12}>
            <GoogleMaps formik={formik} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack sx={{ gap: 1 }}>
              <InputLabel>Country</InputLabel>
              <Autocomplete
                id="country"
                value={formik.values.country}
                onChange={(event: any, newValue: string | null) => {
                  formik.setFieldValue('country', newValue);
                }}
                options={countries.map((item) => item.label)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Country"
                    sx={{ '& .MuiAutocomplete-input.Mui-disabled': { WebkitTextFillColor: 'text.primary' } }}
                  />
                )}
              />
            </Stack>
            {formik.touched.country && formik.errors.country && (
              <FormHelperText error id="helper-text-country">
                {formik.errors.country}
              </FormHelperText>
            )}
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack sx={{ gap: 1 }}>
              <InputLabel>Post Code</InputLabel>
              <TextField
                id="postCode"
                name="postCode"
                placeholder="Post Code"
                value={formik.values.postCode}
                onChange={trimFc(formik)}
                onBlur={formik.handleBlur}
                error={formik.touched.postCode && Boolean(formik.errors.postCode)}
                helperText={formik.touched.postCode && formik.errors.postCode}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack sx={{ gap: 1 }}>
              <InputLabel>City</InputLabel>
              <TextField
                id="city"
                name="city"
                placeholder="Enter City"
                value={formik.values.city}
                onChange={trimFc(formik)}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack sx={{ gap: 1 }}>
              <InputLabel>Region</InputLabel>
              <TextField
                id="county"
                name="county"
                placeholder="Enter Region/County"
                value={formik.values.county}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.county && Boolean(formik.errors.county)}
                helperText={formik.touched.county && formik.errors.county}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack sx={{ gap: 1 }}>
              <InputLabel>1st Line</InputLabel>
              <TextField
                id="address1"
                name="address1"
                placeholder="1st Line"
                value={formik.values.address1}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address1 && Boolean(formik.errors.address1)}
                helperText={formik.touched.address1 && formik.errors.address1}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack sx={{ gap: 1 }}>
              <InputLabel>2nd Line (Optional)</InputLabel>
              <TextField
                id="address2"
                name="address2"
                placeholder="2nd Line"
                value={formik.values.address2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={12}>
            <Stack direction="row" sx={{ gap: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
              <Button variant="outlined" color="secondary" type="reset" onClick={() => formik.resetForm()}>
                Undo Changes
              </Button>
              <Button variant="contained" type="submit" disabled={formik.isSubmitting}>
                Update
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
}
