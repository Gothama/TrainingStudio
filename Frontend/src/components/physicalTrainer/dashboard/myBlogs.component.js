
import React, {Component} from 'react';
import Footer from '../../general/footer.component';
import TrainerNav from '../trainerNav.component';
import {Button,Card} from 'react-bootstrap';
import addBlogImage from '../../../assets/images/addblog.jpg'

export default class MyBlogs extends Component{
  
    render(){
return(
  <div>

<TrainerNav/>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >

<div className="container" style={{/*paddingTop:"100px" , */paddingBottom:"100px" }}>


  <div className="row" >      


<Card className="bg-dark text-white" style={{ width: '67rem',margin:"0.5rem"}}>
  <Card.Img src={addBlogImage} alt="Card image" />
  <Card.ImgOverlay >
    <Card.Title style={{ color:"white", fontSize:"30px", lineHeight:"80px", fontWeight:"bolder"}}>Lets Add New Blog</Card.Title>
    <Card.Text style={{ color:"white", fontSize:"30px", lineHeight:"60px", fontWeight:"bolder"}}>
    you can earn attention by creating something interesting and valuable and then publishing it online for free.
    </Card.Text>
    <Button variant="danger">Add New Blog</Button> 
  </Card.ImgOverlay>
</Card>

</div>

<div className="row" >  
<Card style={{ width: '16rem', margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>What is Fitness?</Card.Title>
    <Card.Text>
    <p style={{color:"black", textAlign:"justify"}}>
    Physical fitness is a state of health and well-being and, more specifically,
    occupations and daily activities.</p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '16rem', margin:"0.5rem" }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1598733097325-42a02678c1a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>Simple Workout </Card.Title>
    <Card.Text>
    <p style={{color:"black", textAlign:"justify"}}>
    Exercise is any bodily activity that enhances or maintains physical fitness and overall health and wellness.</p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '16rem' , margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1573500883698-e3ef47a95feb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
  <Card.Title>Simple Diet Plan </Card.Title>
    <Card.Text>
    <p style={{color:"black", textAlign:"justify"}}>
    Exercise is any bodily activity that enhances or maintains physical fitness and overall health and wellness.</p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '16rem' , margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1573500883495-6c9b16d88d8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>Simple Workout </Card.Title>
    <Card.Text>
    <p style={{color:"black", textAlign:"justify"}}>
    Exercise is any bodily activity that enhances or maintains physical fitness and overall health and wellness.</p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>
</div>

<div className="row" >  
<Card style={{ width: '16rem', margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>What is Fitness?</Card.Title>
    <Card.Text>
    <p style={{color:"black", textAlign:"justify"}}>
    Physical fitness is a state of health and well-being and, more specifically,
    occupations and daily activities.</p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '16rem', margin:"0.5rem" }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>Simple Workout </Card.Title>
    <Card.Text>
    <p style={{color:"black", textAlign:"justify"}}>
    Exercise is any bodily activity that enhances or maintains physical fitness and overall health and wellness.</p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '16rem' , margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
  <Card.Title>Simple Diet Plan </Card.Title>
    <Card.Text>
    <p style={{color:"black", textAlign:"justify"}}>
    Exercise is any bodily activity that enhances or maintains physical fitness and overall health and wellness.</p>
    </Card.Text>
    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button> <Button variant="warning">View</Button>
  </Card.Body>
</Card>

<Card style={{ width: '16rem' , margin:"0.5rem"}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  <Card.Body>
    <Card.Title>Simple Workout </Card.Title>
    <Card.Text>
    <p style={{color:"black", textAlign:"justify"}}>
    Exercise is any bodily activity that enhances or maintains physical fitness and overall health and wellness.</p>
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