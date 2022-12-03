import React from 'react'
import Budget from './Budget'
import { useBudgets } from '../context/context'

export default function Total() {
    const {expenses,budgets} = useBudgets()
    const amount=expenses.reduce((total,expense) => total + expense.amount , 0) 
    const max=budgets.reduce((total,budget) => total + budget.max, 0) 
    if(max === 0)return null
  return (
<div>
<Budget name="total" amount={amount}  max={max} hidebuttons/>
</div>
  )
}
