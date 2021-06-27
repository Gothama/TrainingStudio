import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2'



const siAPI1 = axios.create({
    baseURL: `http://localhost:9020/dietplan/getallpaymentdetails/`
})

const siAPI2 = axios.create({
    baseURL: `http://localhost:9020/dietplan/addpaymentdetails/`
})


export default class ImportantFacts extends Component {

    state = {

        paymentID: "",
        paid: "",
        price: "",
        amount:""

    }

    constructor(props) {
        super(props)
        this.getdata()
    }

    getdata() {
        siAPI1.post('/', { dietplanID: this.props.id },
            {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            }).then(res => {
                console.log(res.data)

                if(res.data.price!==undefined && res.data.price.amount !==undefined){
                    this.setState({

                        amount: res.data.price.amount
                    })
                }
                if(res.data.price!==undefined && res.data.price.paid!==undefined){
                    this.setState({
                        paid: res.data.price.paid ? "True" : "False"
                    })
                }
                console.log(res.data.price.paymentID)

                if (res.data.price!==undefined &&  res.data.price.paymentID !== undefined){
                    this.setState({
                        paymentID: res.data.price.paymentID
                    })
                }
                console.log(this.state.paymentID)

            }).catch(err => {
                window.alert(err)
            })

    }

    onChangePrice=(event)=>{
        event.preventDefault()
        this.setState({
            price:event.target.value
        })
    }

    onChangeAmount=(event)=>{
        event.preventDefault()
        this.setState({
            amount:event.target.value
        })
    }

    onChangeStatus=(event)=>{
        event.preventDefault()

        this.setState({
            paid: event.target.value==="False"?false:true
        })
        console.log(this.state.paid)
    }

    onChangeStatus1=(event)=>{
        
        event.preventDefault()

        this.setState({
            paid:true
        })
        console.log(this.state.paid)
    }

    updateData=(event)=>{
        console.log(this.state.paid)
        siAPI2.post('/', { dietplanID: this.props.id , paid:this.state.paid , amount:this.state.amount},
        {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }).then(res => {
            console.log(res.data)
          
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

                        <Form.Group as={Row} controlId="formHorizontalFName" >
                            <Form.Label column sm={5}>
                                Price for the Diet Plan (Rs)
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control type="text" onChange={this.onChangeAmount} value={this.state.amount}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalFName" >
                            <Form.Label column sm={5}>
                                Payment ID
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control type="text" readOnly value={this.state.paymentID}/>
                            </Col>
                        </Form.Group>

                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={5}>
                                    Payment status
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Check
                                        type="radio"
                                        label="Not Paid"
                                        value="False"
                                        name="formHorizontalRadios"
                                        id="formpaidRadios"
                                        checked={this.state.paid==="False"}
                                        onChange={this.onChangeStatus}
       
                                    />
                                    <Form.Check defaultChecked
                                        type="radio"
                                        label="Paid"
                                        name="formHorizontalRadios"
                                        id="formnotpaidRadios"
                                        value = "True"
                                        checked={this.state.paid==="True"}
                                        onChange={this.onChangeStatus}
                                    />

                                </Col>
                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button variant="warning" onClick={this.updateData}>Update payment</Button>
                                </Col>
                            </Form.Group>
                    </div>
                </div>
            </div>
        )
    }
}
