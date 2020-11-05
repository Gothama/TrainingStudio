
import React, {Component} from 'react';
import Footer from '../general/footer.component';


//import {Link} from 'react-router-dom';

//import Footer from '../general/footer.component';

export default class VideoChat extends Component{
  
    render(){
return(
<div>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >

<div className="container" style={{paddingTop:"100px" , paddingBottom:"100px" }}>
<h1 style={{color:"white"}}>Video Chat</h1>
</div>
</div>
<Footer/>
    </div>
);
}
}   