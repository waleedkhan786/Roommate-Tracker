import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import ExpenseItem from './ExpenseItem';
const ExpenseList = () => {
      const { expenses } = useContext(AppContext);
      
  return (
    

  <div className="container mx-auto p-4">
      <div className="mt-4 w-full">
        <h2 className="text-xl font-semibold mb-4">Expense History</h2>

        {expenses.length === 0 ? (
          <p className="text-gray-500">No expenses recorded yet</p>
        ) : (
          <ul className="space-y-4">
            {expenses.map((expense) => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))}
          </ul>
        )}
      </div>
    </div>

    
  )
}

export default ExpenseList