
import React, { Component } from 'react';
import { Button, Card, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import Moment from 'react-moment';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const siAPI = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}dietplan/delete`
})

const siAPI1 = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}workoutplan/getallworkplans/`
})

const siAPI2 = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}workoutplan/nworkoutplan/`
})
const siAPI3= axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}email/newdietplanadded/`
})

export default class WorkoutPlans extends Component {
    state = {
        workoutplans: [],
        startdate: "",
        enddate: "",
        id: "",
        k:""
    }

    constructor(props) {
        super(props);
        this.getData()
    }

    getData = () => {
        siAPI1.post("/",
            {
                id: this.props.id
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
    onChangedate1 = (date) => {
       // event.preventDefault();
        this.setState({
            startdate:date
        })

    }
    onChangedate2 = (date) => {
       
        this.setState({
            enddate: date
        })

    }
 /*    onChangedate1 = (date) => {
       // event.preventDefault();
       console.log(date.toLocaleDateString())
       this.setState({
           forDate: date
       })

    }
   deletePlan = (id) => {
        siAPI.post("/" + id, {}, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            console.log(res)
            //  this.message("success" , "Blog Deleted Successfully")
           // window.location.reload()
           this.getData();
        }).catch(err => {
            console.log(err)
        })

    }*/


    createDietPlan = (event) => {
        event.preventDefault();
        siAPI2.post("/", {
            customerID: this.props.id,
            startdate: this.state.startdate,
            enddate: this.state.enddate
        },
            {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
            .then(res => {
                console.log(res)
                //this.message("success", "Blog added Successfully")
                // window.open(`/customeraccount/addDietPlan/${res.data.id}`)
                // this.props.history.push(`/customeraccount/addDietPlan/${res.data.id}`)
                this.setState({
                    id: res.data.id
                })
                siAPI3.post("/").then(res=>{
                    console.log(res)
                }).catch(err=>{
                    window.alert(err)
                })
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
                <div style={{ margin: "20px" }}className="col-lg-12">

                    <DatePicker
                        selected={this.state.startdate}
                        dateFormat="MM-dd-yyyy"
                        minDate={Date.now()}
                        onChange={(date) => this.onChangedate1(date)}
                       //excludeDates={[new Date('2021-06-10'),new Date('2021-06-11')]}
                       //excludeDates={this.state.dietplans.map(h=>new Date(h.forDate))}
                        placeholderText="Select a date"
                    />
                    <DatePicker
                        selected={this.state.enddate}
                        dateFormat="MM-dd-yyyy"
                        minDate={Date.now()}
                        onChange={(date) => this.onChangedate2(date)}
                       //excludeDates={[new Date('2021-06-10'),new Date('2021-06-11')]}
                       //excludeDates={this.state.dietplans.map(h=>new Date(h.forDate))}
                        placeholderText="Select a date"
                    />



                    <Button variant="danger" style={{marginLeft:"2px"}} onClick={this.createDietPlan}>Create</Button> <Link to={`/addworkoutPlan/${this.state.id}`}><Button variant="danger">Add New Plan</Button></Link>
                </div>
                <div className="row" style={{ alignContent: "center" }}>

                    {this.state.workoutplans.map(h =>

                        <Card style={{ width: '18rem', margin: "0.3rem" }}>
                            <Card.Body>
                                <Card.Title>Workout Plan</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Start Date: <Moment format="YYYY/MM/DD">{h.startdate}</Moment> <br/> End Date: <Moment format="YYYY/MM/DD">{h.enddate}</Moment></Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    {h.addedDate}
                                </Card.Text>
                               {/* <a href="#"><Button variant="danger" style={{ margin: "0.3rem" }} onClick={() => this.deletePlan(h._id)}>Delete</Button></a>*/}
                                <Link to={`/addworkoutPlan/${h._id}`}><Button variant="warning">View</Button></Link>

                            </Card.Body>
                        </Card>


                    )}
                </div>

            </div>
        );
    }
}