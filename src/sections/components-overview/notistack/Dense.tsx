import { useState, ChangeEvent } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

// third-party
import { enqueueSnackbar } from 'notistack';

// project-imports
import { handlerDense } from 'api/snackbar';
import MainCard from 'components/MainCard';

// ==============================|| NOTISTACK - DENSE ||============================== //

export default function Dense() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    handlerDense(event.target.checked);
  };

  const NotistackDenseCodeString = `<Checkbox checked={checked} onChange={handleChange} slotProps={{ input: { 'aria-label': 'controlled' } }} />
Dense margins
<Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => enqueueSnackbar('Your notification here')}>
  Show snackbar
</Button>`;

  return (
    <MainCard title="Dense" codeString={NotistackDenseCodeString}>
      <Checkbox checked={checked} onChange={handleChange} slotProps={{ input: { 'aria-label': 'controlled' } }} />
      Dense margins
      <Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => enqueueSnackbar('Your notification here')}>
        Show snackbar
      </Button>
    </MainCard>
  );
}
