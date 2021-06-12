import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Footer from '../../general/footer.component';
import { Table } from 'react-bootstrap';
import TrainerNav from '../trainerNav.component';
import { Button, Card, Modal } from 'react-bootstrap';
import addBlogImage from '../../../assets/images/customerSection.png'
import axios from 'axios';
import CsvDownload from 'react-json-to-csv'
import Swal from 'sweetalert2'
import Moment from 'react-moment';

const siAPI1 = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}trainer`
})

export default class AllCustomers extends Component {
  state = {
    customers: [],
    show: false,
    paymentsDetails: []
  }

  constructor() {
    super()

    siAPI1.post("/allMyCustomers", { type: localStorage.getItem("AccountType") },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(res => {
        this.setState({
          customers: res.data
        })
        console.log(this.state.customers)

      }).catch(err => {
        window.alert(err)
      })
  }

  unregistercustomer = (cid) => {
    console.log(cid)
    siAPI1.post("/unregister", { cid: cid }, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }).then(res => {
      if (res.data === "deleted") {
        this.message("success", "Customer Unregistered Successfully")
        console.log(res)
      }

    }).catch(err => {
      alert(err)
    })
  }

  close = () => {
    this.setState({
      show: false
    })
  }

  message = (type, msg) => {

    Swal.fire({
      position: 'top-end',
      icon: type,
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  showpayments = (id) => {
    //console.log(id)
    axios.post(`${process.env.REACT_APP_BACKEND_URL}payment/allrPcustomer`, { payerID: id },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }
    ).then(res => {
      console.log(res.data)
      this.setState({
        show: true,
        paymentsDetails: res.data

      })
      console.log(this.state.show)
    }).catch(err => {
      alert(err)
    })
  }
  render() {
    return (

      <div>
        <TrainerNav />
        <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >

          <div className="container" style={{ paddingBottom: "100px" }}>

            <div className="row col-lg-12 col-md-12 col-xs-12">

              <Card className="bg-dark text-white" style={{ margin: "0.5rem" }}>
                <Card.Img src={addBlogImage} alt="Card image" />
                <Card.ImgOverlay >
                  <Card.Title style={{ color: "white", fontSize: "30px", lineHeight: "80px", fontWeight: "bolder" }}>All Customers Table</Card.Title>
                  <Card.Text style={{ color: "white", fontSize: "30px", lineHeight: "60px", fontWeight: "bolder" }}>
                    Manage all your customers
    </Card.Text>
                  <CsvDownload data={this.state.customers} style={{ backgroundColor: "red", height: "30px", padding: "2px", fontSize: "15px", color: "white", borderRadius: "10px" }}>Download Customer Data</CsvDownload>
                  <CsvDownload data={this.state.customers} style={{ backgroundColor: "red", height: "30px", padding: "2px", fontSize: "15px", color: "white", borderRadius: "10px" }}>Download Customer Data</CsvDownload>
                </Card.ImgOverlay>
              </Card>
            </div>
            <Table striped bordered hover variant="dark" className="col-lg-12 col-md-12 col-xs-12">
              <thead >
                <tr >

                  <th style={{ textAlign: "center" }}>First Name</th>
                  <th style={{ textAlign: "center" }}>Last Name</th>
                  <th style={{ textAlign: "center" }}>DOB</th>
                  <th style={{ textAlign: "center" }}>Email</th>
                  <th style={{ textAlign: "center" }}>Manage</th>
                </tr>
              </thead>
              <tbody>
                {this.state.customers.map(c =>
                  <tr>
                    <td>{c.name.fName}</td>
                    <td>{c.name.lName}</td>
                    <td><Moment format="YYYY/MM/DD">{c.dob}</Moment></td>
                    <td>{c.email}</td>
                    <td><Button variant="danger" onClick={() => this.unregistercustomer(c._id)}>Unregister</Button> <Link to={`/customeraccount/${c._id}`}><Button variant="warning">View Profile</Button></Link> <Button variant="success">Video Call</Button> <Link to={`/messengert/${c._id}`}><Button variant="success">Message</Button></Link> <Button variant="primary" onClick={() => this.showpayments(c._id)}>Payments</Button></td>
                  </tr>
                )}

              </tbody>
            </Table>
            {this.state.show ? <Modal show={this.state.show} >
              <Modal.Header>Payments Done</Modal.Header>
              <Modal.Body>
                <Table striped bordered hover variant="dark">
                  <thead >
                    <tr >
                      <th style={{ textAlign: "center" }}>Reason</th>
                      <th style={{ textAlign: "center" }}>Amount</th>
                      <th style={{ textAlign: "center" }}>Paid Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.paymentsDetails.map(pd => {
                      return (<tr><td>{pd.reason} </td> <td>Rs.{pd.paymentamount}.00 </td> <td> <Moment format="YYYY/MM/DD">{pd.paymentdate}</Moment></td></tr>)
                    })}
                  </tbody>
                </Table>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>
                  Close
                   </Button>
              </Modal.Footer>
            </Modal> : null}
          </div>
        </div>


        <Footer />
      </div>
    );
  }
}

