import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default class AdminAllDieticians extends Component{
  state={
    trainers:[]
  }

constructor(){
  super();
  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/allDtrainers` ).then(res=>{
    this.setState({
      trainers:res.data
    })
  }).catch(err => {
    window.alert(err)
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

deletedietician=(id)=>{
  axios.post(`${process.env.REACT_APP_BACKEND_URL}admin/tdelete/` + id ).then(res=>{
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
    {this.state.trainers.map(c=>
 <tr>
      <td>1</td>
      <td>{c.name.fName}</td>
      <td>{c.name.lName}</td>
      <td>{c.age}</td>
      <td>{c.email}</td>
      <td style={{textAlign:"center"}}><Button variant="danger"onClick={()=>this.deletedietician(c._id)}>Unregister</Button> <Link to={`/trainerAccount/trainer/${c._id}`}><Button variant="warning">View Profile</Button></Link> <Button variant="primary">Payments</Button></td>
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