import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';

const ExpenseForm = () => {
  const { roommates, addExpense } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [splitWith, setSplitWith] = useState([]);
  const [show, setShow] = useState(false)

  const handleCheckboxChange = (e) => {
    const roommateName = e.target.value;
    if (e.target.checked) {
      setSplitWith([...splitWith, roommateName]);
    } else {
      setSplitWith(splitWith.filter((name) => name !== roommateName));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && paidBy && splitWith.length > 0) {
      const newExpense = {
        id: Date.now(), 
        title,
        amount: parseFloat(amount),
        paidBy,
        splitWith, 
        date: new Date().toISOString(),
      };
      addExpense(newExpense);
      
      setTitle('');
      setAmount('');
      setPaidBy('');
      setSplitWith([]);
    } else {
      alert('Please fill out all fields before submitting.');
    }
    setShow(false)
  };

  return (
    <>
    <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg mt-10'>
    <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Add New Expense</h2>
     <button onClick={()=>setShow(true)} class=" ml-26 mt-2 px-6 py-3 bg-blue-600 text-white  font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out">
  <span class="flex items-center">
    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
    </svg>
    Add Expense
  </span>
</button>
</div>
 
      
      
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm z-50">
      <form onSubmit={handleSubmit} >
        <div className='bg-white p-6 rounded-lg shadow-lg w-130 max-w-md'>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="e.g., Grocery Shopping"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="e.g., 1200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Paid By</label>
          <select
            value={paidBy}
            onChange={(e) => setPaidBy(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="">Select Roommate</option>
            {roommates.map((roommate, index) => (
              <option key={index} value={roommate.name}>
                {roommate.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Split With:</label>
          <div className="mt-2 space-y-2">
            {roommates.map((roommate, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={roommate.name}
                  onChange={handleCheckboxChange}
                  checked={splitWith.includes(roommate.name)}
                  className="w-4 h-4 text-blue-600 border rounded focus:ring-blue-500 transition duration-300"
                />
                <span className="text-gray-700">{roommate.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
             onClick={() => show(false)}
          >
            Add Expense
          </button>
        </div>
        </div>
      </form>
       </div>
      )}
      
   
    </>
   
    
  );
};

export default ExpenseForm;