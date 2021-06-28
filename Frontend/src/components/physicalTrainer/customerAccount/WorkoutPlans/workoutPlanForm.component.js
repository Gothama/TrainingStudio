import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2'
import data1 from './../../data1.json'

const siAPI3 = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}dietplan/deletefood/`
})


const siAPI1 = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}workoutplan/addWorkouts/`
})

const siAPI2 = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}workoutplan/getallworkouts/`
})


export default class WorkoutPlanForm extends Component {

    state = {
        workoutsuggestions: data1,
        reps: "",
        exercisename: "",
        sets: "",
        musclegroup: "",
        method: "",
        workoutplanID: "",
        workouts: [],
        videoURL: ""
    }

    constructor(props) {
        super(props)
        this.getallworkouts()
        this.setState({
            workoutsuggestions: data1,
            exercisename: ""

        })
        console.log(data1)

    }

    onChangeExerciseName = (event) => {
        event.preventDefault()
        this.setState({
            exercisename: event.target.value
        })


        /*axios.get("https://wger.de/api/v2/exercise/?format=json&limit=100").then(res => {
            console.log(res.data.results)
         this.setState({
              workoutsuggestions: res.data.results
           })

        }).catch(err => {
            window.alert(err)
      })
      this.setState({
        workoutsuggestions: data1
     })*/
    }

    onChangeSets = (event) => {
        event.preventDefault()
        this.setState({
            sets: event.target.value
        })
        data1.map(j => {
            // console.log(j.video)
            if (j.name === this.state.exercisename) {
                this.setState({
                    videoURL: j.video
                })
                console.log(this.state.videoURL)

            }
        }

        )

    }

    getallworkouts() {
        siAPI2.post('/', { workoutplanID: this.props.id, day: this.props.day },
            {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            }).then(res => {

                console.log(res.data.workoutschedule)
                if (true) {
                    this.setState({
                        workouts: res.data.workoutschedule.filter(w => w.day === this.props.day)
                    })
                }

                else {
                    this.setState({
                        workouts: []
                    })
                }
            }).catch(err => {
                window.alert(err)
            })

    }

    onChangeReps = (event) => {

        event.preventDefault()
        this.setState({
            reps: event.target.value
        })
        console.log(this.state.reps)
    }

    addWorkout = () => {


        siAPI1.put("/", {
            exercisename: this.state.exercisename,
            reps: this.state.reps,
            sets: this.state.sets,
            day: this.props.day,
            workoutplanID: this.props.id,
            videoURL: this.state.videoURL
        },
            {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            }).then(res => {
                console.log(res.data)
                this.setState({
                    videoURL: ""
                })
                this.getallworkouts()
            }).catch(err => {
                window.alert(err)
            })



    }

    deleteFood = (fid) => {
        siAPI3.post("/", {
            type: this.props.type,
            dietplanID: this.props.id,
            id: fid
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
        let k = this.state.workoutsuggestions.filter(e => {

            return e.name.toLowerCase().indexOf(this.state.exercisename) !== -1
        })
        return (
            <div>
                <div style={{ backgroundColor: "#007bff", padding: "20px", marginTop: "60px" }}>
                    <div className="text-center" style={{ marginTop: "-60px", paddingBottom: "20px" }}>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU0v8-3bGQFqmy-1ACr4xGumCummW_8ZK6Uw&usqp=CAU"} className="rounded avatar" alt="..." style={{ height: "150px", width: "200px", borderRadius: "50%" }} />
                    </div>
                    <div>
                        <Table striped bordered hover variant="dark" className="col-lg-12 col-md-12 col-xs-12">
                            <thead >
                                <tr >

                                    <th style={{ textAlign: "center", width: "5vh" }}>Exercise Name</th>
                                    <th style={{ textAlign: "center", width: "5vh" }}>Reps</th>
                                    <th style={{ textAlign: "center", width: "15vh" }}>Sets</th>
                                    {/*  <th style={{ textAlign: "center", width: "10vh" }}>Muscle Group</th>
                                   <th style={{ textAlign: "center", width: "10vh" }}>Weight</th>*/}
                                    <th style={{ textAlign: "center", width: "10vh" }}>Video URl</th>
                                    <th style={{ textAlign: "center", width: "10vh" }}>Control</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.workouts.map(f =>
                                    <tr>
                                        <td>{f.exercisename}</td>
                                        <td>{f.reps}</td>
                                        <td>{f.sets}</td>
                                        <td><a href={f.videoURL} style={{ color: "white" }}><Button variant="warning" >Open Video</Button></a></td>
                                        {/*  <td>{f.musclegroup} Kcal</td>
                                    <td>{f.weight} g</td>*/}
                                        <td className="text-center" ><Button variant="danger" type="submit" >Delete</Button></td>
                                    </tr>
                                )}


                            </tbody>
                        </Table>

                        <Form style={{ padding: "20px" }} >
                            <Form.Group as={Row} controlId="formHorizontalFName" >
                                <Form.Label column sm={2}>
                                    Exercise Name
                                </Form.Label>
                                <Col sm={10}>

                                    <input list="workout" name="browser" id="browser" onChange={this.onChangeExerciseName} style={{ height: "40px", borderRadius: "9px" }} />
                                    <datalist id="workout">
                                        {data1.map(f =>

                                            <option value={f.name} />
                                        )}

                                    </datalist>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalUserName" >
                                <Form.Label column sm={2}>
                                    Reps
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Control type="number" required onChange={this.onChangeReps} />
                                </Col>
                                <Form.Label column sm={2}>
                                    Sets
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Control type="number" required onChange={this.onChangeSets} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button variant="warning" onClick={this.addWorkout}>Add New Workout</Button>
                                </Col>
                            </Form.Group>
                        </Form>

                    </div>





                </div>
            </div>
        )
    }
}
