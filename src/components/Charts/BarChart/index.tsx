'use client';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ScriptableContext,
} from 'chart.js';

import { generateRandomNumber } from 'utils/utils';

import s from './BarChart.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        color: '#7A787844',
      },
      border: {
        dash: [6, 3],
        color: 'transparent',
      },
      ticks: {
        padding: 12,
        font: {
          size: 14,
          family: 'inherit',
          lineHeight: '142.857143%',
        },
        color: '#7A7878',
      },

      afterFit: (axis) => {
        // console.log(axis)
        axis.paddingRight = 12;
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
      align: 'start',
      labels: {
        color: '#7A7878',
      },
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const chartData: ChartData<'bar'> = {
  labels: labels,
  datasets: [
    {
      label: 'Income',
      data: labels.map(() => generateRandomNumber(0, 100)),
      backgroundColor: (context: ScriptableContext<'bar'>) => {
        const ctx = context.chart.ctx;

        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#548BF3');
        gradient.addColorStop(1, '#0C44AC');

        return gradient;
      },
      borderRadius: 8,
      barThickness: 14,
    },
  ],
};

interface BarChartProps {
  height?: number;
  options?: ChartOptions<'bar'>;
  data?: ChartData<'bar'>;
}

export const BarChart: FC<BarChartProps> = ({
  height = 296,
  options = chartOptions,
  data = chartData,
}) => {
  return (
    <div className={s.chart}>
      <Bar options={options} data={data} height={height} />
    </div>
  );
};
