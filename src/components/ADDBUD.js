import React from 'react'
import { useBudgets } from '../context/context'
import { Button,Form, FormControl, FormGroup, Modal, ModalBody, ModalHeader, ModalTitle ,FormLabel} from 'react-bootstrap'

export default function ADDBUD({show,handleClose}) {
    const nameRef= React.useRef()
    const maxRef= React.useRef()
    const {addbudget} = useBudgets()

    function handleSubmit(e){
        e.preventDefault()
        addbudget( 
        {
        name:nameRef.current.value,
        max: parseFloat(maxRef.current.value)
        })
        handleClose()

   

    }
  return (
<Modal show={show} onHide={handleClose}>
    <Form onSubmit={handleSubmit}>
        <ModalHeader closeButton>
        <ModalTitle>New Budget</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <FormGroup className=' mb-3' controlId='name'>
                <FormLabel>Name</FormLabel>
                <FormControl type="text" required ref={nameRef}></FormControl>
            </FormGroup>

            <FormGroup className=' mb-3' controlId='Max'>
                <FormLabel>Max</FormLabel>
                <FormControl ref={maxRef} type="number" required min={0} step={0.01}></FormControl>
            </FormGroup>
            <div className='d-flex justisfy-content-end'>
                <Button variant='primary' type={'submit'}>Add</Button>

            </div>

        </ModalBody>

    </Form>

</Modal>
  )
}
