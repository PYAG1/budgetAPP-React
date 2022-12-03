import React from "react";
import { Card, ProgressBar, Stack , Button} from "react-bootstrap";
import { currency } from "./utilities";



export default function Budget({name,max,amount,oneExADD}){

   /* const classNames=[]
    if(amount > max){
        classNames.push("bg-danger", "bg-opacity-10")
    }
    else if(gray){
        classNames.push("bg-light")
    }*/


    return(
        <div className="my-5 mx-3" >
        <Card className="card border border-primary  "  style={{height:170}}>
            <div className="card-body">

                <div className="d-flex justify-content-between align-items-baseline pb-4 ">
                    <div className="me-2">{name}</div>
                    <div style={{fontSize:17, fontWeight:600}}>{ currency.format(amount)}{max && ( <span style={{fontSize:12 , fontWeight:400}}>/{ currency.format(max)}</span>)}</div>

                </div>

                {max && (<ProgressBar className="rounded-pill" variant={getProgress(amount,max)} min={0} max={max} now={amount} />)}
                <Stack direction="horizontal" gap="2" className='mt-4'>
                  
                 <Button style={{width:130}} variant="outline-primary ms-auto" onClick={oneExADD}>Add</Button>
                 <Button style={{width:130}} variant="outline-primary">View Expense</Button>



                </Stack>

            </div>



        </Card>

</div>

    )}






function getProgress(amount,max){
    const ratio= amount/max;
    if(ratio< 0.5)return "primary"
    if(ratio < 0.75) return "warning"
    return "danger"


}


