import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';


const AddRoommateForm = () => {
  const { addRoommate } = useContext(AppContext);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    

    addRoommate(name.trim(), avatar.trim());
    setName('');
    setAvatar('');
    
  };

  return (
   <div className="flex justify-center items-center min-h-[50vh]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          ➕ Add a New Roommate
        </h2>

      
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            placeholder="e.g., Sarah Ahmed"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

       
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Avatar URL (Optional)
          </label>
          <input
            type="text"
            value={avatar}
            placeholder="https://..."
            onChange={(e) => setAvatar(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

       
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition duration-200"
        >
          Add Roommate
        </button>
      </form>
    </div>
  );
};

export default AddRoommateForm;
