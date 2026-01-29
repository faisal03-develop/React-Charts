'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function BarChart() {
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
        data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks'],
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
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
