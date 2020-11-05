
import React, {Component} from 'react';
import Footer from '../../general/footer.component';
import {Table} from 'react-bootstrap';

//import {Link} from 'react-router-dom';

//import Footer from '../general/footer.component';

export default class AllCustomers extends Component{
  
    render(){
return(
<div>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >

<div className="container" style={{paddingTop:"100px" , paddingBottom:"100px" }}>
<h1 style={{color:"white"}}>All Customers Table</h1>


<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>
</div>


<Footer/>
    </div>
);
}
}   