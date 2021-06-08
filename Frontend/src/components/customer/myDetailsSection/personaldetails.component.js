import React, {Component} from 'react';
import {Form,Row,Col,Button, ProgressBar} from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2'
import "react-datepicker/dist/react-datepicker.css";


const siAPI1= axios.create({
  baseURL :`http://localhost:9020/customer`
})

const siAPI2= axios.create({
  baseURL :`http://localhost:9020/email/accountupdated`
})

const phoneregex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const nameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export default class PersonalDetails extends Component{   
  state={
      fName:"",
      lName:"",
      dob:"",
      email:"",
      gender:"Male",
      bloodGroup:"ABPositive",
      phoneNumber:"",
      username:"",
      password:"",
      profilephotolink:"",
      uploading:"",
      image:"",
      maxd:moment(Date.now()).format("yyyy-MM-DD"),
      phoneerror:false,
      fnameerror:false,
      lnameerror:false,
      emailerror:false
    }
   
  constructor(){
    super()
 
    siAPI1.post("/fdetail", {},
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res)

      this.setState({
        fName:res.data.name.fName,
        lName:res.data.name.lName,
        dob:(moment(res.data.dob).format("yyyy-MM-DD")),
        email:res.data.email,
        gender:res.data.gender,
        bloodGroup:res.data.bloodGroup,
        phoneNumber:res.data.phoneNumber,
        username:res.data.credentials.username,
        password:res.data.credentials.password,
        profilephotolink:res.data.profilephotolink
      })

    }).catch(err => {
      window.alert(err)
  })
}

  

  onChangefName= (event)=>{
    let f = event.target.value
    if(!nameregex.test(f)){
      this.setState({
        fnameerror:true
      })
    }
    else{
       this.setState({
      fName:event.target.value,
      fnameerror:false
    })
    }
   
  }
  onChangelName= (event)=>{
    let l = event.target.value
    if(!nameregex.test(l)){
      this.setState({
        lnameerror:true
      })
    }
    else{
      this.setState({
      lName:event.target.value,
      lnameerror:false
    })
    }
    
  }
  onChangedob= (event)=>{
    console.log((moment(event.target.value).format("yyyy-MM-DD")))
    this.setState({
      dob:(moment(event.target.value).format("yyyy-MM-DD"))
    })
  }
  onChangeemail= (event)=>{
    let e = event.target.value;
    if(!emailregex.test(e)){
      this.setState({
        emailerror:true
      })
    }
    else{
       this.setState({
      email:event.target.value,
      emailerror:false
    })
    }
   
  }
  onChangegender= (event)=>{
    this.setState({
      gender:event.target.value
    })
    console.log(this.state.gender)
  }
  onChangebloodGroup= (event)=>{
    this.setState({
      bloodGroup:event.target.value
    })
    console.log(this.state.bloodGroup)
  }
  onChangephoneNumber= (event)=>{
    let p = event.target.value;
    if(!phoneregex.test(p)){
      this.setState({
        phoneerror:true
      })
      console.log("Error")
    }
    else{
      this.setState({
      phoneNumber:event.target.value,
      phoneerror:false
    })
    console.log(this.state.phoneNumber)
    }
    
  }
  onChangeusername= (event)=>{
    this.setState({
      username:event.target.value
    })
  }
  onChangepassword= (event)=>{
    this.setState({
      password:event.target.value
    })
  }

  successfulmessage=(msg)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  handleOnSubmit=event=>{
    event.preventDefault();

    siAPI1.put("/addDetails", {fName:this.state.fName,
      lName:this.state.lName,
      phoneNumber:this.state.phoneNumber,
      gender:this.state.gender,
      bloodGroup:this.state.bloodGroup,
      dob:this.state.dob,
      email:this.state.email,
      profilephotolink:this.state.profilephotolink
      
    },
    {
      headers:{Authorization:"Bearer "+ localStorage.getItem("token")}
    })
    .then(res=>{
      console.log(res.data)
      this.successfulmessage("Successfully Updated");
      siAPI2.post("/").then(res=>{
        this.successfulmessage("Successfully Updated");
      }).catch(err=>{
        window.alert(err)
      })
    }).catch(err => {
      window.alert(err)
  })
  }

  upload=(event)=>{

    if(this.state.image.size > 600 * 600) // 1mb
            return alert("Size too large!")
  
        if(this.state.image.type !== 'image/jpeg' && this.state.image.type !== 'image/png') // 1mb
            return alert("File format is incorrect.")
  
  
    console.log(this.state.image)
    const formData = new FormData()
    formData.append("file" , this.state.image)
    formData.append("upload_preset" , "w2qn2jsf")
    axios.post("https://api.cloudinary.com/v1_1/dbecgupu0/image/upload", formData, {onUploadProgress: data => {
        
        this.setState({uploading:Math.round((100 * data.loaded) / data.total)})}
        
      }).then((res)=>{
        console.log(res)
        this.setState({profilephotolink:res.data.secure_url})
        this.successfulmessage("Image Uploaded Successfully")
    })
   
  
    console.log(this.state.profilephotolink)
  }
  
  selectImage=(event)=>{
    this.setState({
        image:event.target.files[0]
    })
  }
  
  
    render(){
return(
    <div style={{backgroundColor:"#007bff",padding:"20px"}}>
            <div className="text-center" style={{marginTop:"-60px"}}>
                <img src={this.state.profilephotolink} className ="rounded avatar" alt="..."  style={{height:"150px",width:"150px", borderRadius:"50%"}}/>
            </div>
            <Form style={{padding:"20px"}} onSubmit={this.handleOnSubmit}>
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      First Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.fName} onChange={this.onChangefName} required/>
      {this.state.fnameerror ? 
              <div className="errorMsg">Enter a valid Name</div>
            :null}
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={2}>
      Last Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.lName} onChange={this.onChangelName} required/>
      {this.state.lnameerror ? 
              <div className="errorMsg">Enter a valid Name</div>
            :null}
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={2}>
      Username
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.username}onChange={this.onChangeemail} required readOnly />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password"  Value={this.state.password}onChange={this.onChangepassword}required readOnly />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
    <Form.Label column sm={2}>
      Mobile No.
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  Value={this.state.phoneNumber} onChange={this.onChangephoneNumber}required maxLength="10"  minLength="10"/>
      {this.state.phoneerror ? 
              <div className="errorMsg">Enter a valid number</div>
            :null}
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
      Profile Image
    </Form.Label>
    <Col sm={7}>
      <Form.Control type="file"  Value={this.state.fName} onChange={this.selectImage}/>
     
    </Col>
    <Col sm={3}>
      <Button type="button" onClick={this.upload} style={{backgroundColor:"red"}}>Upload Image</Button>
    </Col>
  </Form.Group>
  {this.state.uploading && <ProgressBar variant="danger" now={this.state.uploading} label={`${this.state.uploading}%`} />}
