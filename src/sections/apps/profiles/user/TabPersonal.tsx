import { RefObject } from 'react';
import { useOutletContext } from 'react-router';

// material-ui
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third-party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project-imports
import { openSnackbar } from 'api/snackbar';
import MainCard from 'components/MainCard';
import countries from 'data/countries';

// types
import { SnackbarProps } from 'types/snackbar';

// assets
import { Add } from 'iconsax-reactjs';

// styles & constant
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP } } };

const skills = [
  'Adobe XD',
  'After Effect',
  'Angular',
  'Animation',
  'ASP.Net',
  'Bootstrap',
  'C#',
  'CC',
  'Corel Draw',
  'CSS',
  'DIV',
  'Dreamweaver',
  'Figma',
  'Graphics',
  'HTML',
  'Illustrator',
  'J2Ee',
  'Java',
  'Javascript',
  'JQuery',
  'Logo Design',
  'Material UI',
  'Motion',
  'MVC',
  'MySQL',
  'NodeJS',
  'npm',
  'Photoshop',
  'PHP',
  'React',
  'Redux',
  'Reduxjs & tooltit',
  'SASS',
  'SCSS',
  'SQL Server',
  'SVG',
  'UI/UX',
  'User Interface Designing',
  'Wordpress'
];

function useInputRef() {
  return useOutletContext<RefObject<HTMLInputElement>>();
}

// ==============================|| USER PROFILE - PERSONAL ||============================== //

