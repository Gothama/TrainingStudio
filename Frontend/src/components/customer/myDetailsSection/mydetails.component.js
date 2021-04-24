
import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {Tab,Row,Nav,Col} from 'react-bootstrap';
import AddHealthDetails from './addHealth.component';
import FitnessCalculator from './fitnesscalculator.component';
import HealthReports from './healthreports.component';
import MyhealthData from './myhealthData.component';
import HealthDetails from './myhealthDetails.component';
import PersonalDetails from './personaldetails.component';
//import Footer from '../general/footer.component';

export default class MyDetails extends Component{
  
    render(){
return(
    <div className="container" style={{paddingTop:"100px" , paddingBottom:"100px" }}>

<Tab.Container id="left-tabs-example" defaultActiveKey="first" bg="dark" variant="dark">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Personal Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Health Reports</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Health Data</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Health Calculator</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <PersonalDetails/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <HealthReports/>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <MyhealthData/>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <FitnessCalculator/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  


    </div>
);
}
}   