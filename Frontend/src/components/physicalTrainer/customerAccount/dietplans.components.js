
import React, { Component } from 'react';
import { Button, Card, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import Moment from 'react-moment';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

const siAPI1 = axios.create({
    baseURL: `http://localhost:9020/general/customerdetails/`
})

export default class DietPlans extends Component {
    state = {
        healthreports: []
    }

    constructor(props) {
        super(props);
        this.getData()
    }

    getData = () => {
        siAPI1.post("/",
            {
                id: this.props.id
            }
        ).then(res => {
            console.log(res.data)
            console.log(res.data.healthReports.length)

            if (res.data.healthReports.length >= 0) {
                this.setState({
                    healthreports: res.data.healthReports
                })
            }
            else {
                this.setState({
                    healthreports: []
                })
            }
            console.log(this.state.healthreports.length)
        }).catch(err => {
            window.alert(err)
        })
    }


    render() {
        return (
            <div style={{ backgroundColor: "#007bff", padding: "20px", paddingTop: "80px" }}>
                <div className="text-center" style={{ marginTop: "-60px" }}>
                    <img src={"https://images.unsplash.com/photo-1485527172732-c00ba1bf8929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"} className="rounded avatar" alt="..." style={{ height: "200px", width: "150px", borderRadius: "50%" }} />
                </div>
                <div style={{margin:"20px"}}>
                <Link to ={`addDietPlan/${this.props.id}`}><Button variant="danger">Add New Diet Plan</Button></Link>
                </div>
                <div className="row" style={{ alignContent: "center" }}>

                    {this.state.healthreports.map(h =>

                        <Card style={{ width: '16rem', margin: "0.3rem" }}>
                            <Card.Img variant="top" src={h.link} />
                            <Card.Body>
                                <Card.Title>{h.description}</Card.Title>
                                <Card.Text>
                                    <p style={{ color: "black", textAlign: "justify" }}>Issued Date :
                                        <Moment format="YYYY/MM/DD">{h.issuedDate}</Moment></p>
                                    <p style={{ color: "black", textAlign: "justify" }}> Added Date :
                                        <Moment format="YYYY/MM/DD">{h.addeddate}</Moment></p>
                                    <br />
                                </Card.Text>
                                <a href={h.link}><Button variant="warning">view</Button></a>
                            </Card.Body>
                        </Card>


                    )}
                </div>

            </div>
        );
    }
}