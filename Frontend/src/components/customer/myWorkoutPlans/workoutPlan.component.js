
import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import { Tab, Row, Nav, Col } from 'react-bootstrap';
import TrainerNav from './../cusnav.component'
import Footer from '../../general/footer.component';
import WorkoutPlanForm from './workoutPlanForm.component';
//import ImportantFactsWorkout from './importantfacts.component';

export default class WorkoutPlan extends Component {

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >
          <TrainerNav />
          <h1 className="container" style={{ color: "white", paddingTop: "50px" }}>Add Workout Plan</h1>
          <div className="container" style={{ paddingTop: "100px", paddingBottom: "100px" }}>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first" bg="dark" variant="dark">
              <Row>
                <Col lg={3} md={12}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">First Day Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Second Day Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Third Day Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Fourth Day Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifith">Fifith Day Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Sixth Day Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seventh">Seventh Day Plan</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col lg={9} md={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <WorkoutPlanForm day="First" id={this.props.match.params.id}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <WorkoutPlanForm day="Second" id={this.props.match.params.id}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <WorkoutPlanForm day="Third" id={this.props.match.params.id}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <WorkoutPlanForm day="Fourth" id={this.props.match.params.id}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifith">
                      <WorkoutPlanForm day="Fifith" id={this.props.match.params.id}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <WorkoutPlanForm day="Sixth" id={this.props.match.params.id}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="seventh">
                      <WorkoutPlanForm day="Seventh" id={this.props.match.params.id}/>
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