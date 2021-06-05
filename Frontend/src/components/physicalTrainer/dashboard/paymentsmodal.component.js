import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'


export default class Paymentsmodal extends Component {

    constructor(props){
        super(props)
        this.state={
            show:true
        }
    }
    
    close=()=>{
        this.setState({
            show:false
        })
    }

    render() {
        return (
           <Modal show={this.state.show}>
               <Modal.Header> Modal Header</Modal.Header>
               <Modal.Body>
                   Hi, I am Gothama
               </Modal.Body>
               <Modal.Footer>
                   <Button onClick={this.close}>
                       Close Modal
                   </Button>
               </Modal.Footer>
           </Modal>
        )
    }
}
