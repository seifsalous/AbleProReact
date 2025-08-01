// material-ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';
import {
  ColorVariants,
  CustomComponent,
  Dense,
  DismissSnackBar,
  HideDuration,
  IconVariants,
  MaxSnackbar,
  PositioningSnackbar,
  PreventDuplicate,
  SnackBarAction,
  TransitionBar
} from 'sections/components-overview/notistack';

import { openSnackbar } from 'api/snackbar';

// types
import { SnackbarProps } from 'types/snackbar';

// ==============================|| COMPONENTS - SNACKBAR ||============================== //

export default function ComponentSnackbar() {
  const basicSnackbarCodeString = `<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a default message',
      variant: 'alert',
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
    } as SnackbarProps);
  }
>
  Error
</Button>`;

  const outlinedSnackbarCodeString = `<Button
  variant="outlined"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a default message',
      variant: 'alert',
      alert: {
        variant: 'outlined'
      },
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="outlined"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a secondary message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'secondary'
      },
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="outlined"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a success message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'success'
      },
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="outlined"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a warning message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'warning'
      },
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="outlined"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a info message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'info'
      },
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="outlined"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a error message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'error'
      },
    } as SnackbarProps);
  }
>
  Error
</Button>`;

  const closeSnackbarCodeString = `<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a default message',
      variant: 'alert',
      close: true
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
      close: true
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
      close: true
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
      close: true
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
      close: true
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
      close: true
    } as SnackbarProps);
  }
>
  Error
</Button>`;

  const actionSnackbarCodeString = `<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a default message',
      variant: 'alert',
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Error
</Button>`;

  const positionSnackbarCodeString = `<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'left' },
      message: 'This is a Top-Left message!',
      close: true
    } as SnackbarProps);
  }
>
  Top-Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'center' },
      message: 'This is a Top-Center message!',
      close: true
    } as SnackbarProps);
  }
>
  Top-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
      message: 'This is a Top-Right message!',
      close: true
    } as SnackbarProps);
  }
>
  Top-Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      message: 'This is a Bottom-Right message!',
      close: true
    } as SnackbarProps);
  }
>
  Bottom-Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      message: 'This is a Bottom-Center message!',
      close: true
    } as SnackbarProps);
  }
>
  Bottom-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
      message: 'This is a Bottom-Left message!',
      close: true
    } as SnackbarProps);
  }
>
  Bottom-Left
</Button>`;

  const transitionsSnackbarCodeString = `<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a Fade message!',
      transition: 'Fade',
      close: true
    } as SnackbarProps);
  }
>
  Default/Fade
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a Slide-Left message!',
      transition: 'SlideLeft',
      close: true
    } as SnackbarProps);
  }
>
  Slide Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a Slide-Up message!',
      transition: 'SlideUp',
      close: true
    } as SnackbarProps);
  }
>
  Slide Up
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a Slide-Right message!',
      transition: 'SlideRight',
      close: true
    } as SnackbarProps);
  }
>
  Slide Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a Slide-Down message!',
      transition: 'SlideDown',
      close: true
    } as SnackbarProps);
  }
>
  Slide Down
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is a Grow message!',
      transition: 'Grow',
      close: true
    } as SnackbarProps);
  }
>
  Grow
</Button>`;

  return (
    <ComponentSkeleton>
      <ComponentHeader
        title="Snackbar"
        caption="Snackbars provide brief notifications. The component is also known as a toast."
        directory="src/pages/components-overview/snackbar"
        link="https://mui.com/material-ui/react-snackbar/"
      />
      <ComponentWrapper>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Basic" codeString={basicSnackbarCodeString}>
              <Grid container spacing={2}>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a default message',
                        variant: 'alert'
                      } as SnackbarProps)
                    }
                  >
                    Default
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a secondary message',
                        variant: 'alert',
                        alert: { color: 'secondary' }
                      } as SnackbarProps)
                    }
                  >
                    Secondary
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a success message',
                        variant: 'alert',
                        alert: {
                          color: 'success'
                        }
                      } as SnackbarProps)
                    }
                  >
                    Success
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a warning message',
                        variant: 'alert',
                        alert: {
                          color: 'warning'
                        }
                      } as SnackbarProps)
                    }
                  >
                    Warning
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="info"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a info message',
                        variant: 'alert',
                        alert: {
                          color: 'info'
                        }
                      } as SnackbarProps)
                    }
                  >
                    Info
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a error message',
                        variant: 'alert',
                        alert: {
                          color: 'error'
                        }
                      } as SnackbarProps)
                    }
                  >
                    Error
                  </Button>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Outlined" codeString={outlinedSnackbarCodeString}>
              <Grid container spacing={2}>
                <Grid>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a default message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined'
                        }
                      } as SnackbarProps)
                    }
                  >
                    Default
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a secondary message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined',
                          color: 'secondary'
                        }
                      } as SnackbarProps)
                    }
                  >
                    Secondary
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a success message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined',
                          color: 'success'
                        }
                      } as SnackbarProps)
                    }
                  >
                    Success
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a warning message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined',
                          color: 'warning'
                        }
                      } as SnackbarProps)
                    }
                  >
                    Warning
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="outlined"
                    color="info"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a info message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined',
                          color: 'info'
                        }
                      } as SnackbarProps)
                    }
                  >
                    Info
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a error message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined',
                          color: 'error'
                        }
                      } as SnackbarProps)
                    }
                  >
                    Error
                  </Button>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="With Close" codeString={closeSnackbarCodeString}>
              <Grid container spacing={2}>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a default message',
                        variant: 'alert',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Default
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a secondary message',
                        variant: 'alert',
                        alert: {
                          color: 'secondary'
                        },
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Secondary
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a success message',
                        variant: 'alert',
                        alert: {
                          color: 'success'
                        },
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Success
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a warning message',
                        variant: 'alert',
                        alert: {
                          color: 'warning'
                        },
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Warning
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="info"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a info message',
                        variant: 'alert',
                        alert: {
                          color: 'info'
                        },
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Info
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a error message',
                        variant: 'alert',
                        alert: {
                          color: 'error'
                        },
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Error
                  </Button>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="With Close + Action" codeString={actionSnackbarCodeString}>
              <Grid container spacing={2}>
                <Grid>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a default message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined'
                        },
                        actionButton: true,
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Default
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a secondary message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined',
                          color: 'secondary'
                        },
                        actionButton: true,
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Secondary
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a success message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined',
                          color: 'success'
                        },
                        actionButton: true,
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Success
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a warning message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined',
                          color: 'warning'
                        },
                        actionButton: true,
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Warning
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="outlined"
                    color="info"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a info message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined',
                          color: 'info'
                        },
                        actionButton: true,
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Info
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a error message',
                        variant: 'alert',
                        alert: {
                          variant: 'outlined',
                          color: 'error'
                        },
                        actionButton: true,
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Error
                  </Button>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Position" codeString={positionSnackbarCodeString}>
              <Grid container spacing={2}>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        anchorOrigin: { vertical: 'top', horizontal: 'left' },
                        message: 'This is a Top-Left message!',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Top-Left
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        anchorOrigin: { vertical: 'top', horizontal: 'center' },
                        message: 'This is a Top-Center message!',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Top-Center
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        anchorOrigin: { vertical: 'top', horizontal: 'right' },
                        message: 'This is a Top-Right message!',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Top-Right
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                        message: 'This is a Bottom-Right message!',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Bottom-Right
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                        message: 'This is a Bottom-Center message!',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Bottom-Center
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                        message: 'This is a Bottom-Left message!',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Bottom-Left
                  </Button>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Transitions" codeString={transitionsSnackbarCodeString}>
              <Grid container spacing={2}>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a Fade message!',
                        transition: 'Fade',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Default/Fade
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a Slide-Left message!',
                        transition: 'SlideLeft',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Slide Left
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a Slide-Up message!',
                        transition: 'SlideUp',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Slide Up
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a Slide-Right message!',
                        transition: 'SlideRight',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Slide Right
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a Slide-Down message!',
                        transition: 'SlideDown',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Slide Down
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openSnackbar({
                        open: true,
                        message: 'This is a Grow message!',
                        transition: 'Grow',
                        close: true
                      } as SnackbarProps)
                    }
                  >
                    Grow
                  </Button>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={12}>
            <Typography variant="h5" sx={{ mt: 1 }}>
              Extended - Notistack
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <ColorVariants />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MaxSnackbar />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <IconVariants />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <HideDuration />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <SnackBarAction />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <DismissSnackBar />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <PreventDuplicate />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <TransitionBar />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Dense />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <CustomComponent />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <PositioningSnackbar />
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}
