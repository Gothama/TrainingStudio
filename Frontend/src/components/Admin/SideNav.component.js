
import React, {Component} from 'react';
import {Nav, Tab, Col, Row} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import bxUser from '@iconify-icons/bx/bx-user';
import accountHeart from '@iconify-icons/mdi/account-heart';
import cogOutline from '@iconify-icons/mdi/cog-outline';
import clipboardPulse from '@iconify-icons/mdi/clipboard-pulse';
import accountSettings from '@iconify-icons/mdi/account-settings';
import viewComfy from '@iconify-icons/mdi/view-comfy';
import AdminAllCustomers from './adminallCustomers.component';
import Summary from './summary.component';
import Anlysis from './analysis.component';


export default class SideNav extends Component{
  
    render(){
return(

<div >
{/*
<Nav variant="tabs" defaultActiveKey="/home" className="flex-column">
  <Nav.Item>
    <Nav.Link style={{height:"80px", paddingTop:"30px" , textAlign:"left", fontWeight:"bolder"}}>
    <Icon icon={clipboardPulse} height="2em" />Summary</Nav.Link>
  </Nav.Item>
  <Nav.Item >
    <Nav.Link eventKey="link-1" style={{height:"80px", paddingTop:"30px" , textAlign:"left" ,fontWeight:"bolder"}}>
    <Icon icon={accountSettings} height="2em" />Customers</Nav.Link>
  </Nav.Item>
  <Nav.Item >
    <Nav.Link eventKey="link-2" style={{height:"80px", paddingTop:"30px" , textAlign:"left", fontWeight:"bolder"}}>
    <Icon icon={bxUser}height="2em" />Dieticians</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3" style={{height:"80px", paddingTop:"30px" , textAlign:"left",  fontWeight:"bolder"}}>
    <Icon icon={accountHeart} height="2em" />Physical Trainers</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4" style={{height:"80px", paddingTop:"30px" , textAlign:"left",  fontWeight:"bolder"}}>
    <Icon icon={viewComfy} height="2em" />Analysis Reports</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-5" style={{height:"80px", paddingTop:"30px" , textAlign:"left",  fontWeight:"bolder"}}>
    <Icon icon={cogOutline} height="2em" />Settings</Nav.Link>
  </Nav.Item>
</Nav>*/}

<Tab.Container id="left-tabs-example" defaultActiveKey="first" >
  <Row>
    
        <Col sm={3}><div style={{backgroundColor:"#e7d9ea",borderRadius:"10px"}}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item >
          <Nav.Link eventKey="first" style={{height:"80px", paddingTop:"30px" , textAlign:"left" ,fontWeight:"bolder"}}>
          <Icon icon={clipboardPulse} height="2em" />  Summary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" style={{height:"80px", paddingTop:"30px" , textAlign:"left" ,fontWeight:"bolder"}}>
          <Icon icon={accountSettings} height="2em" />  Customers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third" style={{height:"80px", paddingTop:"30px" , textAlign:"left" ,fontWeight:"bolder"}}>
          <Icon icon={bxUser}height="2em" />  Dieticians</Nav.Link>
        </Nav.Item>
     
        <Nav.Item>
          <Nav.Link eventKey="fifth" style={{height:"80px", paddingTop:"30px" , textAlign:"left" ,fontWeight:"bolder"}}>
          <Icon icon={accountHeart} height="2em" /> Physical Trainers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="sixth" style={{height:"80px", paddingTop:"30px" , textAlign:"left" ,fontWeight:"bolder"}}>
          <Icon icon={viewComfy} height="2em" />  Analysis Reports</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="seventh" style={{height:"80px", paddingTop:"30px" , textAlign:"left" ,fontWeight:"bolder"}}>
          <Icon icon={cogOutline} height="2em" />  Settings</Nav.Link>
        </Nav.Item>
       
      </Nav></div>
    </Col>
    

    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <Summary/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <AdminAllCustomers />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <AdminAllCustomers />
        </Tab.Pane>

        <Tab.Pane eventKey="fifth">
          <AdminAllCustomers />
        </Tab.Pane>
        <Tab.Pane eventKey="sixth">
          <Anlysis/>
        </Tab.Pane>
        <Tab.Pane eventKey="seventh">
          <AdminAllCustomers />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>


</div>
);
}
} 