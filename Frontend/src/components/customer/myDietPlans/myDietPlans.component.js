
import React, {Component} from 'react';
import Footer from '../../general/footer.component';
import NavBar from './../cusnav.component'
import {Button,Card,Accordion} from 'react-bootstrap';

//import {Link} from 'react-router-dom';

//import Footer from '../general/footer.component';

export default class MyDietPlans extends Component{
  
    render(){
return(
<div>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >
<NavBar/>
<div className="container" style={{paddingTop:"100px" , paddingBottom:"100px" }}>
 <h1 style={{color:"white",paddingBottom:"50px"}}>My Diet Plans</h1>  
 <div style={{color:"white", paddingBottom:"10px"}}>Contact Dietician:</div><Button href="/videoChat" style={{marginBottom:"25px"}}>Video Chat</Button> <Button href="/messenger" style={{marginBottom:"25px"}}>Messenger</Button> 

<Accordion >
  <Card style={{backgroundColor:"#892cdc"}}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color:"white"}}>
        First Week! (2020-11-30 -- 2020-12-06 )
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0" style={{backgroundColor:"white"}}>
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card style={{backgroundColor:"#892cdc"}}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color:"white"}}>
        Second Week!  (2020-12-07 -- 2020-12-14 )
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1" style={{backgroundColor:"white"}}>
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card style={{backgroundColor:"#892cdc"}}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{color:"white"}}>
        Third Week!  (2020-12-14 -- 2020-12-21 )
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2" style={{backgroundColor:"white"}}>
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card style={{backgroundColor:"#892cdc"}}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{color:"white"}}>
        Fourth Week!  (2020-12-21 -- 2020-12-28 )
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3" style={{backgroundColor:"white"}}>
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>


</div>
</div>
<Footer/>
    </div>
);
}
}   