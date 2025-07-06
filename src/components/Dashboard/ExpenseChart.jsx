import React, { useContext } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { AppContext } from '../../Context/AppContext';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const ExpenseChart = () => {
  const { expenses } = useContext(AppContext);

  if (!expenses || expenses.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No expense data available</p>
      </div>
    );
  }

  const chartData = {
    labels: expenses.map((item) => item.title),
    datasets: [
      {
        label: 'Amount Spent',
        data: expenses.map((item) => item.amount),
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(234, 179, 8, 0.7)',
          'rgba(139, 92, 246, 0.7)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(234, 179, 8, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 px-4">
      <div className="w-full md:w-[48%] h-64 bg-white p-4 rounded-lg shadow">
        <h3 className="text-center font-semibold text-gray-700 mb-2">Bar Chart</h3>
        <div className="h-full">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>

      <div className="w-full md:w-[48%] h-64 bg-white p-10 rounded-lg shadow">
        <h3 className="text-center font-semibold text-gray-700 mb-2">Pie Chart</h3>
        <div className="h-full">
          <Pie
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;