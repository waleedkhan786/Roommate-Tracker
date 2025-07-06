import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
const ChoreForm = () => {
    const {addChore, roommates} = useContext(AppContext)

const [task, setTask] = useState('');
const [assignedTo, setAssignedTo] = useState('');
const [dueDate, setDueDate] = useState('');
const [showForm, setShowForm] = useState(false)
const handleSubmit = (e) => {
e.preventDefault();
if(!task  || !assignedTo){
    alert("Please enter task and select a roommate ");
    return;
}
 const newChores = {
        id: Date.now(), 
        task,
        
        assignedTo,
        
        date: new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }),
          completed: false,
      };

addChore(newChores);
setTask('');
setAssignedTo('');
setDueDate('');
    setShowForm(false)

}


  return (
    <div className='flex justify-center items-center '>
      <button onClick={()=>setShowForm(true)} class="mt-5 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out">
  <span class="flex items-center">
    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
    </svg>
    Add New Chore
  </span>
</button>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Chores</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="task" className="block text-sm font-medium text-gray-700">
                  Chore Task
                </label>
                <input
                  type="text"
                  id="task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="e.g, Clean Kitchen"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">
                  Assign To
                </label>
                <select
                  id="assignedTo"
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                >
                  <option value="">Select Roommate</option>
                  {roommates.map((r, id) => (
                    <option key={id} value={r.name}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
                  Due Date (optional)
                </label>
                <input
                  type="date"
                  id="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Add Chore
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}

export default ChoreForm