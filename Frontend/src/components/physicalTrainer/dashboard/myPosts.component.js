
import React, {Component} from 'react';
import Footer from '../../general/footer.component';
import TrainerNav from '../trainerNav.component';
import {Button,Card} from 'react-bootstrap';
import addPostImage from '../../../assets/images/addpost.png'
import Post1 from '../../../assets/images/thirdtrainer1.png'
import Post2 from '../../../assets/images/signinoutBg.jpg'
import Post3 from '../../../assets/images/trainerPost1.png'

export default class MyPosts extends Component{
  
    render(){
return(
  <div>

<TrainerNav/>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >

<div className="container" style={{/*paddingTop:"100px" ,*/ paddingBottom:"100px" }}>
{/*<h1 style={{color:"white", paddingBottom:"20px"}}>My Posts</h1>*/}
<div className="row" >      


<Card className="bg-dark text-white" style={{ width: '65rem',margin:"0.5rem"}}>
  <Card.Img src={addPostImage} alt="Card image" />
  <Card.ImgOverlay >
    <Card.Title style={{ color:"white", fontSize:"30px", lineHeight:"80px", fontWeight:"bolder"}}>Lets Add New Post</Card.Title>
    <Card.Text style={{ color:"white", fontSize:"30px", lineHeight:"60px", fontWeight:"bolder"}}>
    you can earn attention by creating something interesting and valuable and then publishing it online for free.
    </Card.Text>
    <Button variant="danger">Add New Post</Button> 
  </Card.ImgOverlay>
</Card>

</div>     
<div className="row" >  
<Card style={{ width: '32rem', margin:"0.5rem"}}>
  <Card.Img variant="top" src= {Post1} />
  <Card.Body>
    <Card.Title>Mr.Kamal's Story</Card.Title>
    <Card.Text>
    <p style={{color:"black"}}>
    Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, 
    occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest.[3]
    Before the industrial revolution, fitness was defined as the capacity to carry out the day’s activities without undue fatigue. </p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '32rem', margin:"0.5rem" }}>
  <Card.Img variant="top" src={Post2} />
  <Card.Body>
  <Card.Title>Do you want to be slim?</Card.Title>
    <Card.Text>
    <p style={{color:"black"}}>
    Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, 
    occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest.[3]
    Before the industrial revolution, fitness was defined as the capacity to carry out the day’s activities without undue fatigue. </p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '32rem' , margin:"0.5rem"}}>
  <Card.Img variant="top" src={Post3} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <p style={{color:"black"}}>
    Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, 
    occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest.[3]
    Before the industrial revolution, fitness was defined as the capacity to carry out the day’s activities without undue fatigue.</p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '32rem' , margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <p style={{color:"black"}}>
    Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, 
    occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest.[3]
    Before the industrial revolution, fitness was defined as the capacity to carry out the day’s activities without undue fatigue. </p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>
</div>
<div className="row" >  
<Card style={{ width: '32rem' , margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <p style={{color:"black"}}>
    Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, 
    occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest.[3]
    Before the industrial revolution, fitness was defined as the capacity to carry out the day’s activities without undue fatigue. </p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '32rem' , margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <p style={{color:"black"}}>
    Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, 
    occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest.[3]
    Before the industrial revolution, fitness was defined as the capacity to carry out the day’s activities without undue fatigue. </p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '32rem' , margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <p style={{color:"black"}}>
    Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, 
    occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest.[3]
    Before the industrial revolution, fitness was defined as the capacity to carry out the day’s activities without undue fatigue. </p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '32rem' , margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text><p style={{color:"black"}}>
    Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, 
    occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest.[3]
    Before the industrial revolution, fitness was defined as the capacity to carry out the day’s activities without undue fatigue. </p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>
</div>
</div>  </div>   

    <Footer/>
    </div>
  
);
}
} 