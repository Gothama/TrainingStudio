import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Moment from 'react-moment';

export default class AdminAllTrainers extends Component {
  state = {
    trainers: [],
    show: false
  }

  constructor() {
    super();
    axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/alltrainers`).then(res => {
      this.setState({
        trainers: res.data
      })
    }).catch(err => {
      window.alert(err)
    })

  }

  close = () => {
    this.setState({
      show: false
    })
  }

  successfulmessage = (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }


  unsuccessfulmessage = (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  deletedietician = (id) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}admin/tdelete/` + id).then(res => {
      console.log(res.data)
      if (res.data === "okay") {
        this.successfulmessage("Successfully unregistered from the Web Platform")
        window.location.reload()
      }
      else {
        this.unsuccessfulmessage("Unsucessful")
      }
    }).catch(err => {
      window.alert(err)
    })
  }

  showpayments = (id) => {
    //console.log(id)
    axios.post(`${process.env.REACT_APP_BACKEND_URL}payment/paymentsoftrainer`, { receiverID: id }
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

        <div style={{ paddingTop: "50px" }} >

          <div style={{/*paddingTop:"100px" ,*/ paddingBottom: "100px", width: "100%" }}>
          

            <Table striped bordered hover variant="dark">
              <thead >
                <tr >
                  <th >#</th>
                  <th style={{ textAlign: "center", width: "20vh" }}>First Name</th>
                  <th style={{ textAlign: "center" }}>Last Name</th>
                  <th style={{ textAlign: "center" }}>Age</th>
                  <th style={{ textAlign: "center" }}>Email</th>
                  <th style={{ textAlign: "center", width: "70vh" }}>Manage</th>
                </tr>
              </thead>
              <tbody>
                {this.state.trainers.map(c =>
                  <tr>
                    <td>1</td>
                    <td>{c.name.fName}</td>
                    <td>{c.name.lName}</td>
                    <td><Moment format="YYYY/MM/DD">{c.dob}</Moment></td>
                    <td>{c.email}</td>
                    <td style={{ textAlign: "center" }}><Button variant="danger" onClick={() => this.deletedietician(c._id)}>Unregister</Button> <Link to={`/trainerAccount/trainer/${c._id}`}><Button variant="warning">View Profile</Button></Link> <Button variant="primary" onClick={() => this.showpayments(c._id)}>Recieved Payments</Button></td>
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
                      <th style={{ textAlign: "center"}}>Reason</th>
                      <th style={{ textAlign: "center" }}>Paid by</th>
                      <th style={{ textAlign: "center" }}>Amount</th>
                      <th style={{ textAlign: "center" }}>Paid Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.paymentsDetails.map(pd => {
                    return ( <tr><td>{pd.reason}</td> <td>{pd.payerID.name.fName} {pd.payerID.name.lName}</td><td>{pd.paymentamount}</td><td><Moment format="YYYY/MM/DD">{pd.paymentdate}</Moment></td></tr>)
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


        </div>
);
}
}