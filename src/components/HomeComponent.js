
import React from "react";
import { Card, CardBody, CardHeader, Table } from 'reactstrap'
import { Loading } from "./LoadingComponent";

function RenderCard({ trips, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    else{
   return   ( <Table striped bordered hover className="mt-5" variant="dark">
        <thead>
            <tr>
                <th>From </th>
                <th>To </th>
                <th>Charge </th>
            </tr>
        </thead>
        <tbody>
        {trips.map((trip)=> {
            return(<tr key={trip.id}>
                <td>{trip.from}</td>
                <td>{trip.to}</td>
                <td>{trip.charge}</td>
            </tr>)}
        )}
        </tbody>
    </Table>)

    }}
function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <RenderCard trips={props.trips} 
                    isLoading={props.tripsLoading}
                    errMess={props.tripsErrMess}/>
                 </div>  
                <div className="col-sm-6">
                    <Table striped bordered hover className="mt-5" variant="dark">
                        <thead>
                            <tr>
                                <th>Station </th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gaxson</td>
                                <td>KRT</td>
                            </tr>
                            <tr>
                                <td>Alwosta</td>
                                <td>Bahri</td>
                            </tr>
                            <tr>
                                <td>Wed-Nobawey</td>
                                <td>Omdurman</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )

}
export default Home;