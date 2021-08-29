
import React,{Component} from "react";
import { Card, CardBody, CardHeader, Label, Input, Button ,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import { Control, Form, Errors, actions } from 'react-redux-form';
class IssueCard extends Component {
    constructor(props) {
        super(props);

        this.handelSubmit = this.handelSubmit.bind(this);

    }

    handelSubmit(values) {
        console.log("Current state is" + JSON.stringify(values))
        alert("Current state is" + JSON.stringify(values))
        this.props.postCard(values)
        this.props.resetCard();
    }
    render(){
    return (
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem>Issue Card</BreadcrumbItem>
                <BreadcrumbItem><Link to='/chkStatus'>Check Status</Link></BreadcrumbItem>
                </Breadcrumb>
             
            </div>
         
                <Card className="col-sm-6 mt-5 mb-5">
                    <CardHeader>Issue Card</CardHeader>
                    <CardBody>
                    <Form model="tCard" onSubmit={(Values) => this.handelSubmit(Values)}>
                        <dl className="row p-1">
                            <dt className="col-3"><Label htmlFor="name">Passenger</Label></dt>
                            <dd className="col-9">  <Control.text model=".name" id="name" readonly value="Nasreen Sayed" /> </dd>
                            <dt className="col-3"><Label htmlFor="uId">ID</Label></dt>
                            <dd className="col-9">  <Control.text model=".uId" id="uId"/></dd>
                            <dt className="col-3"><Label htmlFor="master">Master card</Label></dt>
                            <dd className="col-9">  <Control.text model=".master"  id="master"/></dd>
                        </dl>
                        <div className='row'>
                            <div className="offset-3">
                                <Button outline >Send</Button>
                            </div>
                        </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        
    )
}
}
export default IssueCard;