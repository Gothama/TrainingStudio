
import React, {Component} from 'react';

import {Button,Card,Form,Row,Col} from 'react-bootstrap';




export default class FitnessCalculator extends Component{

state={
  height:"",
  weight:"",
  bmi:"",
  comment1:"",
  comment2:"",
  comment3:"",
  gender:"",
  bfp:"",
  waist:"",
  age:"",
  lbm:""
}


  
leanbodymassCal=()=>{
    var l = 0.407*this.state.weight + 0.267 * this.state.height - 19.2;
   

    this.setState({
      lbm:l,
      weight:"",
      height:""
    })

}

bmiCal=()=>{
  if(!(this.state.weight==="" && this.state.height==="")){


  var b = (this.state.weight / ((this.state.height * this.state.height) / 10000)).toFixed(2);
  var c = "";
  console.log( this.state.weight + " " + this.state.height)
  if(b<18.5){
    c = "You are Underweight Range"
  }
  else if(b>18.5 && b<24.9){
    c = "You are Healthy Range"
  }
  else if(b>25 && b<29.9){
    c = "You are Overweight Range"
  }
  else if(b>30 && b<39.9){
    c = "You are Obese Range"
  }
  else{
    c = "You are Extremely Obese Range"
  }

  this.setState({
    bmi:b,
    weight:"",
    height:"",
    comment1: c
  })
  }
}

bfpCal=()=>{

  if(!(this.state.weight==="" && this.state.height==="")){
    var b = (this.state.weight / ((this.state.height * this.state.height) / 10000)).toFixed(2);
  var bfp1 = (1.2 * b) + (0.23* this.state.age) - (10.8*this.state.gender) - 5.4
  
  let c = ""
  if(this.state.gender===0){
    if(this.state.age<39 && this.state.age>20 && bfp1<21){
      c = "Low"
    }
    else if(this.state.age<39 && this.state.age>20 && bfp1>21 && bfp1<33){
      c = "Healthy"
    }
    else if(this.state.age<39 && this.state.age>20 && bfp1>33 && bfp1<39){
      c = "Overweight"
    }
    else if(this.state.age<39 && this.state.age>20 && bfp1>39){
      c = "Obese"
    } //
    else if(this.state.age<59 && this.state.age>40 && bfp1<23){
      c = "Low"
    }
    else if(this.state.age<59 && this.state.age>40 && bfp1>23 && bfp1<35){
      c = "Healthy"
    }
    else if(this.state.age<59 && this.state.age>40 && bfp1>35 && bfp1<40){
      c = "Overweight"
    }
    else if(this.state.age<59 && this.state.age>40 && bfp1>40){
      c = "Obese"
    }//
    else if(this.state.age<79 && this.state.age>60 && bfp1<24){
      c = "Low"
    }
    else if(this.state.age<79 && this.state.age>60 && bfp1<36 && bfp1>24){
      c = "Healthy"
    }
    else if(this.state.age<79 && this.state.age>60 && bfp1<42 && bfp1>36){
      c = "Overweight"
    }
    else if(this.state.age<79 && this.state.age>60 && bfp1>42){
      c = "Obese"
    }
  }
  else{
    if(this.state.age<39 && this.state.age>20 && bfp1<21){
      c = "Low"
    }
    else if(this.state.age<39 && this.state.age>20 && bfp1>21 && bfp1<33){
      c = "Healthy"
    }
    else if(this.state.age<39 && this.state.age>20 && bfp1>33 && bfp1<39){
      c = "Overweight"
    }
    else if(this.state.age<39 && this.state.age>20 && bfp1>39){
      c = "Obese"
    } //
    else if(this.state.age<59 && this.state.age>40 && bfp1<23){
      c = "Low"
    }
    else if(this.state.age<59 && this.state.age>40 && bfp1>23 && bfp1<35){
      c = "Healthy"
    }
    else if(this.state.age<59 && this.state.age>40 && bfp1>35 && bfp1<40){
      c = "Overweight"
    }
    else if(this.state.age<59 && this.state.age>40 && bfp1>40){
      c = "Obese"
    }//
    else if(this.state.age<79 && this.state.age>60 && bfp1<24){
      c = "Low"
    }
    else if(this.state.age<79 && this.state.age>60 && bfp1<36 && bfp1>24){
      c = "Healthy"
    }
    else if(this.state.age<79 && this.state.age>60 && bfp1<42 && bfp1>36){
      c = "Overweight"
    }
    else if(this.state.age<79 && this.state.age>60 && bfp1>42){
      c = "Obese"
    }
  }



  this.setState({
    bfp:bfp1,
    weight:"",
    height:"",
    age:"",
    gender:"",
    comment2:"Your Body Fat Percentage is " + c
  })
}
}

onChangeWeight=(event)=>{
  this.setState({
    weight:event.target.value
  })
}

onChangeHeight=(event)=>{
  this.setState({
    height:event.target.value
  })
}

onChangeFemale=()=>{
  this.setState({
    gender:0
  })
}
onChangeMale=()=>{
  this.setState({
    gender:1
  })
}

onChangeAge=(event)=>{
  this.setState({
    age:event.target.value
  })
}

onChangegender= (event)=>{
  let g = ""
  if(event.target.value==="Female"){
    g = 0
  }
  else{
    g=1
  }
  this.setState({
    gender:g
  })
  console.log(this.state.gender)
}


