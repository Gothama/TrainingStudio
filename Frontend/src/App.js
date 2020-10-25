import React from 'react';
import { BrowserRouter as Router, Route }  from "react-router-dom";

import  '../src/assets/css/bootstrap.min.css'; 
import '../src/assets/css/font-awesome.css'; 
import '../src/assets/css/ourcss.css'; 
import '../src/assets/boxicons/css/boxicons.min.css'; 
import '../src/assets/aos/aos.css'
import '../src/assets/boxicons/css/boxicons.min.css'; 

import About from './components/general/about.component';
import Contact from './components/general/contact.component';

 


function App() {
  return (
   <div>
  
      <Router> 
      <Route path = "/about" exact component={About}/>
      <Route path = "/contact" exact component={Contact}/>

       {/*

    <Route path = "/" exact component={LandingPage}/>
    <Route path = "/trainerProfile" exact component={TrainerProfile}/>
    <Route path = "/contact" exact component={Contact}/>
    <Route path = "/allTrainers" exact component={AllTrainers}/>
    <Route path = "/about" exact component={About}/>
    <Route path = "/signIn" exact component={SignIn}/>
    <Route path = "/blog" exact component={Blog}/>
    <Route path = "/signUp" exact component={SignUp}/>
    <Route path = "/account" exact component={MyAccount}/>
    <Route path = "/allDieticians" exact component={AllDieticians}/>
    <Route path = "/allBlogs" exact component={AllBlog}/>
  <Footer/>
     */}
  </Router>
 
</div>
  );
}

export default App;
