import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";



const getProgressColor = (percent) => {
  if (percent === 100) return "bg-green-500";
  if (percent >= 50) return "bg-yellow-400";
  return "bg-red-400";
};

const ChoreStats = () => {
  const { chores, roommates } = useContext(AppContext);

  const roommateStats = roommates.map((roommate) => {
    const assignedChores = chores.filter(
      (chore) => chore.assignedTo === roommate.name
    );
    const completedCount = assignedChores.filter((c) => c.completed).length;

    const percent =
      assignedChores.length === 0
        ? 100
        : Math.round((completedCount / assignedChores.length) * 100);

    return {
      name: roommate.name,
      avatar: roommate.avatar || "", 
      total: assignedChores.length,
      completed: completedCount,
      percent,
    };
  });

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-6 space-y-6 mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800">
     Chore Progress
      </h2>

      {roommateStats.map((r, index) => (
        <div key={index} className="space-y-2">
        
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {r.avatar ? (
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
                  {r.name[0]}
                </div>
              )}
              <span className="text-sm font-semibold text-gray-700">
                {r.name}
              </span>
            </div>
            <span className="text-xs font-medium px-2 py-0.5 bg-gray-100 border rounded text-gray-600">
              {r.completed}/{r.total} • {r.percent}%
            </span>
          </div>

        
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColor(
                r.percent
              )} rounded-full transition-all duration-500 ease-out`}
              style={{ width: `${r.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChoreStats;