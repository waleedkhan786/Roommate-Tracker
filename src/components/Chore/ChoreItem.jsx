import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { Trash2 } from "lucide-react";

const ChoreItem = () => {
  const { chores, deleteChore, toggleChoreStatus } = useContext(AppContext);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Assigned Chores</h2>

      {chores.length === 0 ? (
        <p className="text-gray-500">No chores assigned.</p>
      ) : (
        <ul className="space-y-4">
          {chores.map((chore) => (
            <li
              key={chore.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
             
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{chore.task}</h3>
                <p className="text-sm text-gray-700">
                  Assigned to: <span className="font-medium">{chore.assignedTo}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Due: {chore.date || "No due date"}
                </p>
                <p
                  className={`text-sm font-semibold mt-1 ${
                    chore.completed ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {chore.completed ? "✅ Completed" : "⏳ Pending"}
                </p>
              </div>

             
              <div className="flex-shrink-0">
                <button
                  onClick={() => toggleChoreStatus(chore.id)}
                  className={`px-3 py-1 text-sm rounded transition text-white ${
                    chore.completed ? "bg-yellow-500" : "bg-green-600"
                  } hover:opacity-90`}
                >
                  {chore.completed ? "Mark Pending" : "Mark Done"}
                </button>
              </div>

             
              <div className="flex-shrink-0">
                <button
                  className="text-red-500 hover:text-red-700 transition"
                  onClick={() => deleteChore(chore.id)}
                  title="Delete Chore"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChoreItem;
