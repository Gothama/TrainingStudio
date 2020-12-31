
import React, {Component} from 'react';
import Footer from '../../general/footer.component';
import {Table} from 'react-bootstrap';
import TrainerNav from '../trainerNav.component';
import {Button,Card} from 'react-bootstrap';
import addBlogImage from '../../../assets/images/customerSection.png'
//import {Link} from 'react-router-dom';

//import Footer from '../general/footer.component';

export default class AllCustomers extends Component{
  
    render(){
return(

<div>
  <TrainerNav/>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >

<div className="container" style={{/*paddingTop:"100px" ,*/ paddingBottom:"100px" }}>

<div className="row" >      

<Card className="bg-dark text-white" style={{ width: '70rem',margin:"0.5rem"}}>
  <Card.Img src={addBlogImage} alt="Card image" />
  <Card.ImgOverlay >
    <Card.Title style={{ color:"white", fontSize:"30px", lineHeight:"80px", fontWeight:"bolder"}}>All Customers Table</Card.Title>
    <Card.Text style={{ color:"white", fontSize:"30px", lineHeight:"60px", fontWeight:"bolder"}}>
    Manage all your customers
    </Card.Text>
    {/*<Button variant="danger">Add New Blog</Button>*/}
  </Card.ImgOverlay>
</Card>
</div>
<Table striped bordered hover variant="dark" >
  <thead >
    <tr >
      <th >#</th>
      <th style={{textAlign:"center"}}>First Name</th>
      <th style={{textAlign:"center"}}>Last Name</th>
      <th style={{textAlign:"center"}}>Age</th>
      <th style={{textAlign:"center"}}>Email</th>
      <th style={{textAlign:"center"}}>Manage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Kenneth</td>
      <td>35</td>
      <td>markenneth@gmail.com</td>
      <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Gothama</td>
      <td>Rajawasam</td>
      <td>23</td>
      <td>gothamaRajawasam@gmail.com</td>
      <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Kisal</td>
      <td>Perera</td>
      <td>56</td>
      <td>kisalPerera@gmail.com</td>
      <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
    </tr>
    <tr>
      <td>4</td>
      <td>John</td>
      <td>Thornton</td>
      <td>56</td>
      <td>JohnThornton@gmail.com</td>
      <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
    </tr>
    <tr>
      <td>5</td>
      <td>Hasitha</td>
      <td>Wickramasinghe</td>
      <td>41</td>
      <td>hasithaWickramasinghe@gmail.com</td>
      <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
    </tr>
    <tr>
      <td>6</td>
      <td>Kulesha</td>
      <td>Senanayaka</td>
      <td>26</td>
      <td>KuleshaWickramasinghe@gmail.com</td>
      <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Button variant="primary">Payments</Button></td>
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