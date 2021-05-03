import axios from 'axios';
import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import {Button,Carousel, Form, Row, Col} from 'react-bootstrap';
import Moment from 'react-moment';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';

export default class QualificationDetails extends Component {

  state={
    issuedDate:"",
    qualificationID:"",
    linkTo:"",
    title:"",
    issuedBy:"",
    description:"",
    qualificationA:[]

  }

  

  constructor(){
    super()

  }

    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark" style={{borderRadius:"10px"}}>
                    <thead >
                        <tr >
                        
                        <th style={{textAlign:"center", width:"5vh" }}>Title</th>
                        <th style={{textAlign:"center",width:"10vh"}}>qualification ID</th>
                        <th style={{textAlign:"center",width:"10vh"}}>Issued By</th>
                        <th style={{textAlign:"center",width:"10vh"}}>Issued Date</th>
                        <th style={{textAlign:"center",width:"10vh"}}>Description</th>
                        <th style={{textAlign:"center",width:"10vh"}}>Link To</th>
                        
                        </tr>
                    </thead>
                    <tbody>

                        <tr>  
                        <td>{"q.title"}</td>
                        <td>{"q.qualificationID"}</td>
                        <td>{"q.issuedBy"}</td>
                        <td><Moment format="YYYY/MM/DD">{"q.issuedDate"}</Moment></td>
                        <td>{"q.description"}</td>
                        <td><a href ={"www.q.lk"}><Button variant="warning">View</Button></a></td>
                        </tr> 
                    </tbody>
                </Table>
            </div>
        )
    }
}
