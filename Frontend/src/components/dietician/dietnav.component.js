import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import image from "../../assets/images/p3.png"


export default class DietNav extends Component{
  
    render(){
return(
    <div>
<Navbar bg="dark" variant="dark"  style={{height:"80px"}} fixed="top">
    <div className="container" >
    <Navbar.Brand href="#home">
    <img
        src={image}
        width="90"
        height="80"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> </Navbar.Brand>
        <Navbar.Brand href="#home">
        Customer Dashboard</Navbar.Brand>
    <Nav className="mr-auto" >
      <Nav.Link href="/account" style={{color:"white"}}>My Details</Nav.Link>
      <Nav.Link href="/myBlogs" style={{color:"white"}}>My Blogs</Nav.Link>
      <Nav.Link href="/MyPosts" style={{color:"white"}}>My Posts</Nav.Link>
      <Nav.Link href="/messenger" style={{color:"white"}}>Messenger</Nav.Link>
     
    </Nav>
    </div>
  </Navbar>
  


    </div>
);
}
}   