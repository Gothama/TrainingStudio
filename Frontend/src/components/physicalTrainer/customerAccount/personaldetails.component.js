import React, { Component } from 'react';
import { Form, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2'
import "react-datepicker/dist/react-datepicker.css";


const siAPI1 = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}general/customerdetails/`
})



export default class PersonalDetails extends Component {
    state = {
        fName: "",
        lName: "",
        dob: "",
        email: "",
        gender: "Male",
        bloodGroup: "ABPositive",
        phoneNumber: "",
        profilephotolink: "",
        image: "",

    }

    
    constructor(props) {
        super(props)

        siAPI1.post("/", 
        {
            id: this.props.id
        }
        ).then(res => {
                console.log(res.data)

                this.setState({
                    fName: res.data.name.fName,
                    lName: res.data.name.lName,
                    dob: (moment(res.data.dob).format("yyyy-MM-DD")),
                    email: res.data.email,
                    gender: res.data.gender,
                    bloodGroup: res.data.bloodGroup,
                    phoneNumber: res.data.phoneNumber,
                    profilephotolink: res.data.profilephotolink
                })

            }).catch(err => {
                window.alert(err)
            })
    }





    render() {
        return (
            <div style={{ backgroundColor: "#007bff", padding: "20px", paddingTop: "80px" }}>
                <div className="text-center" style={{ marginTop: "-60px" }}>
                    <img src={this.state.profilephotolink} className="rounded avatar" alt="..." style={{ height: "150px", width: "150px", borderRadius: "50%" }} />
                </div>
                <Form style={{ padding: "20px" }}>
                    <Form.Group as={Row} controlId="formHorizontalFName" >
                        <Form.Label column sm={2}>
                            First Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" Value={this.state.fName} readOnly />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalLName" >
                        <Form.Label column sm={2}>
                            Last Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" Value={this.state.lName} readOnly />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
                        <Form.Label column sm={2}>
                            Mobile No.
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" Value={this.state.phoneNumber} readOnly />

                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} controlId="formHorizontalDOB">
                        <Form.Label column sm={2}>
                            Date of Birth
                        </Form.Label>
                        <Col sm={10}>
                            <input type="date" dateFormat="MM-dd-yyyy" readOnly defaultValue={this.state.dob} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalAge">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" Value={this.state.email} readOnly />

                        </Col>
                    </Form.Group>

                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Gender
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    value="Female"
                                    name="formHorizontalRadios"
                                    id="formGenderFemailRadios1"
                                    checked={this.state.gender === "Female"}
                                    onChange={this.onChangegender}
                                    readOnly
                                />
                                <Form.Check defaultChecked
                                    type="radio"
                                    label="Male"
                                    name="formHorizontalRadios"
                                    id="formGenderMaleRadios2"
                                    value="Male"
                                    checked={this.state.gender === "Male"}
                                    onChange={this.onChangegender}
                                    readOnly
                                />

                            </Col>
                        </Form.Group>
                    </fieldset>



                    <Form.Group as={Row} controlId="formHorizontalAge">
                        <Form.Label column sm={2}>
                            Blood Group
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" Value={this.state.bloodGroup} readOnly />

                        </Col>
                    </Form.Group>



                </Form>

            </div>
        );
    }
}