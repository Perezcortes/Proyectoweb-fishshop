'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function SalesChart() {
  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Ventas 2023',
        data: [5000, 7000, 8500, 9200, 11000, 12500, 14000, 12000, 13500, 15000, 17000, 20000],
        borderColor: '#1E3A8A',
        backgroundColor: 'rgba(30, 58, 138, 0.1)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Ventas 2022',
        data: [4000, 5500, 6500, 7500, 8500, 9500, 10500, 9500, 10000, 11500, 13000, 15000],
        borderColor: '#D97706',
        backgroundColor: 'rgba(217, 119, 6, 0.1)',
        tension: 0.3,
        fill: true,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Line data={data} options={options} />
}