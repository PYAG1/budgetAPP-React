import React from 'react'
import Budget from './Budget'
import { useBudgets } from '../context/context'

import { UNCAT } from '../context/context'

export default function Uncategorized(props) {
    const { getbudgets} = useBudgets()
    const amount= getbudgets(UNCAT).reduce((total,expense) => total + expense.amount , 0) 
    if(amount === 0)return null
  return (
    <div>
        <Budget name="Uncategorised" amount={amount} {...props}/>
        



    </div>
  )
}
