import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import {Button,Carousel, Form, Row, Col} from 'react-bootstrap';

export default class qualifications extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark" >
  <thead >
    <tr >
     
      <th style={{textAlign:"center", width:"5vh" }}>Qualification Name</th>
      <th style={{textAlign:"center",width:"10vh"}}>Description</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Mark</td>
      <td>Kenneth</td>
    </tr>
    <tr>
      <td>Gothama</td>
      <td>Rajawasam</td>
    </tr>
    <tr>
      <td>Kisal</td>
      <td>Perera</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <td>Hasitha</td>
      <td>Wickramasinghe</td>
    </tr>
    <tr>
      <td>
        <Form.Control type="text"  style={{marginBottom:"2px"}}/>
        <Form.Control type="text"  style={{marginBottom:"2px"}} />
        <Form.Control type="text"  style={{marginBottom:"2px"}}/>
      </td>
      <td>
            <Form.Control type="text"  style={{marginBottom:"2px"}} />
            <Form.Control type="text"   style={{marginBottom:"2px"}}/>
            <Form.Control type="text"   style={{marginBottom:"2px"}}/>
        </td>
    </tr>
  </tbody>
</Table>
            </div>
        )
    }
}
