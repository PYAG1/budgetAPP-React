import React from "react";
import { Card, ProgressBar, Stack , Button} from "react-bootstrap";
import { currency } from "./utilities";
import {FaEye } from 'react-icons/fa';





export default function Budget({name,max,amount,oneExADD,hidebuttons,onViewClick}){

   /* const classNames=[]
    if(amount > max){
        classNames.push("bg-danger", "bg-opacity-10")
    }
    else if(gray){
        classNames.push("bg-light")
    }*/


    return(
        <div className="my-2 mx-3" > 
        <Card className="card" style={{backgroundColor:"#373737",boxShadow: ' rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',color:"white"}}>
            <Card.Body className="card-body">

                <div className="d-flex justify-content-between align-items-baseline pb-4 ">
                    <div className="me-2">{name}</div>
                    <div style={{fontSize:17, fontWeight:600}}>{ currency.format(amount)}{max && ( <span style={{fontSize:12 , fontWeight:400}}>/{ currency.format(max)}</span>)}</div>

                </div>

                {max && (<ProgressBar className="rounded-pill" variant={getProgress(amount,max)} min={0} max={max} now={amount} style={{backgroundColor:"#c3c3c3"}} />)}
               { !hidebuttons && <Stack direction="horizontal" gap="2" className='mt-4'>
                  
                 <Button variant="outline-primary ms-auto" onClick={oneExADD}>Add</Button>
                 <Button variant="outline-primary" onClick={onViewClick }>View Expense</Button>



                </Stack>}

            </Card.Body>



        </Card>

</div>

    )}






function getProgress(amount,max){
    const ratio= amount/max;
    if(ratio< 0.5)return "primary"
    if(ratio < 0.75) return "warning"
    return "danger"


}


