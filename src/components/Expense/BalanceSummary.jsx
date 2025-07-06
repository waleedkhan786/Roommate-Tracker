import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { calculateBalances } from '../../Utils/CalculateBalance';

const BalanceSummary = () => {
  const { expenses } = useContext(AppContext);

  const summary = calculateBalances(expenses);

  if (summary.length === 0) {
    return <p className="text-gray-500 text-center">All expenses are settled 🎉</p>;
  }

  return (
    <div className="bg-white shadow rounded p-4 mt-6">
      <h2 className="text-lg font-bold mb-3">💳 Balance Summary</h2>
      <ul className="space-y-2">
        {summary.map((entry, index) => (
          <li key={index} className="bg-gray-100 rounded p-2">
            <span className="font-semibold text-blue-600">{entry.from}</span> owes 
            <span className="font-semibold text-green-600"> {entry.to}</span> 
            <span className="ml-2 font-bold text-red-600">Rs {entry.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BalanceSummary;
