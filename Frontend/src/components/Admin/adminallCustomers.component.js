import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, Modal} from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import Moment from 'react-moment';

export default class AdminAllCustomers extends Component{
  state={
    customers:[],
    show: false
  }

constructor(){
  super();
  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/allcustomers` ).then(res=>{
    this.setState({
      customers:res.data
    })
  }).catch(err => {
    window.alert(err)
  })

}

showpayments = (id) => {
  //console.log(id)
  axios.post(`${process.env.REACT_APP_BACKEND_URL}payment/paymentsofcustomer`, { payerID: id }
  ).then(res => {
    console.log(res.data)
    this.setState({
      show: true,
      paymentsDetails: res.data

    })
    console.log(this.state.show)
  }).catch(err => {
    alert(err)
  })
}

successfulmessage=(msg)=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: msg,
    showConfirmButton: false,
    timer: 1500
  })
}


unsuccessfulmessage=(msg)=>{
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: msg,
    showConfirmButton: false,
    timer: 1500
  })
}

deletecustomer=(id)=>{
  axios.post(`${process.env.REACT_APP_BACKEND_URL}admin/cdelete/` + id ).then(res=>{
    console.log(res.data)
    if(res.data === "okay"){
        this.successfulmessage("Successfully unregistered from the Web Platform")
        window.location.reload()
    }
    else{
        this.unsuccessfulmessage("Unsucessful")
    }
  }).catch(err => {
    window.alert(err)
  })
}
close = () => {
  this.setState({
    show: false
  })
}

    render(){
return(

<div>

    <div style={{paddingTop:"50px"}} >

<div style={{/*paddingTop:"100px" ,*/ paddingBottom:"100px",width:"100%" }}>


<Table striped bordered hover variant="dark">
  <thead >
    <tr >
      <th >#</th>
      <th style={{textAlign:"center", width:"20vh" }}>First Name</th>
      <th style={{textAlign:"center"}}>Last Name</th>
      <th style={{textAlign:"center"}}>Age</th>
      <th style={{textAlign:"center"}}>Email</th>
      <th style={{textAlign:"center", width:"70vh" }}>Manage</th>
    </tr>
  </thead>
  <tbody>
    {this.state.customers.map(c=>
 <tr>
      <td>1</td>
      <td>{c.name.fName}</td>
      <td>{c.name.lName}</td>
      <td>{c.age}</td>
      <td>{c.email}</td>
      <td style={{textAlign:"center"}}><Button variant="danger" onClick={()=>this.deletecustomer(c._id)}>Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="primary"onClick={() => this.showpayments(c._id)}>Payments</Button></td>
    </tr>


    )}
   

  </tbody>
</Table>

{this.state.show ? <Modal show={this.state.show} >
              <Modal.Header>Payments Done</Modal.Header>
              <Modal.Body>
                {this.state.paymentsDetails.map(pd => {
                  return (<p style={{ color: "black" }}>{pd.reason} Rs.{pd.paymentamount}.00  <Moment format="YYYY/MM/DD">{pd.paymentdate}</Moment></p>)
                })}

              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>
                  Close
                   </Button>
              </Modal.Footer>
            </Modal> : null}

</div>
</div>


    </div>
);
}
}   