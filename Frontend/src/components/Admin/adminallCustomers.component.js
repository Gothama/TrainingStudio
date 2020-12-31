import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


export default class AdminAllCustomers extends Component{
  
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
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Kenneth</td>
      <td>35</td>
      <td>markenneth@gmail.com</td>
      <td style={{textAlign:"center"}}><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="primary">Payments</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Gothama</td>
      <td>Rajawasam</td>
      <td>23</td>
      <td>gothamaRajawasam@gmail.com</td>
      <td style={{textAlign:"center"}}><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="primary">Payments</Button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Kisal</td>
      <td>Perera</td>
      <td>56</td>
      <td>kisalPerera@gmail.com</td>
      <td style={{textAlign:"center"}}><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="primary">Payments</Button></td>
    </tr>
    <tr>
      <td>4</td>
      <td>John</td>
      <td>Thornton</td>
      <td>56</td>
      <td>JohnThornton@gmail.com</td>
      <td style={{textAlign:"center"}}><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="primary">Payments</Button></td>
    </tr>
    <tr>
      <td>5</td>
      <td>Hasitha</td>
      <td>Wickramasinghe</td>
      <td>41</td>
      <td>hasithaWickramasinghe@gmail.com</td>
      <td style={{textAlign:"center"}}><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="primary">Payments</Button></td>
    </tr>
    <tr>
      <td>6</td>
      <td>Kulesha</td>
      <td>Senanayaka</td>
      <td>26</td>
      <td>KuleshaWickramasinghe@gmail.com</td>
      <td style={{textAlign:"center"}}><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="primary">Payments</Button></td>
    </tr>
  </tbody>
</Table>
</div>
</div>


    </div>
);
}
}   