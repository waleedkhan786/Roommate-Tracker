import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { Trash2 } from "lucide-react";

const RoommateCard = ({ id, name, avatar }) => {
  const { deleteRoommate, expenses, chores } = useContext(AppContext);
    const roommateExpenses = expenses.filter(e => e.paidBy === name);
  const totalSpent = roommateExpenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-white shadow-md rounded-lg flex-wrap">
      <div className="flex items-center gap-4">
        <img
          src={avatar || `https://ui-avatars.com/api/?name=${name}&background=random`}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
       <p className="text-gray-500 text-sm">Total Spent: Rs. {totalSpent}</p>
        </div>
      </div>

      <button
        onClick={() => deleteRoommate(id)}
        className="text-red-500 hover:text-red-700 transition"
        title="Delete Roommate"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
};

export default RoommateCard;
