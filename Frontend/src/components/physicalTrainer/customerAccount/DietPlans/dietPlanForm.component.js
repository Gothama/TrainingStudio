import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Button, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import Moment from 'react-moment';
import Swal from 'sweetalert2'
import DatePicker from 'react-datepicker'
import { AutoComplete } from 'rsuite';

export default class DietPlanForm extends Component {
    state = {
        foodsuggestions: []
    }

    onChangeFoodName = (event) => {
        event.preventDefault()
        this.setState({
            foodsuggestions: []
        })
        axios.get("https://api.edamam.com/auto-complete?app_id=a3e31d85&app_key=%2010e936572b084d5b87f05cd5bfc9cd22%09&q=" + event.target.value + "&limit=4").then(res => {
            console.log(res.data)
            this.setState({
                foodsuggestions: res.data
            })
        }).catch(err => {
            window.alert(err)
        })
    }


    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#007bff", padding: "20px", marginTop: "60px" }}>
                    <div className="text-center" style={{ marginTop: "-60px", paddingBottom: "20px" }}>
                        <img src={"https://www.verywellhealth.com/thmb/gF-I-Kf6MyQfEbp1Q9mpXtcENxM=/2880x1920/filters:fill(87E3EF,1)/best-breakfast-choices-and-diabetes-1087468-primary-recirc-603a39fe3b10439eaa9a0cf80a09eec2.jpg"} className="rounded avatar" alt="..." style={{ height: "150px", width: "200px", borderRadius: "50%" }} />
                    </div>
                    <div>
                        <Table striped bordered hover variant="dark" className="col-lg-12 col-md-12 col-xs-12">
                            <thead >
                                <tr >

                                    <th style={{ textAlign: "center", width: "5vh" }}>Quantity</th>
                                    <th style={{ textAlign: "center", width: "5vh" }}>Unit</th>
                                    <th style={{ textAlign: "center", width: "15vh" }}>Food</th>
                                    <th style={{ textAlign: "center", width: "10vh" }}>Calories</th>
                                    <th style={{ textAlign: "center", width: "10vh" }}>Weight</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/*  {this.state.qualificationA.map(q => */}
                                <tr>
                                    <td>q.title</td>
                                    <td>q.qualificationID</td>
                                    <td>q.issuedBy</td>
                                    <td>q.issuedDate</td>
                                    <td>q.description</td>
                                    <td className="text-center" ><Button variant="danger" type="submit" >Delete</Button></td>
                                </tr>
                                {/*    )}*/}


                            </tbody>
                        </Table>

                        <Form style={{ padding: "20px" }} >
                            <Form.Group as={Row} controlId="formHorizontalFName" >
                                <Form.Label column sm={2}>
                                    Food
                                </Form.Label>
                                <Col sm={10}>
                               
                                    <input list="food" name="browser" id="browser" onChange={this.onChangeFoodName} style={{height:"40px" , borderRadius:"9px"}}/>
                                    <datalist id="food">
                                        {this.state.foodsuggestions.map(f =>

                                            <option value={f} />
                                        )}

                                    </datalist>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalUserName" >
                                <Form.Label column sm={2}>
                                    Unit
                                </Form.Label>
                                <Col sm={4}>

                                    <Form.Control as="select" required>
                                        <option value="cup">Cup</option>
                                        <option value="ounce">Ounce - OZ</option>
                                        <option value="tablespoon">tablespoon</option>
                                        <option value="whole">whole</option>
                                    </Form.Control>
                                </Col>
                                <Form.Label column sm={2}>
                                    Quantity
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Control type="number" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit" style={{ backgroundColor: "red" }}>Add Meal</Button>
                                </Col>
                            </Form.Group>
                        </Form>

                    </div>





                </div>
            </div>
        )
    }
}
