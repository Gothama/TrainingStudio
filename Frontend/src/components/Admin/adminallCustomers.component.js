import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';

export default class AdminAllCustomers extends Component{
  state={
    customers:[]
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
      <td style={{textAlign:"center"}}><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="primary">Payments</Button></td>
    </tr>


    )}
   

  </tbody>
</Table>
</div>
</div>


    </div>
);
}
}   