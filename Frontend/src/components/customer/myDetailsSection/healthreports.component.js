
import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {Button,Card} from 'react-bootstrap';
import {Form,Row,Col} from 'react-bootstrap';
import image1 from '../../../assets/images/p4.jpg'




export default class HealthReports extends Component{
  
    render(){
return(
    <div style={{backgroundColor:"#007bff",padding:"20px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={"https://images.unsplash.com/photo-1485527172732-c00ba1bf8929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"} className ="rounded avatar" alt="..."  style={{height:"200px",width:"150px", borderRadius:"50%"}}/>
            </div>

<div className="row">

<Card style={{ width: '18rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={image1}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Health Report 1</Card.Title>
    
    <Button variant="primary" type="file">Open Report</Button>
  </Card.Body></div>
</Card>

<Card style={{ width: '18rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={image1}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Health Report 2</Card.Title>
    
    <Button variant="primary" type="file">Open Report</Button>
  </Card.Body></div>
</Card>

</div>


<div className="row">
<Card style={{ width: '18rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={image1}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Health Report 3</Card.Title>
    
    <Button variant="primary" type="file">Open Report</Button>
  </Card.Body></div>
</Card>

<Card style={{ width: '18rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={image1}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Health Report 4</Card.Title>
    
    <Button variant="primary" type="file">Open Report</Button>
  </Card.Body></div>
</Card>
</div>
<div>
<Form style={{padding:"20px"}} >
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      First Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={2}>
      Last Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={2}>
      Username
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"   />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password"  />
    </Col>
  </Form.Group>

  

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}}>Update</Button>
    </Col>
  </Form.Group>
</Form>
</div>
    </div>
);
}
} 