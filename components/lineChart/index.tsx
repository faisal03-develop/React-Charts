'use client';

import generateRandomNumbers from '@/utils/randomNumbers/randomNumberGenerator';
import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

export default function BarChart() {
  const chartRef = useRef(null);

  const numbers = generateRandomNumbers(10, 100, 6);
console.log(`numbers: ${numbers}`);
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
        data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks'],
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'line',
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
