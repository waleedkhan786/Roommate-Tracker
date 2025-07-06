import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';

const TodayTask = () => {
  const {chores} = useContext(AppContext);
  

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-10">
      <div className="flex items-center mb-4">
        <span className="text-green-500 text-xl mr-2">📅</span>
        <h2 className="text-xl font-semibold text-gray-800">Today's Assigned Chores</h2>
      </div>
      
      <div className="space-y-3">
        {chores.map((chore) => (
          <div 
            key={chore.id} 
            className={`flex items-center justify-between p-3 rounded-lg border ${chore.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'}`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={chore.completed}
                onChange={() => {}}
                className="h-4 w-4 text-green-500 rounded border-gray-300 focus:ring-green-500 mr-3"
              />
              <span className={`font-medium ${chore.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                {chore.task}
              </span>
            </div>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
              chore.completed 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {chore.assignedTo}
            </span>
          </div>
        ))}
      </div>

     
    
    </div>
  );
};

export default TodayTask;