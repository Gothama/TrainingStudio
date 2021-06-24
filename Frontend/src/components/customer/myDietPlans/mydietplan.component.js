
import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import { Tab, Row, Nav, Col } from 'react-bootstrap';
import NavBar from './../cusnav.component'
import Footer from '../../general/footer.component';
import MyDietPlanForm from './mydietplanform.component';

export default class MyDietPlan extends Component {

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >
          <NavBar />
          <h1 className="container" style={{ color: "white", paddingTop: "50px" }}>My Diet Plan</h1>
          <div className="container" style={{ paddingTop: "100px", paddingBottom: "100px" }}>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first" bg="dark" variant="dark">
              <Row>
                <Col lg={3} md={12}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Breakfast Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Lunch Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Dinner Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Other facts</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col lg={9} md={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <MyDietPlanForm type="B" id={this.props.match.params.id}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <MyDietPlanForm type="L" id={this.props.match.params.id}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <MyDietPlanForm type="D" id={this.props.match.params.id}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">

                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}