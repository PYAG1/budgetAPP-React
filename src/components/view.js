import React from "react";

export default function View(show,handleClose){
    const {expenses,budgets,deletebudget,deleteexpense} = useBudgets()
    return(
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