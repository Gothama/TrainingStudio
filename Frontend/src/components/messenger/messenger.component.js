
import React, {Component} from 'react';
import Footer from '../general/footer.component';
import NavBar from '../customer/cusnav.component'

//import {Link} from 'react-router-dom';

//import Footer from '../general/footer.component';

export default class Messenger extends Component{
  
    render(){
return(
<div>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >
<NavBar/>
<div className="container" style={{paddingTop:"100px" , paddingBottom:"100px" }}>
<h1 style={{color:"white"}}>Messenger</h1>
</div>
</div>
<Footer/>
    </div>
);
}
}   