<br/>

  <Form.Group as={Row} controlId="formHorizontalDOB">
    <Form.Label column sm={2}>
      Date of Birth
    </Form.Label>
    <Col sm={10}>
<input type="date" max={this.state.maxd}    dateFormat="MM-dd-yyyy" required defaultValue={this.state.dob} onChange={this.onChangedob}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalAge">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email"  Value={this.state.email} onChange={this.onChangeemail}required />
      {this.state.emailerror ? 
              <div className="errorMsg">Enter a valid Email address</div>
            :null}
    </Col>
  </Form.Group>

  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Female"
          value="Female"
          name="formHorizontalRadios"
          id="formGenderFemailRadios1"
          checked={this.state.gender==="Female"}
          onChange={this.onChangegender}
        />
        <Form.Check defaultChecked
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formGenderMaleRadios2"
          value="Male"
          checked={this.state.gender==="Male"}
          onChange={this.onChangegender}
        />
       
      </Col>
    </Form.Group>
  </fieldset>

  

  <Form.Group as={Row} controlId="formHorizontalAge">
    <Form.Label column sm={2}>
      Blood Group
    </Form.Label>
    <Col sm={10}>
    <Form.Control as="select" onChange={this.onChangebloodGroup} value={this.state.bloodGroup}required>
    <option value="APositive">A Positive</option>
    <option value="ANegative">A Negative</option>
    <option value="BPositive">B Positive</option>
    <option value="BNegative">B Negative</option>
    <option value="OPositive">O Positive</option>
    <option value="ONegative">O Negative</option>
    <option value="ABPositive">AB Positive</option>
    <option value="ABNegative">AB Negative</option>
    <option>Default select</option>
  </Form.Control>

    </Col>
  </Form.Group>


  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}}>Update</Button>
    </Col>
  </Form.Group>
</Form>

    </div>
);
}
}   