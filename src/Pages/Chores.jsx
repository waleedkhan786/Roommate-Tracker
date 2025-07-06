import React from 'react'
import Navbar from '../components/Navbar'
import ChoreForm from '../components/Chore/ChoreForm'
import ChoreList from '../components/Chore/ChoreList'
const Chores = () => {
  return (
    <div>
        <>
        <Navbar/>
        <ChoreForm/>
        <ChoreList/>

        </>

    </div>
  )
}

export default Chores