    render(){
return(
    <div style={{backgroundColor:"#007bff",padding:"20px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={"https://thumbs.dreamstime.com/b/fitness-background-calculator-fitness-background-calculator-orange-color-d-illustration-119305553.jpg"} className ="rounded avatar" alt="..."  style={{height:"200px",width:"250px", borderRadius:"50%"}}/>
            </div>
 

<div className ="row  text-center" style={{paddingLeft:"10px" , paddingTop:"20px"}}>


<Card style={{ width: '15rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT4JaFGhi9KY7SCpmvJ0OZ5b5J6xxplzElKA&usqp=CAU"}  style={{ width: '170px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Body Mass Index</Card.Title>
    <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Height (cm):
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Height" defaultValue="Height"  onChange={this.onChangeHeight} value={this.state.height}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Weight (Kg):
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Weight" defaultValue="Weight" onChange={this.onChangeWeight} value={this.state.weight}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Your BMI: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" readOnly defaultValue="Your BMI" value={this.state.bmi}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Comment: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" readOnly placeholder="Comment" value={this.state.comment1}/>
    </Col>
  </Form.Group>

    <Button variant="primary" type="file" onClick={this.bmiCal}>Calculate</Button>
  </Card.Body></div>
</Card>

</div>

<div className ="row  text-center" style={{paddingLeft:"10px" , paddingTop:"20px"}}>

{/*
<Card style={{ width: '15rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={"https://d.newsweek.com/en/full/1626290/newsweek-amplify-satisfying-fat-burn.png?w=1600&h=1600&q=88&f=d4d8f599d173c0820018c8a2da00da47"}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Lean Body Mass</Card.Title>
    <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Height:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Height" onChange={this.onChangeHeight} value={this.state.height}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Weight:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Weight" onChange={this.onChangeWeight} value={this.state.weight}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Gender: 
    </Form.Label>
    <Col sm={2}>
    <Form.Check
          type="radio"
          label="Female"
          value="Female"
          name="formHorizontalRadios"
          id="formGenderFemailRadios1"

          onChange={this.onChangegender}
        />
        <Form.Check defaultChecked
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formGenderMaleRadios2"
          value="Male"

          onChange={this.onChangegender}
        />
       
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Your LBMI: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" readOnly defaultValue="Your Leam Body Mass Index" value={this.state.lbm}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Comment: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" readOnly placeholder="Comment" value={this.state.comment2} />
    </Col>
  </Form.Group>

    <Button variant="primary" type="file" onClick={this.leanbodymassCal}>Calculate</Button>
  </Card.Body></div>
</Card>*/}

</div>

<div className ="row  text-center" style={{paddingLeft:"10px" , paddingTop:"20px"}}>


<Card style={{ width: '15rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU0v8-3bGQFqmy-1ACr4xGumCummW_8ZK6Uw&usqp=CAU"}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Body Fat Percentage</Card.Title>
    <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Height (cm):
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Height"  onChange={this.onChangeHeight} value={this.state.height}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
    Weight (Kg):
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Weight"   onChange={this.onChangeWeight}value={this.state.weight}/>
    </Col>
  </Form.Group>


  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Age (in years):
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Age"  onChange={this.onChangeAge} value={this.state.age} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Gender: 
    </Form.Label>
    <Col sm={2}>
    <Form.Check
          type="radio"
          label="Female"
          value="Female"
          name="formHorizontalRadios"
          id="formGenderFemailRadios1"

          onChange={this.onChangegender}
        />
        <Form.Check defaultChecked
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formGenderMaleRadios2"
          value="Male"

          onChange={this.onChangegender}
        />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Your Body Fat %: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" readOnly defaultValue="Your Leam Body Mass Index" value={this.state.bfp}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Comment: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" readOnly placeholder="Comment" value={this.state.comment2}/>
    </Col>
  </Form.Group>

    <Button variant="primary" type="file" onClick={this.bfpCal} >Calculate</Button>
  </Card.Body></div>
  </Card>

  </div>
    </div>
);
}
}   