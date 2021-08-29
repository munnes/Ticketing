
import React from "react";
import { Card, CardBody, CardHeader, Label, Input, Button ,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
function CheckStatus() {
    return (
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to='/issueCard'>Issue Card</Link></BreadcrumbItem>
                <BreadcrumbItem>Check Status</BreadcrumbItem>
                </Breadcrumb>
             
            </div>
         
                <Card className="col-sm-6 mt-5 mb-5">
                    <CardHeader>Check Your Charge</CardHeader>
                    <CardBody>
                        <dl className="row p-1">
                            <dt className="col-3"><Label htmlFor="crdNo">Card No</Label></dt>
                            <dd className="col-9">  <Input type="text" id="crdNo" /> </dd>
                            <dt className="col-3">Balance</dt>
                            <dd className="col-9">  <Input type="text" readOnly value='50 SDG' /></dd>
                            <dt className="col-3">Exp. Date</dt>
                            <dd className="col-9">  <Input type="text" readOnly value='31/12/2021' /></dd>
                        </dl>
                        <div className='row'>
                            <div className="offset-3">
                                <Button outline >Send</Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        
    )
}
export default CheckStatus;