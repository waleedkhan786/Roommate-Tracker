import React, { createContext, useState, useEffect } from 'react';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../utils/localStorageHelpers';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
 
  const [roommates, setRoommates] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [chores, setChores] = useState([]);

 
  useEffect(() => {
    const storedRoommates = getDataFromLocalStorage('roommates');
    const storedExpenses = getDataFromLocalStorage('expenses');
    const storedChores = getDataFromLocalStorage('chores');
    if (storedRoommates) setRoommates(storedRoommates);
    if (storedExpenses) setExpenses(storedExpenses);
    if (storedChores) setChores(storedChores);
  }, []);

  
  useEffect(() => {
    saveDataToLocalStorage('roommates', roommates);
  }, [roommates]);

  useEffect(() => {
    saveDataToLocalStorage('expenses', expenses);
  }, [expenses]);

  useEffect(() => {
    saveDataToLocalStorage('chores', chores);
  }, [chores]);

  // Functions to add new data
 const addRoommate = (name, avatar) => {
  const newRoommate = {
    id: Date.now(),
    name: name || 'Unnamed',
    avatar: avatar || ''
  };
  setRoommates(prev => [...prev, newRoommate]);
};
  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const addChore = (chore) => setChores([...chores, chore]);
  const toggleChoreStatus = (id) => {
  setChores((prevChores) =>
    prevChores.map((chore) =>
      chore.id === id ? { ...chore, completed: !chore.completed } : chore
    )
  );
};

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };
  const deleteChore = (id) => {
    setChores(chores.filter(chore => chore.id !== id));
  };
   const deleteRoommate = (id) => {
    setRoommates(roommates.filter(roommate => roommate.id !== id));
  };
  
  const value = {
    roommates,
    expenses,
    chores,
    addRoommate,
    addExpense,
    addChore,
    setRoommates,
    setExpenses,
    setChores,
    deleteExpense,
    deleteChore,
    toggleChoreStatus,
    deleteRoommate
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
