import { useState, ChangeEvent, MouseEvent } from 'react';

// material-ui
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// ==============================|| COMPONENTS - PAGINATION ||============================== //

export default function ComponentPagination() {
  // default table pagination
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // custom pagination
  const [rows, setRows] = useState(10);
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof rows>) => {
    setRows(+event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [goto, setGoto] = useState<string | number>(1);
  const handleChangePagination = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleChangeGoto = (event: ChangeEvent<HTMLInputElement>) => {
    if (+event.target.value > 0 && +event.target.value <= 100 / rows) {
      setGoto(+event.target.value);
      setCurrentPage(+event.target.value);
    } else {
      setGoto('');
    }
  };

  const basicPaginationCodeString = `<Pagination count={10} defaultPage={1} color="primary" />
<Pagination count={10} defaultPage={2} variant="contained" color="primary" />
<Pagination count={10} defaultPage={3} variant="outlined" color="secondary" />
<Pagination count={10} defaultPage={4} disabled />`;

  const sizePaginationCodeString = `<Pagination count={10} defaultPage={1} size="small" color="primary" />
<Pagination count={10} defaultPage={2} variant="outlined" color="primary" />
<Pagination count={10} defaultPage={3} size="large" variant="contained" color="secondary" />`;

  const rangePaginationCodeString = `<Pagination count={11} defaultPage={1} siblingCount={0} color="primary" />
<Pagination count={11} defaultPage={2} color="primary" />
<Pagination count={11} defaultPage={3} color="primary" variant="combined" />
<Pagination count={11} defaultPage={4} siblingCount={0} boundaryCount={2} variant="outlined" color="primary" />
<Pagination count={11} defaultPage={5} boundaryCount={2} variant="contained" color="primary" />`;

  const tablesPaginationCodeString = `<Pagination
  count={100 / rows}
  page={currentPage}
  onChange={handleChangePagination}
  color="primary"
  variant="combined"
/>
<FormControl sx={{ m: 1, minWidth: 120 }}>
  <Select
    id="demo-controlled-open-select"
    open={open}
    onClose={handleClose}
    onOpen={handleOpen}
    value={rows}
    onChange={handleChange}
    size="small"
    sx={{ '& .MuiSelect-select': { py: 0.75, px: 1.25 } }}
  >
    <MenuItem value={5}>5 / page</MenuItem>
    <MenuItem value={10}>10 / page</MenuItem>
    <MenuItem value={25}>25 / page</MenuItem>
    <MenuItem value={50}>50 / page</MenuItem>
    <MenuItem value={100}>100 / page</MenuItem>
  </Select>
</FormControl>
<Stack direction="row" spacing={1} alignItems="center">
  <Typography variant="h6">Go to</Typography>
  <TextField
    id="outlined-name"
    placeholder="Page"
    value={goto}
    onChange={handleChangeGoto}
    size="small"
    sx={{ '& .MuiOutlinedInput-input': { py: 0.75, px: 1.25, width: 50 } }}
  />
</Stack>`;

  const variantsPaginationCodeString = `<Pagination count={10} defaultPage={1} color="primary" />
<Pagination count={10} defaultPage={2} variant="outlined" color="primary" />
<Pagination count={10} defaultPage={3} variant="contained" color="primary" />
<Pagination count={10} defaultPage={4} variant="combined" color="primary" />`;

  const circularPaginationCodeString = `<Pagination count={10} defaultPage={1} color="primary" shape="circular" />
<Pagination count={10} defaultPage={2} variant="outlined" color="primary" shape="circular" />
<Pagination count={10} defaultPage={3} variant="contained" color="primary" shape="circular" />
<Pagination count={10} defaultPage={4} variant="combined" color="primary" shape="circular" />`;

  const buttonsPaginationCodeString = `<Pagination count={10} showFirstButton showLastButton variant="combined" color="primary" />
<Pagination count={10} hidePrevButton hideNextButton variant="contained" shape="circular" />`;

  const colorsPaginationCodeString = `<Pagination count={10} defaultPage={6} color="primary" />
<Pagination count={10} defaultPage={6} variant="outlined" color="secondary" />
<Pagination count={10} defaultPage={6} variant="contained" color="success" />
<Pagination count={10} defaultPage={6} variant="combined" color="warning" />
<Pagination count={10} defaultPage={6} variant="outlined" color="info" shape="circular" />
<Pagination count={10} defaultPage={6} variant="contained" color="error" shape="circular" />`;

  return (
    <ComponentSkeleton>
      <ComponentHeader
        title="Pagination"
        caption="The Pagination component enables the user to select a specific page from a range of pages."
        directory="src/pages/components-overview/pagination"
        link="https://mui.com/material-ui/react-pagination/"
      />
      <ComponentWrapper>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack sx={{ gap: GRID_COMMON_SPACING }}>
              <MainCard title="Basic" codeHighlight codeString={basicPaginationCodeString}>
                <Stack sx={{ gap: 2 }}>
                  <Pagination count={10} defaultPage={1} color="primary" />
                  <Pagination count={10} defaultPage={2} variant="contained" color="primary" />
                  <Pagination count={10} defaultPage={3} variant="outlined" color="secondary" />
                  <Pagination count={10} defaultPage={4} disabled />
                </Stack>
              </MainCard>
              <MainCard title="Size" codeString={sizePaginationCodeString}>
                <Stack sx={{ gap: 2 }}>
                  <Pagination count={10} defaultPage={1} size="small" color="primary" />
                  <Pagination count={10} defaultPage={2} variant="outlined" color="primary" />
                  <Pagination count={10} defaultPage={3} size="large" variant="contained" color="secondary" />
                </Stack>
              </MainCard>
              <MainCard title="Ranges" codeString={rangePaginationCodeString}>
                <Stack sx={{ gap: 2 }}>
                  <Pagination count={11} defaultPage={1} siblingCount={0} color="primary" />
                  <Pagination count={11} defaultPage={2} color="primary" />
                  <Pagination count={11} defaultPage={3} color="primary" variant="combined" />
                  <Pagination count={11} defaultPage={4} siblingCount={0} boundaryCount={2} variant="outlined" color="primary" />
                  <Pagination count={11} defaultPage={5} boundaryCount={2} variant="contained" color="primary" />
                </Stack>
              </MainCard>
              <MainCard title="Tables" codeString={tablesPaginationCodeString}>
                <>
                  <Grid container spacing={0.5} sx={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Grid>
                      <Pagination
                        count={100 / rows}
                        page={currentPage}
                        onChange={handleChangePagination}
                        color="primary"
                        variant="combined"
                      />
                    </Grid>
                    <Grid>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          id="demo-controlled-open-select"
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          value={rows}
                          onChange={handleChange}
                          size="small"
                          sx={{ '& .MuiSelect-select': { py: 0.75, px: 1.25 } }}
                        >
                          <MenuItem value={5}>5 / page</MenuItem>
                          <MenuItem value={10}>10 / page</MenuItem>
                          <MenuItem value={25}>25 / page</MenuItem>
                          <MenuItem value={50}>50 / page</MenuItem>
                          <MenuItem value={100}>100 / page</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid>
                      <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                        <Typography variant="h6">Go to</Typography>
                        <TextField
                          id="outlined-name"
                          placeholder="Page"
                          value={goto}
                          onChange={handleChangeGoto}
                          size="small"
                          sx={{ '& .MuiOutlinedInput-input': { py: 0.75, px: 1.25, width: 50 } }}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                  <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </>
              </MainCard>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack sx={{ gap: GRID_COMMON_SPACING }}>
              <MainCard title="Variants" codeString={variantsPaginationCodeString}>
                <Stack sx={{ gap: 2 }}>
                  <Pagination count={10} defaultPage={1} color="primary" />
                  <Pagination count={10} defaultPage={2} variant="outlined" color="primary" />
                  <Pagination count={10} defaultPage={3} variant="contained" color="primary" />
                  <Pagination count={10} defaultPage={4} variant="combined" color="primary" />
                </Stack>
              </MainCard>
              <MainCard title="Circular" codeString={circularPaginationCodeString}>
                <Stack sx={{ gap: 2 }}>
                  <Pagination count={10} defaultPage={1} color="primary" shape="circular" />
                  <Pagination count={10} defaultPage={2} variant="outlined" color="primary" shape="circular" />
                  <Pagination count={10} defaultPage={3} variant="contained" color="primary" shape="circular" />
                  <Pagination count={10} defaultPage={4} variant="combined" color="primary" shape="circular" />
                </Stack>
              </MainCard>
              <MainCard title="Buttons" codeString={buttonsPaginationCodeString}>
                <Stack sx={{ gap: 2 }}>
                  <Stack sx={{ gap: 2 }}>
                    <Pagination count={10} showFirstButton showLastButton variant="combined" color="primary" />
                    <Pagination count={10} hidePrevButton hideNextButton variant="contained" shape="circular" />
                  </Stack>
                </Stack>
              </MainCard>
              <MainCard title="Colors" codeString={colorsPaginationCodeString}>
                <Stack sx={{ gap: 2 }}>
                  <Stack sx={{ gap: 2 }}>
                    <Pagination count={10} defaultPage={6} color="primary" />
                    <Pagination count={10} defaultPage={6} variant="outlined" color="secondary" />
                    <Pagination count={10} defaultPage={6} variant="contained" color="success" />
                    <Pagination count={10} defaultPage={6} variant="combined" color="warning" />
                    <Pagination count={10} defaultPage={6} variant="outlined" color="info" shape="circular" />
                    <Pagination count={10} defaultPage={6} variant="contained" color="error" shape="circular" />
                  </Stack>
                </Stack>
              </MainCard>
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}
