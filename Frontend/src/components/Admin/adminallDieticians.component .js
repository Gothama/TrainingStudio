import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {Chart} from 'react-google-charts';
import moment from 'moment';

export default class AdminAllDieticians extends Component{
  state={
    trainers:[],
    show: false,
    trainersinmonth:[],
    trainersinyear:[]
  }

constructor(){
  super();
  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/allDtrainers` ).then(res=>{
    this.setState({
      trainers:res.data
    })
  }).catch(err => {
    window.alert(err)
  })
  this.getyeardata();
  this.getmonthdata();
}

getyeardata=()=>{
  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/registeredtrainersperyear` ).then(res=>{
    let trainersinyear1=[['Year', 'Count'], ["2014",8], ["2015",0], ["2016",3], ["2017",5]] 
    for (const dataObj of res.data) {
      trainersinyear1.push([(dataObj._id),parseInt(dataObj.count)]);
    }

    this.setState({
      trainersinyear:trainersinyear1
    })
    console.log(this.state.trainersinyear)

  }).catch(err => {
    window.alert(err)
  })
}


getmonthdata=()=>{
  axios.get(`${process.env.REACT_APP_BACKEND_URL}admin/registeredtrainerspermonth` ).then(res=>{
    let trainersinmonth1=[['Month', 'Count'],['January' , 8],['February' , 3],['March' , 8]]
    for (const dataObj of res.data) {
      trainersinmonth1.push([moment().month(parseInt(dataObj._id)).format('MMMM'),parseInt(dataObj.count)]);
    }

    this.setState({
      trainersinmonth:trainersinmonth1
    })
    console.log(this.state.trainersinmonth)

  }).catch(err => {
    window.alert(err)
  })
}

close = () => {
  this.setState({
    show: false
  })
}

successfulmessage=(msg)=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: msg,
    showConfirmButton: false,
    timer: 1500
  })
}


unsuccessfulmessage=(msg)=>{
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: msg,
    showConfirmButton: false,
    timer: 1500
  })
}


showpayments = (id) => {
  //console.log(id)
  axios.post(`${process.env.REACT_APP_BACKEND_URL}payment/paymentsoftrainer`, { receiverID: id }
  ).then(res => {
    console.log(res)
    this.setState({
      show: true,
      paymentsDetails: res.data

    })
    console.log(this.state.show)
  }).catch(err => {
    alert(err)
  })
}

deletedietician=(id)=>{
  axios.post(`${process.env.REACT_APP_BACKEND_URL}admin/tdelete/` + id ).then(res=>{
    console.log(res.data)
    if(res.data === "okay"){
        this.successfulmessage("Successfully unregistered from the Web Platform")
        window.location.reload()
    }
    else{
        this.unsuccessfulmessage("Unsucessful")
    }
  }).catch(err => {
    window.alert(err)
  })
}

    render(){
return(

<div>

    <div style={{paddingTop:"50px"}} >

<div style={{/*paddingTop:"100px" ,*/ paddingBottom:"100px",width:"100%" }}>


<Table striped bordered hover variant="dark">
  <thead >
    <tr >
      <th >#</th>
      <th style={{textAlign:"center", width:"20vh" }}>First Name</th>
      <th style={{textAlign:"center"}}>Last Name</th>
      <th style={{textAlign:"center"}}>Age</th>
      <th style={{textAlign:"center"}}>Email</th>
      <th style={{textAlign:"center", width:"70vh" }}>Manage</th>
    </tr>
  </thead>
  <tbody>
    {this.state.trainers.map(c=>
 <tr>
      <td>1</td>
      <td>{c.name.fName}</td>
      <td>{c.name.lName}</td>
      <td>{c.age}</td>
      <td>{c.email}</td>
      <td style={{textAlign:"center"}}><Button variant="danger"onClick={()=>this.deletedietician(c._id)}>Unregister</Button> <Link to={`/trainerAccount/trainer/${c._id}`}><Button variant="warning">View Profile</Button></Link> <Button variant="primary" onClick={() => this.showpayments(c._id)}>Recieved Payments</Button></td>
    </tr>


    )}
   

  </tbody>
</Table>
{this.state.show ? <Modal show={this.state.show} >
              <Modal.Header>Payments Done</Modal.Header>
              <Modal.Body>
                <Table striped bordered hover variant="dark">
                  <thead >
                    <tr >
                      <th style={{ textAlign: "center"}}>Reason</th>
                      <th style={{ textAlign: "center" }}>Paid by</th>
                      <th style={{ textAlign: "center" }}>Amount</th>
                      <th style={{ textAlign: "center" }}>Paid Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.paymentsDetails.map(pd => {
                    return ( <tr><td>{pd.reason}</td> <td>{pd.payerID.name.fName} {pd.payerID.name.lName}</td><td>{pd.paymentamount}</td><td><Moment format="YYYY/MM/DD">{pd.paymentdate}</Moment></td></tr>)
                  })}
              </tbody>
            </Table>
              </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.close}>
                    Close
                   </Button>
                </Modal.Footer>
            </Modal> : null}
            </div>

<div className="row">
<div className="col-lg-6">
<Chart
  width={'100%'}
  height={'100%'}

  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={this.state.trainersinyear}
  
  options={{
     height:500,
     width:500,
     
    hAxis: {
      title: 'Year',
    },
    vAxis: {
      title: 'Count',
    },
    colors: ['#F56F07'],
    chart: {
        title: 'Registered Dieticians in each year',
      },
    series: {
      1: { curveType: 'function' },
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
</div>
<div className="col-lg-6">
<Chart
  width={'100%'}
  height={'100%'}
  
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={this.state.trainersinmonth}
  options={{
     height:500,
     width:500,

    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Count',
    },
  
    colors: ['#f54748'],
    chart: {
        title: 'Registered Dieticians in each Month',
       
      },
    series: {
      1: { curveType: 'function' },
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
</div>

</div>



</div>


    </div>
);
}
}   