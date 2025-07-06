import React from 'react'
import Navbar from '../components/Navbar'
import ExpenseList from '../components/Expense/ExpenseList'
import ExpenseForm from '../components/Expense/ExpenseForm'
import ExpenseItem from '../components/Expense/ExpenseItem'
import BalanceSummary from '../components/Expense/BalanceSummary'
const Expenses = () => {
  return (
    <div>
        <>
<Navbar></Navbar>

<ExpenseForm></ExpenseForm>
<ExpenseList></ExpenseList>
<BalanceSummary></BalanceSummary>
<ExpenseItem></ExpenseItem>

        </>
    </div>
  )
}

export default Expenses