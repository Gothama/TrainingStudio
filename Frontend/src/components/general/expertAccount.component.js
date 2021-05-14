import React, {Component} from 'react';
import {Button,Carousel, Form, Row, Col, ProgressBar} from 'react-bootstrap';
import image1 from "../../assets/images/line-dec.png"
import TrainerImage from "../../assets/images/trainers/trainer-1.jpg"
import Navbar from "./navbar.component";
import Footer from './footer.component';
import Header from './header.component';
import QualificationDetails from './qualificationdetails.component';
import { PayPalButton } from "react-paypal-button-v2";

export default class ExpertAccount extends Component{
  state={
    fName:"",
    lName:"",
    email:"",
    gender:"Male",
    phoneNumber:"",
    username:"",
    password:"",
    cardNumber:"",
    expiryDate:"",
    nameOnCard:"",
    code:"",
    fee:"",
    profilephotolink:"",
    uploading:"",
    image:"",
    register:false
  }

  constructor(props){
    super(props)
    // window.alert(this.props.match.params.type)
    //window.alert(this.props.match.params.id)

  }
  register=(event)=>{
    event.preventDefault();
    this.setState({register:true})
  }
  onPaymentSuccess=(details, data)=>{
    alert("Transaction completed by " + details.payer.name.given_name);
    
    // OPTIONAL: Call your server to save the transaction
    console.log(data.orderID);
    }
  
    render(){
return(
    <div>
   
      <Navbar/>
      <Header/>
      <section className="cta2" style={{paddingBottom:"50px"}}>
        <div className="container" style={{paddingTop:"100px"}}>
            <div style={{backgroundColor:"#007bff",padding:"20px",marginTop:"60px" , borderRadius:"15px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={"https://res.cloudinary.com/dbecgupu0/image/upload/v1620056410/dakgperuws4bdo5sc6mf.jpg"} className ="rounded avatar" alt="..."  style={{height:"150px",width:"150px", borderRadius:"50%"}}/>
            </div>

            <Form style={{padding:"20px"}} onSubmit={this.handleOnSubmit}>
              <Form.Group as={Row} controlId="formHorizontalFName" >
                <Form.Label column sm={2}>
                    First Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text"  Value={this.state.fName} readOnly/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalLName" >
                <Form.Label column sm={2}>
                    Last Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text"  Value={this.state.lName} readOnly/>
                </Col>
              </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Fee per plan
                  </Form.Label>
                  <Col sm={10}>
                  <Form.Control type="number"  Value={this.state.fee} readOnly />
                  </Col>
                </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                {localStorage.getItem("AccountType")==="Trainer" ?<div><Button type="submit" style={{backgroundColor:"red"}}>Trainers cant Register</Button></div>
                  : <div> {!this.state.register ? <div><Button type="submit" style={{backgroundColor:"red"}} onClick={this.register}>Register</Button> </div> : null}</div>
                }

                {this.state.register ? <div style={{width:"10px"}}> <PayPalButton amount="200" onSuccess={(details, data) => this.onPaymentSuccess()}/></div>:null }
            
                </Col>
              </Form.Group>
            </Form>
            <QualificationDetails/>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
);
}
}   