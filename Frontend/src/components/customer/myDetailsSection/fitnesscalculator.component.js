
import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {Button,Card,Form,Row,Col} from 'react-bootstrap';




export default class FitnessCalculator extends Component{
  
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
      <Form.Control type="text" placeholder="Email" defaultValue="Weight"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Weight:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Weight"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Your BMI: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Your BMI"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Comment: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Comment"/>
    </Col>
  </Form.Group>

    <Button variant="primary" type="file">Calculate</Button>
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
      <Form.Control type="text" placeholder="Email" defaultValue="Weight"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Weight:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Weight"/>
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
      Your BMI: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Your Leam Body Mass Index"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Comment: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Comment"/>
    </Col>
  </Form.Group>

    <Button variant="primary" type="file">Calculate</Button>
  </Card.Body></div>
</Card>

</div>

<div className ="row  text-center" style={{paddingLeft:"10px" , paddingTop:"20px"}}>


<Card style={{ width: '15rem', margin:"10px"}} className="col">
  <div className="text-center" style={{ padding:"10px"}}>
  <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU0v8-3bGQFqmy-1ACr4xGumCummW_8ZK6Uw&usqp=CAU"}  style={{ width: '150px', height:"150px"}}/>
  <Card.Body>
    <Card.Title>Lean Body Mass</Card.Title>
    <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Height:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Weight"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Weight:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Weight"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Neck:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Neck"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Waist:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Waist"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Age:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Age" defaultValue="20"/>
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
      Your BMI: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Your Leam Body Mass Index"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Comment: 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Email" defaultValue="Comment"/>
    </Col>
  </Form.Group>

    <Button variant="primary" type="file">Calculate</Button>
  </Card.Body></div>
  </Card>

  </div>
    </div>
);
}
}   