
import React, { Component } from 'react';
import { Tab, Tabs, Row, Nav, Col } from 'react-bootstrap';
import AddDietPlan from './DietPlans/addDietPlan.component';
import HealthReports from './healthreports.component';
import PersonalDetails from './personaldetails.component';
import DietPlans from './dietplans.components';
//import Footer from '../general/footer.component';

export default class InternalNavbar extends Component {

    render() {
        return (
            <div className="container" style={{ paddingTop: "40px", paddingBottom: "100px" }}>

                <Tabs defaultActiveKey="Personal Details" id="uncontrolled-tab-example">
                    <Tab eventKey="Personal Details" title="Personal Details">
                        <PersonalDetails id={this.props.id}/>
                    </Tab>
                    <Tab eventKey="Health Reports" title="Health Reports">
                        <HealthReports id={this.props.id}/>
                    </Tab>
                    <Tab eventKey="Diet Plans" title="Diet Plans">
                        <DietPlans id={this.props.id}/>
                    </Tab>
                </Tabs>s



            </div>
        );
    }
}