import { useState, ChangeEvent, MouseEvent } from 'react';

// material-ui
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// project-imports
import IconButton from 'components/@extended/IconButton';
import ComponentHeader from 'components/cards/ComponentHeader';
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// assets
import { Eye, EyeSlash, Sms } from 'iconsax-reactjs';

interface State {
  password: string;
  showPassword: boolean;
}

// ==============================|| COMPONENTS - TEXT FEILD ||============================== //

export default function ComponentTextField() {
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  });

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const basicTextfeildCodeString = `<TextField id="outlined-basic" label="Outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />`;

  const propsTextfeildCodeString = `<TextField required id="outlined-required" placeholder="Required *" defaultValue="Hello World" />
<TextField id="helper-text-basic" placeholder="Helper text" helperText="Helper text" />
<TextField id="outlined-number-" label="Number" type="number" />
<TextField
  id="outlined-number-read-only"
  defaultValue="Read Only"
  slotProps={{ input: { readOnly: true } }}
/>
<OutlinedInput
  id="outlined-adornment-password"
  type={values.showPassword ? 'text' : 'password'}
  value={values.password}
  onChange={handleChange('password')}
  endAdornment={
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
        color="secondary"
      >
        {values.showPassword ? <Eye /> : <EyeSlash />}
      </IconButton>
    </InputAdornment>
  }
/>
<FormControl variant="standard">
  <Stack sx={{ gap: 3}}>
    <InputLabel shrink htmlFor="with-label-input">
      With Label
    </InputLabel>
    <TextField id="with-label-input" placeholder="With Label" />
  </Stack>
</FormControl>
<TextField id="disabled-basic" label="Disabled" disabled />
<TextField id="filled-search" placeholder="Search" type="search" />`;

  const iconTextfeildCodeString = `<OutlinedInput id="start-adornment-email" placeholder="Email / UserId" startAdornment={<Sms />} />
<OutlinedInput
  id="end-adornment-password"
  type="password"
  placeholder="Password"
  endAdornment={
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" edge="end" color="secondary">
        <EyeSlash />
      </IconButton>
    </InputAdornment>
  }
/>`;

  const sizeTextfeildCodeString = `<TextField id="outlined-basic-small" label="Small" size="small" />
<TextField id="outlined-basic-default" label="Medium" />
<TextField
  id="outlined-basic-custom"
  label="Custom"
  sx={{
    '& .MuiInputLabel-root': { fontSize: '1rem' },
    '& .MuiOutlinedInput-root': { fontSize: '1rem' }
  }}
/>`;

  const eventTextfeildCodeString = `<TextField id="outlined-basic-auto" label="Auto Focus" autoFocus />`;

  const validationTextfeildCodeString = `<TextField error id="outlined-error" label="Error" defaultValue="Hello World" />
<TextField
  error
  id="outlined-error-helper-text"
  label="Error"
  defaultValue="Hello World"
  helperText="Incorrect entry."
/>`;

  const multilineTextfeildCodeString = `<TextField
  id="outlined-multiline-static"
  fullWidth
  label="Multiline"
  multiline
  rows={5}
  defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
/>`;

  const adornmentTextfeildCodeString = `<TextField
  placeholder="Website URL"
  id="url-start-adornment"
  slotProps={{ input: { startAdornment: 'https://' } }}
/>
<TextField
  placeholder="Website URL"
  id="outlined-end-adornment"
  slotProps={{ input: { endAdornment: '.com' } }}
/>
<OutlinedInput
  id="text-adornment-password"
  type="password"
  placeholder="Password"
  endAdornment={
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" edge="end" color="secondary">
        <EyeSlash />
      </IconButton>
    </InputAdornment>
  }
/>
<TextField
  placeholder="0.00"
  id="outlined-start-adornment"
  slotProps={{ input: { startAdornment: '$' } }}
/>`;

  const widthTextfeildCodeString = `<TextField fullWidth id="outlined-basic-fullwidth" label="Fullwidth" />`;

  return (
    <ComponentSkeleton>
      <ComponentHeader
        title="Text Field"
        caption="Text fields let users enter and edit text."
        directory="src/pages/components-overview/textfield"
        link="https://mui.com/material-ui/react-text-field/"
      />
      <ComponentWrapper>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack sx={{ gap: GRID_COMMON_SPACING }}>
              <MainCard title="Basic" codeHighlight codeString={basicTextfeildCodeString}>
                <Stack sx={{ gap: 2 }}>
                  <TextField id="outlined-basic" placeholder="Outlined" />
                  <TextField id="filled-basic" label="Filled" variant="filled" />
                  <TextField id="standard-basic" label="Standard" variant="standard" />
                </Stack>
              </MainCard>
              <MainCard title="Form Props" codeString={propsTextfeildCodeString}>
                <form id="form-props">
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 2 }}>
                        <TextField required id="outlined-required" placeholder="Required *" defaultValue="Hello World" />
                        <TextField id="helper-text-basic" placeholder="Helper text" helperText="Helper text" />
                        <TextField id="outlined-number" placeholder="Number" type="number" />
                        <TextField id="outlined-number-readonly" defaultValue="Read Only" slotProps={{ input: { readOnly: true } }} />
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 2 }}>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={values.showPassword ? 'text' : 'password'}
                          value={values.password}
                          onChange={handleChange('password')}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                color="secondary"
                              >
                                {values.showPassword ? <Eye /> : <EyeSlash />}
                              </IconButton>
                            </InputAdornment>
                          }
                          autoComplete="outlined-adornment-password"
                        />
                        <Stack>
                          <InputLabel shrink htmlFor="with-label-input">
                            With Label
                          </InputLabel>
                          <FormControl variant="standard">
                            <TextField id="with-label-input" placeholder="With Label" />
                          </FormControl>
                        </Stack>
                        <TextField id="disabled-basic" placeholder="Disabled" disabled />
                        <TextField id="filled-search" placeholder="Search" type="search" />
                      </Stack>
                    </Grid>
                  </Grid>
                </form>
              </MainCard>
              <MainCard title="With Icon" codeString={iconTextfeildCodeString}>
                <form id="with-icon">
                  <Stack sx={{ gap: 2 }}>
                    <OutlinedInput id="start-adornment-email" placeholder="Email / UserId" startAdornment={<Sms />} />
                    <OutlinedInput
                      id="end-adornment-password"
                      type="password"
                      placeholder="Password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility" edge="end" color="secondary">
                            <EyeSlash />
                          </IconButton>
                        </InputAdornment>
                      }
                      autoComplete="end-adornment-password"
                    />
                  </Stack>
                </form>
              </MainCard>
              <MainCard title="Sizes" codeString={sizeTextfeildCodeString}>
                <Stack sx={{ gap: 2 }}>
                  <TextField id="outlined-basic-small" placeholder="Small" size="small" />
                  <TextField id="outlined-basic-default" placeholder="Medium" />
                  <TextField
                    id="outlined-basic-custom"
                    placeholder="Custom"
                    sx={{
                      '& .MuiInputLabel-root': { fontSize: '1rem' },
                      '& .MuiOutlinedInput-root': { fontSize: '1rem' }
                    }}
                  />
                </Stack>
              </MainCard>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack sx={{ gap: GRID_COMMON_SPACING }}>
              <MainCard title="Event" codeString={eventTextfeildCodeString}>
                <TextField id="outlined-basic-auto" placeholder="Auto Focus" autoFocus />
              </MainCard>
              <MainCard title="Validation" codeString={validationTextfeildCodeString}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField error id="outlined-error" placeholder="Error" defaultValue="Hello World" />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      error
                      id="outlined-error-helper-text"
                      placeholder="Error"
                      defaultValue="Hello World"
                      helperText="Incorrect entry."
                    />
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Multiline" codeString={multilineTextfeildCodeString}>
                <TextField
                  id="outlined-multiline-static"
                  fullWidth
                  placeholder="Multiline"
                  multiline
                  rows={5}
                  defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
                />
              </MainCard>
              <MainCard title="Input Adornments" codeString={adornmentTextfeildCodeString}>
                <form id="input-adornments">
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 2 }}>
                        <TextField
                          placeholder="Website URL"
                          id="url-start-adornment"
                          slotProps={{ input: { startAdornment: 'https://' } }}
                        />
                        <TextField placeholder="Website URL" id="outlined-end-adornment" slotProps={{ input: { endAdornment: '.com' } }} />
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 2 }}>
                        <OutlinedInput
                          id="text-adornment-password"
                          type="password"
                          placeholder="Password"
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton aria-label="toggle password visibility" edge="end" color="secondary">
                                <EyeSlash />
                              </IconButton>
                            </InputAdornment>
                          }
                          autoComplete="text-adornment-password"
                        />
                        <TextField placeholder="0.00" id="outlined-start-adornment" slotProps={{ input: { startAdornment: '$' } }} />
                      </Stack>
                    </Grid>
                  </Grid>
                </form>
              </MainCard>
              <MainCard title="Full Width" codeString={widthTextfeildCodeString}>
                <TextField fullWidth id="outlined-basic-fullwidth" placeholder="Fullwidth" />
              </MainCard>
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}
