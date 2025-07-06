import React from "react";
import { Banknote, Calendar, Tag, User, Trash2 } from "lucide-react";
import { AppContext } from "../../Context/AppContext";
import { useContext } from "react";
const ExpenseItem = ({expense}) => {
    if (!expense) return null; 
      const { deleteExpense } = useContext(AppContext);
  const { id,amount, date, title, paidBy,  } = expense;
  
console.log("🚀 Received expense:", expense);

  
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <li className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
         

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <div className="mt-1 space-y-1 text-sm text-gray-500">
           
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-green-500" />
              <span>Paid by: {paidBy}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-purple-500" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col items-end">
    <button
      className="text-red-500 hover:text-red-700 transition"
      onClick={() => deleteExpense(id)}
      title="Delete Expense"
    >
      <Trash2 className="h-5 w-5" />
    </button>
    <span className="text-xl font-semibold text-blue-600 mt-2">
      ${amount}
    </span>
  </div>




      </div>

       
    
    </li>
  );
};

export default ExpenseItem;
