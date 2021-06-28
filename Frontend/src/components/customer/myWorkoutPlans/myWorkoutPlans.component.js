
import React, { Component } from 'react';
import Footer from '../../general/footer.component';
import NavBar from './../cusnav.component'
import { Button, Card, Accordion } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';

//import {Link} from 'react-router-dom';

//import Footer from '../general/footer.component';
const siAPI1 = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}workoutplan/getallworkoutplansbycustomer/`
})

function paybutton(k) {
  return (<h1>{k}</h1>)
}

export default class MyWorkoutPlans extends Component {
  state = {
    workoutplans: []
  }




  getData = () => {
    siAPI1.post("/",
      {

      },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }
    ).then(res => {
      console.log(res.data)

      this.setState({
        workoutplans: res.data
      })

    }).catch(err => {
      window.alert(err)
    })
  }

  constructor(props) {
    super(props);
    this.getData()
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >
          <NavBar />
          <div className="container" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
            <h1 style={{ color: "white", paddingBottom: "50px" }}>My Workout Plans</h1>
            <div style={{ color: "white", paddingBottom: "10px" }}>Contact Trainer:</div><Button href="/videoChat" style={{ marginBottom: "25px" }}>Video Chat</Button> <Link to="/messenger" ><Button style={{ marginBottom: "25px" }}>Messenger</Button> </Link>

            <div className="row" style={{ alignContent: "center" }}>

              {this.state.workoutplans.map(h =>

                <Card style={{ width: '18rem', margin: "0.3rem" }}>
                  <Card.Body>
                    <Card.Title>Workout Plan</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Start Date: <Moment format="YYYY/MM/DD">{h.startdate}</Moment><br/>End Date: <Moment format="YYYY/MM/DD">{h.enddate}</Moment></Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                      {h.addedDate}
                    </Card.Text>

                   
                      <Link to={`/myworkoutplan/${h._id}`}><Button variant="warning">View</Button></Link>
                    


                  </Card.Body>
                </Card>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}