import { useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// third-party
import { PatternFormat } from 'react-number-format';

// project-imports
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

// ==============================|| PLUGIN - MASK INPUT ||============================== //

export default function MaskPage() {
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(null);

  const [time, setTime] = useState<Date | null>(new Date());
  const [datetime, setDatetime] = useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={GRID_COMMON_SPACING}>
        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard title="Date">
            <Grid container spacing={3} sx={{ alignItems: 'center' }}>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Insert Date 1</InputLabel>
                  <DatePicker
                    value={date1}
                    onChange={(newValue) => setDate1(newValue as Date | null)}
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </Stack>
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Insert Date 2</InputLabel>
                  <DatePicker
                    value={date2}
                    onChange={(newValue) => setDate2(newValue as Date | null)}
                    slotProps={{ textField: { fullWidth: true } }}
                    format="DD-MM-YYYY"
                  />
                </Stack>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard title="Time">
            <Grid container spacing={3} sx={{ alignItems: 'center' }}>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Enter Time 1</InputLabel>
                  <TimePicker
                    ampm={false}
                    openTo="hours"
                    views={['hours', 'minutes', 'seconds']}
                    format="HH:mm:ss"
                    value={time}
                    onChange={(newValue) => {
                      setTime(newValue as Date | null);
                    }}
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </Stack>
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Enter Time 2</InputLabel>
                  <MobileDateTimePicker
                    value={datetime}
                    onChange={(newValue) => {
                      setDatetime(newValue as Date | null);
                    }}
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard title="Phone no.">
            <Grid container spacing={3} sx={{ alignItems: 'center' }}>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Phone Number</InputLabel>
                  <PatternFormat format="+1 (###) ###-####" mask="_" fullWidth customInput={TextField} placeholder="Phone Number" />
                </Stack>
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Contact Number</InputLabel>
                  <PatternFormat format="+91 #### ###-####" mask="_" fullWidth customInput={TextField} placeholder="Contact Number" />
                </Stack>
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Telephone with Area Code</InputLabel>
                  <PatternFormat format="(##) ####-#####" mask="_" fullWidth customInput={TextField} placeholder="Tel. with Code Area" />
                </Stack>
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>US Telephone</InputLabel>
                  <PatternFormat format="(###) ### #####" mask="_" fullWidth customInput={TextField} placeholder="US Telephone" />
                </Stack>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard title="Network">
            <Grid container spacing={3} sx={{ alignItems: 'center' }}>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Enter IP Address</InputLabel>
                  <PatternFormat format="###.###.###.###" mask="_" fullWidth customInput={TextField} placeholder="IP Address" />
                </Stack>
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Enter IPV4</InputLabel>
                  <PatternFormat format="####.####.####.####" mask="_" fullWidth customInput={TextField} placeholder="IPV4" />
                </Stack>
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Enter IPV6</InputLabel>
                  <PatternFormat
                    format="####:####:####:#:###:####:####:####"
                    mask="_"
                    fullWidth
                    customInput={TextField}
                    placeholder="IPV6"
                  />
                </Stack>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
