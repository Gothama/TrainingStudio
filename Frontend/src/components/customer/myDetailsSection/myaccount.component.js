
import React, {Component} from 'react';
//import {Link} from 'react-router-dom';

import Footer from '../../general/footer.component';
import MyDetails from './mydetails.component';
import NavBar from './../cusnav.component'


export default class NavReact extends Component{
  
    render(){
return(
    <div>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >
<NavBar/>
<h1 className="container"style={{color:"white", paddingTop:"50px"}}>My Account</h1>
<MyDetails/>
</div>
<Footer/>
    </div>

);
}
}   