'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import generateRandomNumbers from '@/utils/randomNumbers/randomNumberGenerator';


export default function LineChart() {
  const chartRef = useRef(null);
  const mon = generateRandomNumbers(0,3000,7);
  const tue = generateRandomNumbers(0,3000,7);
  const wed = generateRandomNumbers(0,3000,7);
  const thu = generateRandomNumbers(0,3000,7);
  const fri = generateRandomNumbers(0,3000,7);
  const sat = generateRandomNumbers(0,3000,7);
  const sun = generateRandomNumbers(0,3000,7);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    const option = {
      title: {
            text: 'Stacked Line Example',
      },
      tooltip: {},
      legend: {
        data: ['sales'],
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {},
      series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: mon
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: tue
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: wed
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: thu
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: fri
    },
    
    {
      name: 'Search',
      type: 'line',
      stack: 'Total',
      data: sat
    },
    {
      name: 'Engine',
      type: 'line',
      stack: 'Total',
      data: sun
    },
  ]
    };

    chartInstance.setOption(option);
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '600px', height: '400px' }} />;
}
