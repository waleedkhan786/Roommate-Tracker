import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Expenses from './Pages/Expenses'
import Roommates from './Pages/Roommates'
import Chores from './Pages/Chores'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
         <Route path='/expenses' element={<Expenses/>}/>
         <Route path='/chores' element={<Chores/>}/>

           <Route path='/roommate' element={<Roommates/>}/>
      </Routes>
    </div>
  )
}

export default App