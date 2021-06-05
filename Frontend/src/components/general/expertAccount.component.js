import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Navbar from "./navbar.component";
import Footer from './footer.component';
import Header from './header.component';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';
import { PayPalButton } from "react-paypal-button-v2";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

export default class ExpertAccount extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    gender: "Male",
    phoneNumber: "",
    username: "",
    password: "",
    cardNumber: "",
    expiryDate: "",
    nameOnCard: "",
    code: "",
    fee: "",
    profilephotolink: "",
    uploading: "",
    image: "",
    register: false,
    qualifications: [],
    rating: ""
  }

  constructor(props) {
    super(props)


    axios.post(`${process.env.REACT_APP_BACKEND_URL}trainer/ffdetail`, { id: this.props.match.params.id }).then(res => {
      this.setState({
        fName: res.data.name.fName,
        lName: res.data.name.lName,
        email: res.data.email,
        gender: res.data.gender,
        phoneNumber: res.data.phoneNumber,
        profilephotolink: res.data.profilephotolink,
        fee: res.data.fee,
        qualifications: res.data.qualifications,
        rating: res.data.rating,
        type:res.data.type
      })
      console.log(res.data)
    })

  }
  register = (event) => {
    event.preventDefault();
    this.setState({ register: true })
    
  }

  successfulmessage=(msg)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  
  unsuccessfulmessage=(msg)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  onPaymentSuccess = (details, data) => {
    // alert("Transaction completed by " + details.payer.name.given_name);

    // OPTIONAL: Call your server to save the transaction
    console.log(data);

    if(data.payerID!==null){
      axios.post(`${process.env.REACT_APP_BACKEND_URL}customer/register`, { eid: this.props.match.params.id, fee:200 , type:this.state.type },{
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }).then(res => {
        console.log(res.data)
        if(res.data === "successfull"){
          this.successfulmessage("Registered Successfully")

        }
        else{
          alert(res.data)
        }
      })
    }
  }

  render() {
    return (
      <div>

        <Navbar />
        <Header />
        <section className="cta2" style={{ paddingBottom: "50px" }}>
          <div className="container" style={{ paddingTop: "100px" }}>
            <div style={{ backgroundColor: "#007bff", padding: "20px", marginTop: "60px", borderRadius: "15px" }}>
              <div className="text-center" style={{ marginTop: "-60px" }}>
                <img src={this.state.profilephotolink} className="rounded avatar" alt="..." style={{ height: "150px", width: "150px", borderRadius: "50%" }} />
              </div>

              <Form onSubmit={this.handleOnSubmit} style={{ color: "white", paddingTop: "60px", fontSize: "20px",padding: "20px" }}>
                <Form.Group as={Row} controlId="formHorizontalFName" >
                  <Form.Label column sm={2} >
                    First Name :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Label column sm={2}>
                      {this.state.fName}
                    </Form.Label>
                  </Col>

                  <Form.Label column sm={2}>
                    Last Name :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Label column sm={2}>
                      {this.state.lName}
                    </Form.Label>
                  </Col>

                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalFName" >
                  <Form.Label column sm={2}>
                    Gender :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Label column sm={2}>
                      {this.state.gender}
                    </Form.Label>
                  </Col>

                  <Form.Label column sm={2}>
                    Rating :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Label column sm={2}>
                      {this.state.rating}
                    </Form.Label>
                  </Col>

                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Fee per plan :
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Label column sm={2}>
                      {this.state.fee}
                    </Form.Label>
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    {localStorage.getItem("AccountType") === "Trainer" ? <div><Button type="submit" style={{ backgroundColor: "red" }}>Trainers cant Register</Button></div> : null}
                    {localStorage.getItem("AccountType") === "Customer" && !this.state.register ? <div><Button type="submit" style={{ backgroundColor: "red" }} onClick={this.register}>Register</Button> </div> :
                      null}


                    {(localStorage.getItem("loggedIn") !== "loggedIn") ? <div><Link to="/signInOut"><Button style={{ backgroundColor: "red" }}>Please Sign In</Button></Link> </div> :
                      null}


                    {this.state.register ? <div style={{ width: "10px" }}> <PayPalButton amount="200" onSuccess={(details, data) => this.onPaymentSuccess(details, data)} /></div> : null}

                  </Col>
                </Form.Group>
              </Form>
              <div>
                <Table striped bordered hover variant="dark" style={{ borderRadius: "10px" }}>
                  <thead >
                    <tr >

                      <th style={{ textAlign: "center", width: "5vh" }}>Title</th>
                      <th style={{ textAlign: "center", width: "5vh" }}>qualification ID</th>
                      <th style={{ textAlign: "center", width: "15vh" }}>Issued By</th>
                      <th style={{ textAlign: "center", width: "10vh" }}>Issued Date</th>
                      <th style={{ textAlign: "center", width: "10vh" }}>Description</th>
                      <th style={{ textAlign: "center", width: "10vh" }}>Link To</th>

                    </tr>
                  </thead>
                  <tbody>
                    {this.state.qualifications.map(q =>
                      <tr>
                        <td>{q.title}</td>
                        <td>{q.qualificationID}</td>
                        <td>{q.issuedBy}</td>
                        <td><Moment format="YYYY/MM/DD">{q.issuedDate}</Moment></td>
                        <td>{q.description}</td>
                        <td><a href={q.linkTo}><Button variant="warning">View</Button></a></td>
                      </tr>
                    )}

                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}