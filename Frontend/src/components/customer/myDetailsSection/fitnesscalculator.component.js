
import React, {Component} from 'react';

import {Button,Card,Form,Row,Col} from 'react-bootstrap';




export default class FitnessCalculator extends Component{

state={
  height:"",
  weight:"",
  bmi:"",
  comment:"",
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
  var b = this.state.weight / (this.state.height * this.state.height);
  this.setState({
    bmi:b,
    weight:"",
    height:""
  })

}

bfpCal=()=>{
  var b = this.state.weight / (this.state.height * this.state.height);
  var bfp1 = (1.2 * b) + (0.23* this.state.age) - (10.8*this.state.gender) - 5.4
  this.setState({
    bfp:bfp1,
    weight:"",
    height:"",
    age:"",
    gender:""
  })
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



on


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
      Height:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Height" defaultValue="Height"  onChange={this.onChangeHeight}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Weight:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number"  defaultValue="Weight" onChange={this.onChangeWeight}/>
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
      <Form.Control type="text" readOnly placeholder="Comment"/>
    </Col>
  </Form.Group>

    <Button variant="primary" type="file" onClick={this.bmiCal}>Calculate</Button>
  </Card.Body></div>
</Card>

</div>

<div className ="row  text-center" style={{paddingLeft:"10px" , paddingTop:"20px"}}>


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
      <Form.Control type="number" placeholder="Height" onChange={this.onChangeHeight}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Weight:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Weight" onChange={this.onChangeWeight}/>
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
          name="formHorizontalRadios"
          id="formGenderFemailRadios1"
        />
        <Form.Check defaultChecked
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formGenderMaleRadios2"
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
      <Form.Control type="text" readOnly placeholder="Comment" />
    </Col>
  </Form.Group>

    <Button variant="primary" type="file" onClick={this.leanbodymassCal}>Calculate</Button>
  </Card.Body></div>
</Card>

</div>

<div className ="row  text-center" style={{paddingLeft:"10px" , paddingTop:"20px"}}>


<Card style={{ width: '15rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU0v8-3bGQFqmy-1ACr4xGumCummW_8ZK6Uw&usqp=CAU"}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Body Fat Percentage</Card.Title>
    <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Height:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Height"  onChange={this.onChangeHeight}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Weight:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Weight"   onChange={this.onChangeWeight}/>
    </Col>
  </Form.Group>


  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Age:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Age"  onChange={this.onChangeAge}/>
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
          name="formHorizontalRadios"
          id="formGenderFemailRadios1"
          onChange={this.onChangeFemale}
        />
        <Form.Check defaultChecked
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formGenderMaleRadios2"
          onChange={this.onChangeMale}
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
      <Form.Control type="text" readOnly placeholder="Comment"/>
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