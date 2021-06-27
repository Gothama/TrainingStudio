import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { PayPalButton } from "react-paypal-button-v2";



const siAPI1 = axios.create({
    baseURL: `http://localhost:9020/dietplan/addFoods/`
})

const siAPI2 = axios.create({
    baseURL: `http://localhost:9020/dietplan/getallfood/`
})


export default class MyDietPlanForm extends Component {
    state = {
        foodsuggestions: [],
        quantity: "",
        foodName: "",
        calories: "",
        weight: "",
        unit: "",
        dietplanID: "",
        food: [],
        paid:"",
        trainerID:""
    }

    constructor(props) {
        super(props)
        this.getallfood()
        this.setState({
            foodsuggestions: [],
            foodName: ""

        })
        // console.log(this.props.match.params.id)

    }

    onChangeFoodName = (event) => {
        event.preventDefault()
        this.setState({
            foodsuggestions: [],
            foodName: event.target.value
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

    selectQuantity = (event) => {
        event.preventDefault()
        this.setState({
            quantity: event.target.value
        })
    }

    getallfood() {
        siAPI2.post('/', { dietplanID: this.props.id },
            {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            }).then(res => {
                console.log(res.data[0].price.paid)
                if (this.props.type === "B") {
                    this.setState({
                        food: res.data[0].breakfast,
                        paid:res.data[0].price.paid,
                        trainerID:res.data[0].trainerID
                    })
                }
                else if (this.props.type === "L") {
                    this.setState({
                        food: res.data[0].lunch,
                        paid:res.data[0].price.paid,
                        trainerID:res.data[0].trainerID
                    })
                }
                else if (this.props.type === "D") {
                    this.setState({
                        food: res.data[0].dinner,
                        paid:res.data[0].price.paid,
                        trainerID:res.data[0].trainerID
                    })
                }
            }).catch(err => {
                window.alert(err)
            })

    }

    onChangeUnit = (event) => {

        event.preventDefault()
        this.setState({
            unit: event.target.value
        })
        console.log(this.state.unit)
    }

    addfood = () => {
        var k = this.state.quantity + " " + this.state.unit + " " + this.state.foodName
        console.log(k)
        axios.post("https://api.edamam.com/api/nutrition-details?app_id=5effcac5&app_key=8f9f753f0386a290283ee5274ccc7c24", {
            ingr: [
                k
            ]
        }).then(res => {
            console.log(res.data.calories)
            this.setState({
                calories: res.data.calories,
                totalWeight: res.data.totalWeight
            })

            siAPI1.put("/", {
                calories: this.state.calories,
                weight: this.state.totalWeight,
                unit: this.state.unit,
                quantity: this.state.quantity,
                food: this.state.foodName,
                type: this.props.type,
                dietplanID: this.props.id
            },
                {
                    headers: { Authorization: "Bearer " + localStorage.getItem("token") }
                }).then(res => {
                    console.log(res.data)
                    this.getallfood()
                }).catch(err => {
                    window.alert(err)
                })


        }).catch(err => {
            window.alert(err)
        })
    }

    onclickCompleted=(fid)=>{
        
        console.log("Pressed" + fid)
        axios.post("http://localhost:9020/dietplan/updatecompletedfood/" , {id:this.props.id , foodID:fid , completed:true} ,
        {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }).then(res => {
            console.log(res.data)
            this.getallfood()
        }).catch(err => {
            window.alert(err)
        })


    }

    
  onPaymentSuccess = (details, data) => {
    // alert("Transaction completed by " + details.payer.name.given_name);

    // OPTIONAL: Call your server to save the transaction
    console.log(data);

    if (data.payerID !== null) {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}dietplan/makepaymentsfordietplan`, { eid: this.state.trainerID, paymentamount: 200, dietplanID:this.props.id}, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }).then(res => {
        console.log(res.data)
      })
    }
    this.setState({
        paid: true
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
                        {this.state.paid === true?
                        <Table striped bordered hover variant="dark" className="col-lg-12 col-md-12 col-xs-12">
                            <thead >
                                <tr >

                                    <th style={{ textAlign: "center", width: "5vh" }}>Quantity</th>
                                    <th style={{ textAlign: "center", width: "5vh" }}>Unit</th>
                                    <th style={{ textAlign: "center", width: "15vh" }}>Food</th>
                                    <th style={{ textAlign: "center", width: "10vh" }}>Calories</th>
                                    <th style={{ textAlign: "center", width: "10vh" }}>Weight</th>
                                    <th style={{ textAlign: "center", width: "10vh" }}>completed</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.food.map(f =>
                                    <tr>
                                        <td>{f.quantity}</td>
                                        <td>{f.unit}</td>
                                        <td>{f.foodname}</td>
                                        <td>{f.calories} Kcal</td>
                                        <td>{f.weight} g</td>
                                        <td> Done:  <input
                                            name="completed"
                                            type="checkbox"
                                            onChange={()=>this.onclickCompleted(f._id)}/>
                                        </td>
                                    </tr>
                                )}


                            </tbody>
                        </Table>
                        :
                        <PayPalButton amount="200"  onSuccess={(details, data) => this.onPaymentSuccess(details, data)} />
                    
                    }



                    </div>





                </div>
            </div>
        )
    }
}
