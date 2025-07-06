import React from 'react';
import Navbar from '../components/Navbar';
import AddRoommateForm from '../components/Roommate/AddRoommateForm';
import RoommateList from '../components/Roommate/RoomMateList';

const Roommates = () => {
  return (
    <>
    <Navbar/>
    
     <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">👥 Roommates</h1>
      <AddRoommateForm />
      <RoommateList/>
     
    </div>
    </>
   
  );
};

export default Roommates;
