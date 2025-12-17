import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import {
  BarChart as BarChartIcon,
  ShowChart as LineChartIcon,
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export type ChartType = 'bar' | 'line';
export type TimePeriod = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface ChartDataPoint {
  label: string;
  value: number;
  [key: string]: string | number; // For multiple datasets
}

interface ChartComponentProps {
  data: ChartDataPoint[];
  title?: string;
  defaultChartType?: ChartType;
  defaultPeriod?: TimePeriod;
  showPeriodSelector?: boolean;
  showChartTypeToggle?: boolean;
  dataKeys?: string[]; // Keys to plot (for multiple lines/bars)
  colors?: string[]; // Colors for each data key
  xAxisKey?: string; // Key for x-axis (default: 'label')
  height?: number;
  onPeriodChange?: (period: TimePeriod) => void;
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  data,
  title = 'Chart',
  defaultChartType = 'bar',
  defaultPeriod = 'monthly',
  showPeriodSelector = true,
  showChartTypeToggle = true,
  dataKeys = ['value'],
  colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#a28ed6'],
  xAxisKey = 'label',
  height = 400,
  onPeriodChange,
}) => {
  const [chartType, setChartType] = useState<ChartType>(defaultChartType);
  const [period, setPeriod] = useState<TimePeriod>(defaultPeriod);

  const handleChartTypeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newType: ChartType | null,
  ) => {
    if (newType !== null) {
      setChartType(newType);
    }
  };

  const handlePeriodChange = (event: SelectChangeEvent<TimePeriod>) => {
    const newPeriod = event.target.value as TimePeriod;
    setPeriod(newPeriod);
    onPeriodChange?.(newPeriod);
  };

  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 5, right: 30, left: 20, bottom: 5 },
    };

    if (chartType === 'bar') {
      return (
        <BarChart {...commonProps}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors[index % colors.length]}
              name={key.charAt(0).toUpperCase() + key.slice(1)}
            />
          ))}
        </BarChart>
      );
    }

    return (
      <LineChart {...commonProps}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {dataKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index % colors.length]}
            strokeWidth={2}
            name={key.charAt(0).toUpperCase() + key.slice(1)}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    );
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {showPeriodSelector && (
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel id="period-select-label">Period</InputLabel>
              <Select
                labelId="period-select-label"
                id="period-select"
                value={period}
                label="Period"
                onChange={handlePeriodChange}
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          )}

          {showChartTypeToggle && (
            <ToggleButtonGroup
              value={chartType}
              exclusive
              onChange={handleChartTypeChange}
              aria-label="chart type"
              size="small"
            >
              <ToggleButton value="bar" aria-label="bar chart">
                <BarChartIcon sx={{ mr: 1 }} />
                Bar
              </ToggleButton>
              <ToggleButton value="line" aria-label="line chart">
                <LineChartIcon sx={{ mr: 1 }} />
                Line
              </ToggleButton>
            </ToggleButtonGroup>
          )}
        </Box>
      </Box>

      <ResponsiveContainer width="100%" height={height}>
        {renderChart()}
      </ResponsiveContainer>
    </Paper>
  );
};

export default ChartComponent;