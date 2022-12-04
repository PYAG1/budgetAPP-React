
import './App.css';
import { Button, Stack } from 'react-bootstrap';
import Budget from './components/Budget';
import 'bootstrap/dist/css/bootstrap.min.css';
import ADDBUD from './components/ADDBUD';
import React from 'react';
import { UNCAT, useBudgets } from './context/context';
import ADDEXP from './components/ADDEXP';
import Uncategorized from './components/Uncategorized';
import Total from './components/total';
import Viewbudget from './components/ViewBudget';
import { FaRegBell } from 'react-icons/fa';

function App() {
const [showAddBudgetModal,setShowAdd] = React.useState(false)
const [showAddexpModal,setShowAddexp] = React.useState(false)
const [viewAddexpModal,setviewAddexp] = React.useState( )
const [AddexpModal,setAddexp] = React.useState()
const {budgets,getbudgets} = useBudgets()

function openEXPmod(budgetId){
setAddexp(budgetId)
setShowAddexp(true)


}
  return (
    
    <div className='  p-2' >
    <Stack direction="horizontal" gap="2" className='header ' >
    <h1 className='me-auto' style={{color:'white'}}>Buntu</h1>
    <div>
      <Button onClick={()=> setShowAdd(true)} >Add Budget</Button>
      <Button variant="light" onClick={openEXPmod}>Add Expense</Button>
    
    </div>
    </Stack>
<div className=' mt-5'>
    <div style={{display:'grid',gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',gap:'10px', alignItems:'flex-start'}}>
      {budgets.map((item)=>{
          const amountv= getbudgets(item.id).reduce((total,expense) => total + expense.amount , 0) 
     return (
<Budget key={item.id}
 name={item.name} 
 amount={amountv}
  max={item.max} 
  oneExADD={()=>openEXPmod(item.id)} 
  onViewClick={()=> setviewAddexp(item.id)}/>)}
)}
<Uncategorized oneExADD={openEXPmod} onViewClick={()=> setviewAddexp(UNCAT)}/>
  <Total/>
    </div>
    </div>
    <ADDBUD
     show={showAddBudgetModal}
      handleClose={()=>setShowAdd()}
    />
    <ADDEXP  
     show={showAddexpModal} 
     defaultBudID={AddexpModal}
     handleClose={()=>setShowAddexp(false)}  
    />
        <Viewbudget
        budgetId={viewAddexpModal }
        handleClose={()=>setviewAddexp( )}

    
    />
      


    </div>
  );
}

export default App;
