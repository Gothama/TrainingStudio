import React, {Component} from 'react';
import TrainerTile from './trainerTile.component';
import image1 from "../../assets/images/line-dec.png"
import Navbar from "./navbar.component";
import Footer from "./footer.component";
export default class AllDieticians extends Component{
  
    render(){
return(
  <div>

  <Navbar/>
   {/* <Header/>*/}
    
    
    <section id="courses " className="courses cta2" style={{paddingBottom:"10px"}}><br></br>
      <div className="container" data-aos="fade-up">
      <div className="section-heading">
            <h2>All  <em>Dieticians</em></h2>
            <img src={image1} alt="waves"/>
            <p>The clock is ticking. Are you becoming the person you want to be?</p>
      </div>
      <div className="row" >

        
      <TrainerTile poster = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-poster-template-6721e067feaf056020d4160455315421_screen.jpg?ts=1561444865" 
          trainerImage="https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
          trainerName="Gayan Jayasinghe"/>

          <TrainerTile poster = "https://s3.amazonaws.com/thumbnails.venngage.com/template/c15b0128-7d4c-4dab-a3cd-8640ecca4c64.png" 
          trainerImage="https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
          trainerName="Hasitha Wickramasinghe"/>
          <TrainerTile poster = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/get-in-shape-from-home-fitness-workout-flyer-design-template-2032f7ecf1a6b65738f5b4c077a63492_screen.jpg?ts=1585657310"
           trainerImage="https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
           trainerName="Gothama Rajawsam"/>
</div><br></br>

<div className="row" >

<TrainerTile poster = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-poster-template-6721e067feaf056020d4160455315421_screen.jpg?ts=1561444865" 
            trainerImage="https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
            trainerName="Gothama Rajawsam"/>

            <TrainerTile poster = "https://s3.amazonaws.com/thumbnails.venngage.com/template/c15b0128-7d4c-4dab-a3cd-8640ecca4c64.png"
             trainerImage="https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
             trainerName="Hasitha Wickramasinghe"/>

            <TrainerTile poster = "https://s3.amazonaws.com/thumbnails.venngage.com/template/c15b0128-7d4c-4dab-a3cd-8640ecca4c64.png" 
            trainerImage="https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
            trainerName="Gayan Jayasinghe"/>
</div>
        <br></br>
      </div>
    </section>
<Footer/>
    </div>
);
}
} 