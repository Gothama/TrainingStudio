import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2'

const siAPI3 = axios.create({
    baseURL: `http://localhost:9020/dietplan/deletefood/`
})


const siAPI1 = axios.create({
    baseURL: `http://localhost:9020/dietplan/addFoods/`
})

const siAPI2 = axios.create({
    baseURL: `http://localhost:9020/dietplan/getallfood/`
})


export default class DietPlanForm extends Component {
    state = {
        foodsuggestions: [],
        quantity: "",
        foodName: "",
        calories: "",
        weight: "",
        unit: "",
        dietplanID: "",
        food:[]
    }

    constructor(props) {
        super(props)
        this.getallfood()
        this.setState({
            foodsuggestions: [],
            foodName:""
          
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

    getallfood(){
        siAPI2.post('/' , {dietplanID: this.props.id},
        {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }).then(res => {
            console.log(res.data[0].breakfast)
            if(this.props.type==="B"){
                this.setState({
                    food:res.data[0].breakfast
                })
            }
            else if(this.props.type==="L"){
                this.setState({
                    food:res.data[0].lunch
                })
            }
            else if(this.props.type==="D"){
                this.setState({
                    food:res.data[0].dinner
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
                weight: parseFloat(this.state.totalWeight).toFixed(2).toString() ,
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

    deleteFood=(fid)=>{
        siAPI3.post("/" , {
            type:this.props.type,
            dietplanID: this.props.id,
            id:fid
        },
        {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }).then(res => {
            console.log(res.data)
            this.getallfood()
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
                                    <th style={{ textAlign: "center", width: "10vh" }}>Control</th>

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
                                    <td className="text-center" ><Button variant="danger" type="submit" onClick={() => this.deleteFood(f._id)}>Delete</Button></td>
                                </tr>
                             )}


                            </tbody>
                        </Table>

                        <Form style={{ padding: "20px" }} >
                            <Form.Group as={Row} controlId="formHorizontalFName" >
                                <Form.Label column sm={2}>
                                    Food
                                </Form.Label>
                                <Col sm={10}>

                                    <input list="food" name="browser" id="browser" onChange={this.onChangeFoodName} style={{ height: "40px", borderRadius: "9px" }} />
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

                                    <Form.Control as="select" required onChange={this.onChangeUnit} value={this.state.unit}>
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
                                    <Form.Control type="number" required onChange={this.selectQuantity} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button variant="warning" onClick={this.addfood}>Add New Food</Button>
                                </Col>
                            </Form.Group>
                        </Form>

                    </div>





                </div>
            </div>
        )
    }
}
