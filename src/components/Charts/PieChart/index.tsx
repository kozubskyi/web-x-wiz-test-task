'use client';
import { FC, ReactNode, useRef } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  Chart,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import s from './PieChart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom' as const,
      align: 'start',
      labels: {
        color: '#7A7878',
        boxWidth: 8,
        boxHeight: 8,
        useBorderRadius: true,
        borderRadius: 2,
        font: {
          size: 12,
          family: 'inherit',
          lineHeight: '142.857143%',
        },
      },
    },
  },
};

export const chartData: ChartData<'doughnut'> = {
  labels: ['Back 4', 'Alan 2', 'Battlefield', 'Other'],
  datasets: [
    {
      label: '# of Votes',
      data: [40, 30, 15, 10],
      backgroundColor: ['#0C44AC', '#00A190', '#FFA500', '#FFCF00'],
      borderWidth: 0,
      borderAlign: 'center',
      borderColor: 'transparent',
      hoverBorderColor: 'transparent',
    },
  ],
};

const thickness = {
  id: 'thickness',

  beforeDraw: function (chart: any) {
    const datasetMeta = chart.getDatasetMeta(0);
    // const controller: any = datasetMeta.controller;
    // const { innerRadius, outerRadius } = controller;

    // const heightOfItem = outerRadius - innerRadius;
    // const countOfData = chart.getDatasetMeta(0).data.length;
    // const additionalRadius = Math.floor(heightOfItem / countOfData);

    // const weightsMap = datasetMeta.data
    //   .map((v: any) => v.circumference)
    //   .sort((a: any, b: any) => a - b)
    //   .reduce((a: any, c: any, ci: any) => {
    //     a.set(c, ci + 1);
    //     return a;
    //   }, new Map());

    let size = 177;
    datasetMeta.data.forEach((dataItem: any, index: number) => {
      // const weight = weightsMap.get(dataItem.circumference);
      dataItem.outerRadius = (chart.chartArea.width / size) * 75;
      size += 11;
    });
  },
};

const noData = {
  id: 'noData',
  afterDatasetsDraw(chart: Chart) {
    const {
      chartArea: { left, top, right, bottom },
      ctx,
      data,
      legend,
    } = chart;

    const datasets = chart.data?.datasets;

    if (!datasets.length || datasets[0].data.some((item) => !item && true)) {
      // (legend && !legend.legendItems?.find((item) => item.hidden === false))
      ctx.save();

      const centerX = (left + right) / 2;
      const centerY = (top + bottom) / 2;

      const outerRadius = Math.min(right - left, bottom - top) / 3;

      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(57, 60, 77, 0.24)';
      ctx.lineWidth = 40;
      ctx.stroke();

      ctx.restore();
    }
  },
};

interface PieChartProps {
  innerContent?: ReactNode;
  height?: number;
  data?: ChartData<'doughnut'>;
  options?: ChartOptions<'doughnut'>;
}

export const PieChart: FC<PieChartProps> = ({
  innerContent,
  height = 276,
  data = chartData,
  options = chartOptions,
}) => {
  const innerRef = useRef<HTMLDivElement>(null);

  const innerBlock = {
    id: 'innerBlock',
    afterDatasetsDraw(chart: Chart) {
      var centerX = chart.getDatasetMeta(0).data[0].x;
      var centerY = chart.getDatasetMeta(0).data[0].y;

      if (innerRef.current?.style) {
        innerRef.current.style.visibility = 'visible';
        innerRef.current.style.top = centerY / 16 + 'rem';
        innerRef.current.style.left = centerX / 16 + 'rem';
      }
    },
  };

  return (
    <div className={s.chart} style={{ position: 'relative' }}>
      <div>
        <Doughnut
          options={options}
          data={data}
          plugins={[thickness, innerBlock, noData]}
          height={height}
        />
      </div>
      {innerContent && (
        <div className={s.chart_inner} ref={innerRef}>
          {innerContent}
        </div>
      )}
    </div>
  );
};
