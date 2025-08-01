import { ChangeEvent } from 'react';

// material-ui
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import { ThemeMode } from 'config';
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';

// types
import { PresetColor } from 'types/config';

// assets
import { TickSquare } from 'iconsax-reactjs';

interface ColorProps {
  id: PresetColor;
  primary: string;
  darker: string;
}

// ==============================|| CUSTOMIZATION - COLOR SCHEME ||============================== //

export default function ColorScheme() {
  const { mode, presetColor, onChangePresetColor } = useConfig();

  const colorOptions: ColorProps[] = [
    {
      id: 'default',
      primary: '#4680FF',
      darker: '#2F63FF'
    },
    {
      id: 'theme1',
      primary: mode === ThemeMode.DARK ? '#305bdd' : '#3366FF',
      darker: mode === ThemeMode.DARK ? '#a9c5f8' : '#102693'
    },
    {
      id: 'theme2',
      primary: mode === ThemeMode.DARK ? '#655ac8' : '#7265E6',
      darker: mode === ThemeMode.DARK ? '#c3baf4' : '#5549DB'
    },
    {
      id: 'theme3',
      primary: mode === ThemeMode.DARK ? '#0a7d3e' : '#068e44',
      darker: mode === ThemeMode.DARK ? '#173123' : '#001c0f'
    },
    {
      id: 'theme4',
      primary: mode === ThemeMode.DARK ? '#5d7dcb' : '#3c64d0',
      darker: mode === ThemeMode.DARK ? '#212841' : '#0d1b5e'
    },
    {
      id: 'theme5',
      primary: mode === ThemeMode.DARK ? '#d26415' : '#f27013',
      darker: mode === ThemeMode.DARK ? '#f8c48c' : '#802800'
    },
    {
      id: 'theme6',
      primary: mode === ThemeMode.DARK ? '#288d99' : '#2aa1af',
      darker: mode === ThemeMode.DARK ? '#96d0d0' : '#06323d'
    },
    {
      id: 'theme7',
      primary: mode === ThemeMode.DARK ? '#05934c' : '#00a854',
      darker: mode === ThemeMode.DARK ? '#61ca8b' : '#003620'
    },
    {
      id: 'theme8',
      primary: mode === ThemeMode.DARK ? '#058478' : '#009688',
      darker: mode === ThemeMode.DARK ? '#59b8a5' : '#002424'
    }
  ];

  const handlePresetColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangePresetColor(event.target.value as PresetColor);
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={presetColor} onChange={handlePresetColorChange}>
      <Stack direction="row" sx={{ gap: 0.5, alignItems: 'center', width: 1 }}>
        {colorOptions.map((color, index) => (
          <FormControlLabel
            key={index}
            control={<Radio value={color.id} sx={{ display: 'none' }} />}
            sx={{ m: 0, width: presetColor === color.id ? '100%' : 'auto', display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{
                  bgcolor: color.primary,
                  p: 1,
                  borderRadius: 0.5,
                  borderWidth: 4,
                  borderColor: presetColor === color.id ? color.darker : color.primary,
                  '&:hover': { borderColor: color.darker }
                }}
              >
                <Stack
                  direction="row"
                  sx={{ alignItems: 'center', justifyContent: 'center', width: presetColor === color.id ? '100%' : 1, height: 44 }}
                >
                  {presetColor === color.id && (
                    <Stack
                      sx={(theme) => ({
                        alignItems: 'center',
                        color: 'background.paper',
                        ...theme.applyStyles('dark', { color: 'text.primary' })
                      })}
                    >
                      <TickSquare variant="Bulk" />
                      <Typography variant="caption">{color.id}</Typography>
                    </Stack>
                  )}
                </Stack>
              </MainCard>
            }
          />
        ))}
      </Stack>
    </RadioGroup>
  );
}