export default function TabPersonal() {
  const handleChangeDay = (event: SelectChangeEvent<string>, date: Date, setFieldValue: (field: string, value: any) => void) => {
    setFieldValue('dob', new Date(date.setDate(parseInt(event.target.value, 10))));
  };

  const handleChangeMonth = (event: SelectChangeEvent<string>, date: Date, setFieldValue: (field: string, value: any) => void) => {
    setFieldValue('dob', new Date(date.setMonth(parseInt(event.target.value, 10))));
  };

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  const inputRef = useInputRef();

  return (
    <MainCard content={false} title="Personal Information" sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
      <Formik
        initialValues={{
          firstname: 'Stebin',
          lastname: 'Ben',
          email: 'stebin.ben@gmail.com',
          dob: new Date('03-10-1993'),
          countryCode: '+91',
          contact: 9652364852,
          designation: 'Full Stack Developer',
          address: '3801 Chalk Butte Rd, Cut Bank, MT 59427, United States',
          address1: '301 Chalk Butte Rd, Cut Bank, NY 96572, New York',
          country: 'US',
          state: 'California',
          skill: [
            'Adobe XD',
            'Angular',
            'Corel Draw',
            'Figma',
            'HTML',
            'Illustrator',
            'Javascript',
            'Logo Design',
            'Material UI',
            'NodeJS',
            'npm',
            'Photoshop',
            'React',
            'Reduxjs & tooltit',
            'SASS'
          ],
          note: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('First Name is required.'),
          lastname: Yup.string().max(255).required('Last Name is required.'),
          email: Yup.string().email('Invalid email address.').max(255).required('Email is required.'),
          dob: Yup.date().max(maxDate, 'Age should be 18+ years.').required('Date of birth is requird.'),
          contact: Yup.number()
            .test('len', 'Contact should be exactly 10 digit', (val) => val?.toString().length === 10)
            .required('Phone number is required'),
          designation: Yup.string().required('Designation is required'),
          address: Yup.string().min(50, 'Address to short.').required('Address is required'),
          country: Yup.string().required('Country is required'),
          state: Yup.string().required('State is required'),
          note: Yup.string().min(150, 'Not shoulde be more then 150 char.')
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            openSnackbar({
              open: true,
              message: 'Personal profile updated successfully.',
              variant: 'alert',
              alert: { color: 'success' }
            } as SnackbarProps);
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err: any) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, setFieldValue, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Box sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-first-name">First Name</InputLabel>
                    <TextField
                      fullWidth
                      id="personal-first-name"
                      value={values.firstname}
                      name="firstname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="First Name"
                      autoFocus
                      inputRef={inputRef}
                    />
                  </Stack>
                  {touched.firstname && errors.firstname && (
                    <FormHelperText error id="personal-first-name-helper">
                      {errors.firstname}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-last-name">Last Name</InputLabel>
                    <TextField
                      fullWidth
                      id="personal-last-name"
                      value={values.lastname}
                      name="lastname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Last Name"
                    />
                  </Stack>
                  {touched.lastname && errors.lastname && (
                    <FormHelperText error id="personal-last-name-helper">
                      {errors.lastname}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-email">Email Address</InputLabel>
                    <TextField
                      type="email"
                      fullWidth
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="personal-email"
                      placeholder="Email Address"
                    />
                  </Stack>
                  {touched.email && errors.email && (
                    <FormHelperText error id="personal-email-helper">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="dob-month">Date of Birth (+18)</InputLabel>
                    <Stack direction="row" sx={{ gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>
                      <Select
                        fullWidth
                        value={values.dob.getMonth().toString()}
                        name="dob-month"
                        onChange={(e: SelectChangeEvent<string>) => handleChangeMonth(e, values.dob, setFieldValue)}
                      >
                        <MenuItem value="0">January</MenuItem>
                        <MenuItem value="1">February</MenuItem>
                        <MenuItem value="2">March</MenuItem>
                        <MenuItem value="3">April</MenuItem>
                        <MenuItem value="4">May</MenuItem>
                        <MenuItem value="5">June</MenuItem>
                        <MenuItem value="6">July</MenuItem>
                        <MenuItem value="7">August</MenuItem>
                        <MenuItem value="8">September</MenuItem>
                        <MenuItem value="9">October</MenuItem>
                        <MenuItem value="10">November</MenuItem>
                        <MenuItem value="11">December</MenuItem>
                      </Select>
                      <Select
                        fullWidth
                        value={values.dob.getDate().toString()}
                        name="dob-date"
                        onBlur={handleBlur}
                        onChange={(e: SelectChangeEvent<string>) => handleChangeDay(e, values.dob, setFieldValue)}
                        MenuProps={MenuProps}
                      >
                        {[
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
                        ].map((i) => (
                          <MenuItem
                            key={i}
                            value={i}
                            disabled={
                              (values.dob.getMonth() === 1 && i > (values.dob.getFullYear() % 4 === 0 ? 29 : 28)) ||
                              (values.dob.getMonth() % 2 !== 0 && values.dob.getMonth() < 7 && i > 30) ||
                              (values.dob.getMonth() % 2 === 0 && values.dob.getMonth() > 7 && i > 30)
                            }
                          >
                            {i}
                          </MenuItem>
                        ))}
                      </Select>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          views={['year']}
                          value={values.dob}
                          maxDate={maxDate}
                          onChange={(newValue) => {
                            setFieldValue('dob', newValue);
                          }}
                          sx={{ width: 1 }}
                        />
                      </LocalizationProvider>
                    </Stack>
                  </Stack>
                  {touched.dob && errors.dob && (
                    <FormHelperText error id="personal-dob-helper">
                      {errors.dob as String}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-phone">Phone Number</InputLabel>
                    <Stack direction="row" sx={{ gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>
                      <Select value={values.countryCode} name="countryCode" onBlur={handleBlur} onChange={handleChange}>
                        <MenuItem value="+91">+91</MenuItem>
                        <MenuItem value="1-671">1-671</MenuItem>
                        <MenuItem value="+36">+36</MenuItem>
                        <MenuItem value="(225)">(255)</MenuItem>
                        <MenuItem value="+39">+39</MenuItem>
                        <MenuItem value="1-876">1-876</MenuItem>
                        <MenuItem value="+7">+7</MenuItem>
                        <MenuItem value="(254)">(254)</MenuItem>
                        <MenuItem value="(373)">(373)</MenuItem>
                        <MenuItem value="1-664">1-664</MenuItem>
                        <MenuItem value="+95">+95</MenuItem>
                        <MenuItem value="(264)">(264)</MenuItem>
                      </Select>
                      <TextField
                        fullWidth
                        id="personal-contact"
                        value={values.contact}
                        name="contact"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Contact Number"
                      />
                    </Stack>
                  </Stack>
                  {touched.contact && errors.contact && (
                    <FormHelperText error id="personal-contact-helper">
                      {errors.contact}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-designation">Designation</InputLabel>
                    <TextField
                      fullWidth
                      id="personal-designation"
                      value={values.designation}
                      name="designation"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Designation"
                    />
                  </Stack>
                  {touched.designation && errors.designation && (
                    <FormHelperText error id="personal-designation-helper">
                      {errors.designation}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Box>
            <CardHeader title="Address" />
            <Divider />
            <Box sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-addrees1">Address 01</InputLabel>
                    <TextField
                      multiline
                      rows={3}
                      fullWidth
                      id="personal-addrees1"
                      value={values.address}
                      name="address"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Address 01"
                    />
                  </Stack>
                  {touched.address && errors.address && (
                    <FormHelperText error id="personal-address-helper">
                      {errors.address}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-addrees2">Address 02</InputLabel>
                    <TextField
                      multiline
                      rows={3}
                      fullWidth
                      id="personal-addrees2"
                      value={values.address1}
                      name="address1"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Address 02"
                    />
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-country">Country</InputLabel>
                    <Autocomplete
                      id="personal-country"
                      fullWidth
                      value={countries.filter((item) => item.code === values?.country)[0]}
                      onBlur={handleBlur}
                      onChange={(event, newValue) => {
                        setFieldValue('country', newValue === null ? '' : newValue.code);
                      }}
                      options={countries}
                      autoHighlight
                      isOptionEqualToValue={(option, value) => option.code === value?.code}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          {option.code && (
                            <CardMedia
                              component="img"
                              loading="lazy"
                              sx={{ width: 20 }}
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              alt="country"
                            />
                          )}
                          {option.label}
                          {option.code && `(${option.code}) ${option.phone}`}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Choose a country"
                          name="country"
                          slotProps={{
                            htmlInput: {
                              ...params.inputProps,
                              autoComplete: 'new-password' // disable autocomplete and autofill
                            }
                          }}
                        />
                      )}
                    />
                  </Stack>
                  {touched.country && errors.country && (
                    <FormHelperText error id="personal-country-helper">
                      {errors.country}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="personal-state">State</InputLabel>
                    <TextField
                      fullWidth
                      id="personal-state"
                      value={values.state}
                      name="state"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="State"
                    />
                  </Stack>
                  {touched.state && errors.state && (
                    <FormHelperText error id="personal-state-helper">
                      {errors.state}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Box>
            <CardHeader title="Skills" />
            <Divider />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', p: 2.5, m: 0 }} component="ul">
              <Autocomplete
                multiple
                fullWidth
                id="tags-outlined"
                options={skills}
                value={values.skill}
                onBlur={handleBlur}
                getOptionLabel={(label) => label}
                onChange={(event, newValue) => {
                  setFieldValue('skill', newValue);
                }}
                renderInput={(params) => <TextField {...params} name="skill" placeholder="Add Skills" />}
                renderValue={(value, getItemProps) =>
                  value.map((option, index) => (
                    <Chip
                      {...getItemProps({ index })}
                      key={index}
                      variant="combined"
                      label={option}
                      deleteIcon={<Add style={{ fontSize: '0.75rem', transform: 'rotate(45deg)' }} />}
                      sx={{ color: 'text.primary' }}
                    />
                  ))
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    p: 0,
                    '& .MuiAutocomplete-tag': { m: 1 },
                    '& fieldset': { display: 'none' },
                    '& .MuiAutocomplete-endAdornment': { display: 'none' },
                    '& .MuiAutocomplete-popupIndicator': { display: 'none' }
                  }
                }}
              />
            </Box>
            <CardHeader title="Note" />
            <Divider />
            <Box sx={{ p: 2.5 }}>
              <TextField
                multiline
                rows={5}
                fullWidth
                value={values.note}
                name="note"
                onBlur={handleBlur}
                onChange={handleChange}
                id="personal-note"
                placeholder="Note"
              />
              {touched.note && errors.note && (
                <FormHelperText error id="personal-note-helper">
                  {errors.note}
                </FormHelperText>
              )}
              <Stack direction="row" sx={{ gap: 2, justifyContent: 'flex-end', alignItems: 'center', mt: 2.5 }}>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
                <Button disabled={isSubmitting || Object.keys(errors).length !== 0} type="submit" variant="contained">
                  Save
                </Button>
              </Stack>
            </Box>
          </form>
        )}
      </Formik>
    </MainCard>
  );
}
