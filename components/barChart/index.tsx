'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function BarChart({numbers}: {numbers: number[]}) {
  const chartRef = useRef(null);
  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    const option = {
      title: {
            text: 'Bar Chart Example',

      },
      tooltip: {},
      legend: {
        data: ['sales'],
      },
      xAxis: {
        data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks', 'Shirts', 'Cardigans', 'Chiffons', 'Pants'],
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: numbers,
        },
      ],
    };

    chartInstance.setOption(option);
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '600px', height: '400px' }} />;
}