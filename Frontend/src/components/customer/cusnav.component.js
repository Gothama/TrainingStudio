import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import image from "../../assets/images/p3.png"


export default class NavReact extends Component{
  
    render(){
return(
    <div>
<Navbar collapseOnSelect bg="dark" variant="dark"  expand="lg" style={{height:"80px"}} fixed="top">
    <div className="container" >
    <Navbar.Brand href="/">
    <img
        src={image}
        width="90"
        height="80"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> </Navbar.Brand>
        <Navbar.Brand href="#home">
        Customer Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
      <Nav.Link href="/account" style={{color:"white"}}>My Details</Nav.Link>
      <Nav.Link href="/myWorkoutPlans" style={{color:"white"}}>Workout Plans</Nav.Link>
      <Nav.Link href="/myDietPlans" style={{color:"white"}}>Diet Plans</Nav.Link>
      <Nav.Link href="/messenger" style={{color:"white"}}>Messenger</Nav.Link>
     
    </Nav></Navbar.Collapse>
    </div>
    
  </Navbar>
  


    </div>
);
}
}   