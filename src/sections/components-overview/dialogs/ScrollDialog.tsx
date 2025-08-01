import { useEffect, useRef, useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

// project-imports
import IconButton from 'components/@extended/IconButton';

// assets
import { Add } from 'iconsax-reactjs';

// ==============================|| DIALOG - SCROLLING ||============================== //

export default function ScrollDialog() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen('paper')} sx={{ mr: 1, ml: 1, mb: 1, mt: 1 }}>
        scroll=paper
      </Button>
      <Button variant="outlined" onClick={handleClickOpen('body')} sx={{ mr: 1, ml: 1, mb: 1, mt: 1 }}>
        scroll=body
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid>
            <DialogTitle>Subscribe</DialogTitle>
          </Grid>
          <Grid sx={{ mr: 1.5 }}>
            <IconButton color="secondary" onClick={handleClose}>
              <Add style={{ transform: 'rotate(45deg)' }} />
            </IconButton>
          </Grid>
        </Grid>
        <DialogContent dividers>
          <Grid container spacing={1.25}>
            {[...new Array(25)].map((i, index) => (
              <Grid key={`${index}-${scroll}`}>
                <Typography variant="h6">
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac in, egestas eget quam. Morbi leo risus,
                  porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </Typography>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose} sx={{ mr: 1 }}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
