import { useEffect, useState, SyntheticEvent } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import MoreIcon from 'components/@extended/MoreIcon';
import MainCard from 'components/MainCard';
import { ThemeMode } from 'config';

// assets
import { ArrowDown, ArrowSwapHorizontal, ArrowUp, Bookmark, Chart, Edit, HomeTrendUp, Maximize4, ShoppingCart } from 'iconsax-reactjs';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// ==============================|| CHART ||============================== //

function EcommerceDataChart({ data }: { data: any[] }) {
  const theme = useTheme();
  const mode = theme.palette.mode;

  // chart options
  const areaChartOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 4,
        borderRadiusApplication: 'end'
      }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent']
    },
    fill: {
      opacity: [1, 0.5]
    },
    grid: {
      strokeDashArray: 4
    },
    tooltip: {
      y: {
        formatter: (val: number) => '$ ' + val + ' thousands'
      }
    }
  };

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary.main],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
          }
        },
        axisBorder: {
          show: false,
          color: line
        },
        axisTicks: {
          show: false
        },
        tickAmount: 11
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      legend: {
        labels: {
          colors: 'secondary.main'
        }
      },
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [mode, primary, secondary, line, theme]);

  const [series, setSeries] = useState(data);

  useEffect(() => {
    setSeries(data);
  }, [data]);

  return <ReactApexChart options={options} series={series} type="bar" height={250} />;
}

// ==============================|| CHART WIDGET - PROJECT ANALYTICS ||============================== //

export default function ProjectAnalytics() {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState('30');

  const chartData = [
    [
      {
        name: 'Net Profit',
        data: [76, 85, 101, 98, 87, 105, 91]
      },
      {
        name: 'Revenue',
        data: [44, 55, 57, 56, 61, 58, 63]
      }
    ],
    [
      {
        name: 'Net Profit',
        data: [80, 101, 90, 65, 120, 105, 85]
      },
      {
        name: 'Revenue',
        data: [45, 30, 57, 45, 78, 48, 63]
      }
    ],
    [
      {
        name: 'Net Profit',
        data: [79, 85, 107, 95, 83, 115, 97]
      },
      {
        name: 'Revenue',
        data: [48, 56, 50, 54, 68, 53, 65]
      }
    ],
    [
      {
        name: 'Net Profit',
        data: [90, 111, 105, 55, 70, 65, 75]
      },
      {
        name: 'Revenue',
        data: [55, 80, 57, 45, 38, 48, 43]
      }
    ]
  ];

  const [data, setData] = useState(chartData[0]);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setData(chartData[newValue]);
  };

  return (
    <MainCard content={false}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ px: 3, pt: 1, '& .MuiTab-root': { mb: 0.5 } }}>
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Marketing" {...a11yProps(1)} />
            <Tab label="Project" {...a11yProps(2)} />
            <Tab label="Order" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack sx={{ gap: 2 }}>
                <Stack direction="row" sx={{ gap: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <Select id="demo-simple-select" value={age} onChange={handleChangeSelect}>
                        <MenuItem value={10}>Today</MenuItem>
                        <MenuItem value={20}>Weekly</MenuItem>
                        <MenuItem value={30}>Monthly</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <IconButton color="secondary" variant="outlined" sx={{ color: 'text.secondary' }}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" variant="outlined" sx={{ color: 'text.secondary' }}>
                    <Maximize4 />
                  </IconButton>
                  <IconButton color="secondary" variant="outlined" sx={{ transform: 'rotate(90deg)', color: 'text.secondary' }}>
                    <MoreIcon />
                  </IconButton>
                </Stack>
                <EcommerceDataChart data={data} />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <List disablePadding sx={{ '& .MuiListItem-root': { px: 3, py: 1.5 } }}>
                <ListItem
                  divider
                  secondaryAction={
                    <Stack sx={{ gap: 0.25, alignItems: 'flex-end' }}>
                      <Typography variant="subtitle1">-245</Typography>
                      <Typography color="error" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <ArrowDown style={{ transform: 'rotate(45deg)' }} size={14} /> 10.6%
                      </Typography>
                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Avatar variant="rounded" color="secondary" sx={{ color: 'text.secondary' }}>
                      <Chart />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ color: 'text.secondary' }}>Total Sales</Typography>}
                    secondary={<Typography variant="subtitle1">1,800</Typography>}
                  />
                </ListItem>
                <ListItem
                  divider
                  secondaryAction={
                    <Stack sx={{ gap: 0.25, alignItems: 'flex-end' }}>
                      <Typography variant="subtitle1">+2,100</Typography>
                      <Typography sx={{ color: 'success.main', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <ArrowUp style={{ transform: 'rotate(45deg)' }} size={14} /> 30.6%
                      </Typography>
                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Avatar variant="rounded" color="secondary" sx={{ color: 'text.secondary' }}>
                      <HomeTrendUp />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ color: 'text.secondary' }}>Revenue</Typography>}
                    secondary={<Typography variant="subtitle1">$5,667</Typography>}
                  />
                </ListItem>
                <ListItem
                  divider
                  secondaryAction={
                    <Stack sx={{ gap: 0.25, alignItems: 'flex-end' }}>
                      <Typography variant="subtitle1">-26</Typography>
                      <Typography sx={{ color: 'warning.main', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <ArrowSwapHorizontal size={14} /> 5%
                      </Typography>
                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Avatar variant="rounded" color="secondary" sx={{ color: 'text.secondary' }}>
                      <ShoppingCart />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ color: 'text.secondary' }}>Abandon Cart</Typography>}
                    secondary={<Typography variant="subtitle1">128</Typography>}
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Stack sx={{ gap: 0.25, alignItems: 'flex-end' }}>
                      <Typography variant="subtitle1">+200</Typography>
                      <Typography sx={{ color: 'success.main', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <ArrowUp style={{ transform: 'rotate(45deg)' }} size={14} /> 10.6%
                      </Typography>
                    </Stack>
                  }
                >
                  <ListItemAvatar>
                    <Avatar variant="rounded" color="secondary" sx={{ color: 'text.secondary' }}>
                      <Bookmark />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ color: 'text.secondary' }}>Ads Spent</Typography>}
                    secondary={<Typography variant="subtitle1">$2,500</Typography>}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainCard>
  );
}
