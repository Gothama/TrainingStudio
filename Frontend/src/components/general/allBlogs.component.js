
import React, {Component} from 'react';
import image1 from "../../assets/images/line-dec.png"
import BlogTilecomponent from './blogTile.component';
import Navbar from "./navbar.component";
import Footer from './footer.component';


export default class AllBlog extends Component{
  
    render(){
return(
  <div>
  <Navbar/>
   
    <section id="courses " className="courses cta2" style={{paddingBottom:"10px"}}><br></br>
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
            <h2>Fitness<em> Blog</em></h2>
            <img src={image1} alt="waves"/>
            <p>Aute fugiat laboris non cillum culpa incididunt fugiat elit incididunt nulla fugiat esse sit..</p>
        </div>

      <div className="row" >

        <BlogTilecomponent foodImage = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title = "Fitness" authorImage = "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
        author= "John Peter"/>

        <BlogTilecomponent foodImage = "https://images.unsplash.com/photo-1598733097325-42a02678c1a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title = "Fitness" authorImage = "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        author= "G Rajawasam"/>
        
        <BlogTilecomponent foodImage = "https://images.unsplash.com/photo-1573500883698-e3ef47a95feb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title = "Fitness" authorImage = "https://images.unsplash.com/photo-1553798397-40df2c8dd5b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        author= "Donald White"/>
        
      </div>
      <br></br>
      <div className="row" >

      <BlogTilecomponent foodImage = "https://images.unsplash.com/photo-1573500883495-6c9b16d88d8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title = "Fitness" authorImage = "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
        author= "jhonson Brad"/>

      <BlogTilecomponent foodImage = "https://images.unsplash.com/photo-1573500883698-e3ef47a95feb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title = "Fitness" authorImage = "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
        author= "John Peter"/>

      <BlogTilecomponent foodImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        title = "Fitness" authorImage = "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
        author= "Peter Drucker"/>
        
      </div>
      <br></br>
      </div>
    </section>
    <Footer/>
   </div>
  
);
}
} 