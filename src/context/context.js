import React, { useContext, useState } from "react" 
import {v4 as uuidV4 } from 'uuid';
import useLocalStorage from "../hooks/uselocal";

const BudgetsContext= React.createContext()

export const UNCAT= "Uncategorised";

export function useBudgets(){
return useContext(BudgetsContext)
}



export const Conprovider=({ children }) =>{
const [budgets,setbudgets] = useLocalStorage("budgets",[])
const [expenses,setexpenses]= useLocalStorage("expenses",[])

console.log(expenses)

function getbudgets(budgetId){
    return expenses.filter(expe=> expe.budgetId === budgetId) 
}

function addbudget({name,max}){
setbudgets(prevBud => {
    if(prevBud.find(budget => budget.name === name)){
        return prevBud
    }
   return [...prevBud, {id:uuidV4(),name,max}] 
})}

function deletebudget({id}){
    setexpenses(prevE=>{
        return prevE.map(expe => {
            if(expe.budgetId !== id)return expe
            return {...expe, budgetId: UNCAT}
        })
    })
    setbudgets(prevBud => {
        return prevBud.filter(item=> item.id !== id)
    })

}

function addexpense({budgetId,des,amount}){
    setexpenses(prevexp=>{
        return [...prevexp, { 
            id:uuidV4(),
            des,
            amount,
            budgetId
        }]
    })

}

function deleteexpense({id}){
    setexpenses(prevexp => {
        return prevexp.filter(expense=> expense.id !== id)
    })
}

return (<BudgetsContext.Provider value={{
    budgets,
expenses,
getbudgets,
addbudget,
addexpense,
deletebudget,
deleteexpense
}}>{children}</BudgetsContext.Provider>


)}