import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Footer from '../../general/footer.component';
import { Table } from 'react-bootstrap';
import TrainerNav from '../trainerNav.component';
import { Button, Card } from 'react-bootstrap';
import addBlogImage from '../../../assets/images/customerSection.png'
import axios from 'axios';
import CsvDownload from 'react-json-to-csv'


const siAPI1 = axios.create({
  baseURL: `http://localhost:9020/trainer`
})

export default class AllCustomers extends Component {
  state = {
    customers: []
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


  render() {
    return (

      <div>
        <TrainerNav />
        <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >

          <div className="container" style={{/*paddingTop:"100px" ,*/ paddingBottom: "100px" }}>

            <div className="row" >

              <Card className="bg-dark text-white" style={{ width: '70rem', margin: "0.5rem" }}>
                <Card.Img src={addBlogImage} alt="Card image" />
                <Card.ImgOverlay >
                  <Card.Title style={{ color: "white", fontSize: "30px", lineHeight: "80px", fontWeight: "bolder" }}>All Customers Table</Card.Title>
                  <Card.Text style={{ color: "white", fontSize: "30px", lineHeight: "60px", fontWeight: "bolder" }}>
                    Manage all your customers
    </Card.Text>
                  <CsvDownload data={this.state.customers} />
                </Card.ImgOverlay>
              </Card>
            </div>
            <Table striped bordered hover variant="dark" >
              <thead >
                <tr >

                  <th style={{ textAlign: "center" }}>First Name</th>
                  <th style={{ textAlign: "center" }}>Last Name</th>
                  <th style={{ textAlign: "center" }}>Age</th>
                  <th style={{ textAlign: "center" }}>Email</th>
                  <th style={{ textAlign: "center" }}>Manage</th>
                </tr>
              </thead>
              <tbody>
                {this.state.customers.map(c =>
                  <tr>
                    <td>{c.name.fName}</td>
                    <td>{c.name.lName}</td>
                    <td>{c.age}</td>
                    <td>{c.email}</td>
                    <td><Button variant="danger">Unregister</Button> <Button variant="warning">View Profile</Button> <Button variant="success">Video Call</Button> <Link to={`/messengert/${c._id}`}><Button variant="success">Message</Button></Link> <Button variant="primary">Payments</Button></td>
                  </tr>
                )}

              </tbody>
            </Table>
          </div>
        </div>


        <Footer />
      </div>
    );
  }
}