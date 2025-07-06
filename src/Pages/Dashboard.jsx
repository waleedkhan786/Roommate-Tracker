import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExpenseChart from '../components/Dashboard/ExpenseChart'
import ChoreStats from '../components/Dashboard/ChoreStats'
import TodayTask from '../components/Dashboard/TodayTask'
import DashboardOverview from '../components/Dashboard/DashboardOverview'
const Dashboard = () => {

  
  return (
    <>
    <Navbar></Navbar>
<main>
  <div class="h-14  h-auto pb-8 bg-gray-50">
<h1 className='text-4xl p-8'>Welcome To Dashboard!</h1>
<DashboardOverview></DashboardOverview>
<ChoreStats></ChoreStats>
<h3 className='text-3xl p-6 text-bold'>Analytics</h3>
<ExpenseChart></ExpenseChart>


<TodayTask></TodayTask>



</div>

  
</main>

    <Footer></Footer>
       </>
  )
   
  
}

export default Dashboard