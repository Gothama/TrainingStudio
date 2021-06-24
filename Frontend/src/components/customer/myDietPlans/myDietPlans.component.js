
import React, { Component } from 'react';
import Footer from '../../general/footer.component';
import NavBar from './../cusnav.component'
import { Button, Card, Accordion } from 'react-bootstrap';
import DietPlan from './dietPlan.component';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';

//import {Link} from 'react-router-dom';

//import Footer from '../general/footer.component';
const siAPI1 = axios.create({
  baseURL: `http://localhost:9020/dietplan/getalldietplansbycustomer/`
})

export default class MyDietPlans extends Component {
  state = {
    dietplans: []
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
        dietplans: res.data
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
            <h1 style={{ color: "white", paddingBottom: "50px" }}>My Diet Plans</h1>
            <div style={{ color: "white", paddingBottom: "10px" }}>Contact Dietician:</div><Button href="/videoChat" style={{ marginBottom: "25px" }}>Video Chat</Button> <Link to="/messenger" ><Button style={{ marginBottom: "25px" }}>Messenger</Button> </Link>

            <div className="row" style={{ alignContent: "center" }}>

              {this.state.dietplans.map(h =>

                <Card style={{ width: '18rem', margin: "0.3rem" }}>
                  <Card.Body>
                    <Card.Title>Diet Plan</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">For Date: <Moment format="YYYY/MM/DD">{h.forDate}</Moment></Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                      {h.addedDate}
                    </Card.Text>
                    <Link to={`/mydietplan/${h._id}`}><Button variant="warning">View</Button></Link>

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