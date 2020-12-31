
import React, {Component} from 'react';
//import {Link} from 'react-router-dom';

import image from "../../../assets/images/p1.png"
import Dropzone from "react-dropzone";
import {Card} from 'react-bootstrap';
import Icon from '@material-ui/core/Icon'

export default class AddHealthDetails extends Component{
  
    render(){
      
return(
    <div style={{backgroundColor:"#007bff",padding:"20px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={image} className ="rounded avatar" alt="..."  style={{height:"120px",width:"120px", borderRadius:"50%"}}/>
            </div>


<div className="text-center row ">
      <Card style={{ width: '18rem', margin:"20px"}}>
  <Card.Body>
  <div className="text-center mt-5" style ={{backgroundColor:"white"}}>
        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              
              <Icon className="fa fa-plus-circle" style={{ fontSize: 80 }} color="primary"/>
            </div>
          )}
        </Dropzone>
      </div>
  </Card.Body>
</Card>


<Card style={{ width: '18rem', margin:"20px"}}>
  <Card.Body>
  <div className="text-center mt-5" style ={{backgroundColor:"white"}}>
        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Icon className="fa fa-plus-circle" style={{ fontSize: 80 }} color="primary"/>
            </div>
          )}
        </Dropzone>
      </div>
  </Card.Body>
</Card>
</div>

    </div>
);
}
}   