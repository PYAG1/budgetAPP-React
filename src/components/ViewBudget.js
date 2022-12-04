import React from 'react'
import { useBudgets } from '../context/context'
import { UNCAT } from '../context/context';
import { Button,Stack,Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'
import { currency } from './utilities';

export default function Viewbudget({budgetId,handleClose}) {

    const {getbudgets,budgets,deletebudget,deleteexpense} = useBudgets()

    const budget = UNCAT === budgetId ? { name:"Uncategorised", id: UNCAT} : budgets.find(b => b.id === budgetId)

    const expense= getbudgets(budgetId)
    
  return (
<Modal show={ budgetId != null} onHide={handleClose}>
        <ModalHeader closeButton>
        <ModalTitle>
            <Stack direction="horizontal" gap="2">
                <div>
                    Expenses - {budget?.name}

                </div>
                {budgetId !== UNCAT && (<Button onClick={()=>{
                    deletebudget(budget)
                    handleClose()
                }} variant='outline-danger'>Delete</Button>)}



            </Stack>
        </ModalTitle>
        </ModalHeader>
        <ModalBody>
            <Stack direction="vertical " gap="3">
                {expense.map(exp =>(
                    <Stack direction='horizontal' gap="2" key={exp.id}>
                        <div className='me-auto fs-4'>{exp.des}</div>
                        <div className=' fs-5'>{currency.format(exp.amount)}</div>
                        <Button size="sm" variant='outline-danger' onClick={()=> deleteexpense(exp)}>&times;</Button>
                    </Stack>

                ))}
            </Stack>
          
            
       
        </ModalBody>

 

</Modal>
  )
}
