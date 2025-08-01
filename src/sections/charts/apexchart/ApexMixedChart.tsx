import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import { ThemeMode } from 'config';

// chart options
const mixedChartOptions = {
  chart: {
    type: 'line',
    stacked: false,
    height: 450
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1, 4]
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
  },
  legend: {
    show: true,
    fontFamily: `'Inter', sans-serif`,
    position: 'bottom',
    labels: {
      useSeriesColors: false
    },
    markers: {
      size: 7
    },
    itemMargin: {
      horizontal: 15,
      vertical: 8
    }
  },
  yaxis: [
    {
      axisTicks: { show: true },
      axisBorder: { show: true, color: '#008FFB' },
      labels: { style: { colors: '#008FFB' } },
      title: { text: 'Income (thousand crores)', style: { color: '#008FFB' } },
      tooltip: { enabled: true }
    },
    {
      seriesName: 'Income',
      opposite: true,
      axisTicks: { show: true },
      axisBorder: { show: true, color: '#00E396' },
      labels: { style: { colors: '#00E396' } },
      title: { text: 'Operating Cashflow (thousand crores)', style: { color: '#00E396' } }
    },
    {
      seriesName: 'Revenue',
      opposite: true,
      axisTicks: { show: true },
      axisBorder: { show: true, color: '#FEB019' },
      labels: { style: { colors: '#FEB019' } },
      title: { text: 'Revenue (thousand crores)', style: { color: '#FEB019' } }
    }
  ]
};

// ==============================|| APEXCHART - MIXED ||============================== //

export default function ApexMixedChart() {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const { primary } = theme.palette.text;
  const line = theme.palette.divider;
  const grey200 = theme.palette.secondary[200];

  const secondary = theme.palette.primary[700];
  const primaryMain = theme.palette.primary.main;
  const successDark = theme.palette.success.main;

  const [series] = useState([
    {
      name: 'Income',
      type: 'column',
      data: [14, 2, 25, 15, 25, 28, 38, 46]
    },
    {
      name: 'Cashflow',
      type: 'column',
      data: [11, 3, 31, 4, 41, 49, 65, 85]
    },
    {
      name: 'Revenue',
      type: 'line',
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>({ ...mixedChartOptions, yaxis: [...mixedChartOptions.yaxis, { logarithmic: true }] });

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [secondary, primaryMain, successDark],
      xaxis: {
        labels: {
          style: { colors: primary }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
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
  }, [mode, primary, line, grey200, secondary, primaryMain, successDark]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
}
