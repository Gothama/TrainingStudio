import React, { Component } from 'react';
import Footer from '../../general/footer.component';
import TrainerNav from '../trainerNav.component';
import { Form, Row, Col } from 'react-bootstrap';
import image from "../../../assets/images/trainers/blog.jpg"
import axios from 'axios';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';


const siAPI1 = axios.create({
    baseURL:`${process.env.REACT_APP_BACKEND_URL}post`
})

export default class Editpost extends Component {
    state = {
        postContent: "",
        postImage: "",
        postHeading: "",

    }
    constructor(props) {
        super(props)
        console.log(window.location.pathname.split("editpost/")[1])
        siAPI1.post("/getpost",
            {
                postID: this.props.match.params.id
            },
            {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
            .then(res => {
                console.log(res)
                this.setState({
                    postContent: res.data.postContent,
                    postImage: res.data.postImage,
                    postHeading: res.data.postHeading,
                    postSummary: res.data.postSummary
                })

            }).catch(err => {
                window.alert("Front" + err)
            })
    }



    onChangepostContent = (event) => {
        this.setState({
            postContent: event.target.value
        })
    }
    onChangepostImage = (event) => {
        this.setState({
            postImage: event.target.value
        })
    }
    onChangepostHeading = (event) => {
        this.setState({
            postHeading: event.target.value
        })
    }

    handleChange = (content) => {
        this.setState({
            postContent: content
        })
    }



    handleOnSubmit = event => {
        event.preventDefault();
        siAPI1.post("/updateblog",
            {
                postContent: this.state.postContent,
                postImage: this.state.postImage,
                postHeading: this.state.postHeading,
                id: this.props.match.params.id
            },
            {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
            .then(res => {
                console.log(res)
                window.alert("Successfully Updated")
            }).catch(err => {
                window.alert(err)
            })
    }

    render() {
        return (
            <div>

                <TrainerNav />
                <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >

                    <div className="container" style={{ paddingBottom: "100px" }}>



                        <div style={{ backgroundColor: "#007bff", padding: "20px", marginTop: "60px" }}>
                            <div className="text-center" style={{ marginTop: "-60px" }}>
                                <img src={image} className="rounded avatar" alt="..." style={{ height: "150px", width: "150px", borderRadius: "50%" }} />
                            </div>
                            <Form style={{ padding: "20px" }} onSubmit={this.handleOnSubmit}>
                                <Form.Group as={Row} controlId="formHorizontalFName" >
                                    <Form.Label column sm={2}>
                                        Post Heading
    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" Value={this.state.postHeading} onChange={this.onChangepostHeading} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formHorizontalFName" >
                                    <Form.Label column sm={2}>
                                        Post Image
    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" Value={this.state.postImage} onChange={this.onChangepostImage} />
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row} controlId="formHorizontalFName" >
                                    <Form.Label column sm={2}>
                                        Post Content
    </Form.Label>
                                    <Col sm={10}>
                                        <SunEditor onChange={this.handleChange} setContents={this.state.postContent} />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>

                    </div>
                </div>

                <Footer />
            </div>

        );
    }
}

