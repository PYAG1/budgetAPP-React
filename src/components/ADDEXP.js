import React from 'react'
import { useBudgets } from '../context/context'
import { UNCAT } from '../context/context';
import { Button,Form, FormControl, FormGroup, Modal, ModalBody, ModalHeader, ModalTitle ,FormLabel, FormSelect} from 'react-bootstrap'

export default function ADDEXP({show,handleClose, defaultBudID}) {

    const desRef = React.useRef();
    const amtRef = React.useRef();
    const idRef = React.useRef();
    const {addexpense,budgets} = useBudgets()

    function handleSubmit(e){
        e.preventDefault()
        addexpense( 
        {
        des:desRef.current.value,
        amount: parseFloat(amtRef.current.value),
        budgetId: idRef.current.value
        })
        handleClose()

   

    }
  return (
<Modal show={show} onHide={handleClose}>
    <Form onSubmit={handleSubmit}>
        <ModalHeader closeButton>
        <ModalTitle>New Expense</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <FormGroup className=' mb-3' controlId='des'>
                <FormLabel>description</FormLabel>
                <FormControl type="text" required ref={desRef}></FormControl>
            </FormGroup>

            <FormGroup className=' mb-3' controlId='amount'>
                <FormLabel>Amount</FormLabel>
                <FormControl ref={amtRef} type="number" required min={0} step={0.01}></FormControl>
            </FormGroup>
            
            <FormGroup className=' mb-3' controlId='select'>
                <FormLabel>Budget</FormLabel>
                <FormSelect 
                defaultValue={defaultBudID}
                ref={idRef}
                >
                    <option id={UNCAT}>Uncategorised</option>
                       {budgets.map(budget => (
                    <option key={budget.id} value={budget.id}>{budget.name}</option>
                  ))}


                </FormSelect>

            </FormGroup>
            <div className='d-flex justisfy-content-end'>
                <Button variant='primary' type={'submit'}>Add</Button>

            </div>

        </ModalBody>

    </Form>

</Modal>
  )
}
