import React, { Component, createRef } from 'react'
import io from 'socket.io-client'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Peer from 'simple-peer'


const socket = io.connect('http://localhost:4000')


export default class VideoChat extends Component {

  state={
    me:"",
    stream:0,
    receivingCall:false,
    caller:"",
    callerSignal:0,
    callAccepted:"",
    idToCall:"",
    callEnded: false,
    name:""
  }

  componentDidMount(){

    console.log("Hii")
  navigator.mediaDevices.getUserMedia({video:true, audio:true}).then((stream)=>{
      this.setState({
        stream:stream
      })
      this.myvideo.current.srcObject = stream
    })
    socket.on('me', (id)=>{
      this.setState({me:id})
    })
    socket.on("callUser" , (data)=>{
      this.setState({receivingCall:true, caller:data.from, name:data.name, callerSignal:data.signal})
    })
  }


  callUser=(id)=>{
    const peer = new Peer({
      initiator:true,
      trickle:false,
      stream:this.state.stream
    })

    peer.on("signal", (data)=>{
      socket.emit("callUser",{
        userToCall:id,
        signalData:data,
        from:this.state.me,
        name:this.state.name
,      })
    })

    peer.on("stream", (stream)=>{
      this.uservideo.current.srcObject= stream
    })

    socket.on("callAccepted", (signal)=>{
      this.setState({
        callAccepted:true
      })
      peer.signal(signal)
    })
    this.connectionRef.current = peer
  }

  answerCall=()=>{
    this.setState({callAccepted:true})
    const peer = new Peer({
      initiator:false,
      trickle:false,
      stream:this.state.stream
    })
    peer.on("signal",(data)=>{
      socket.emit("answerCall", {signal:data, to:this.state.caller})
    })
    peer.on("stream", (stream)=>{
      this.uservideo.current.srcObject=stream
    })
    peer.signal(this.state.callerSignal)
    this.connectionRef.current=peer
  }

  leaveCall=()=>{
    this.setState({
      callEnded:true
    })
    this.connectionRef.current.destroy()
  }
  constructor(props){
    super(props)
    this.myvideo = createRef()
    this.uservideo = createRef()
    this.connectionRef = createRef()

  }

  

  onchangeName=(event)=>{
    this.setState({name:event.target.value})
  }

  onchangeIdtoCall=(event)=>{
    this.setState({idToCall:event.target.value})
  }


    render() {
        return (
            <div>
                    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px"}} >

<div className="container" style={{paddingTop:"100px" , paddingBottom:"100px" }}>
<h1 style={{color:"white"}}>Video Chat</h1>
</div>
              <h1>Zoomish</h1>

              <div className="row">
              <div className="col-lg-6 col-md-4 col-xs-12">{this.state.stream && <video playsInline ref={this.myvideo} autoPlay style={{width:"100%", height:"100%", margin:"2px"}}/>}</div>
              <div className="col-lg-6 col-md-4 col-xs-12">{this.state.callAccepted && !this.state.callEnded ?
                <video playsInline ref={this.uservideo} autoPlay style={{width:"100%", height:"100%" , margin:"2px"}}/>:null}
              </div></div>

              {this.state.callAccepted && !this.state.callEnded ?
              <button onClick={this.leaveCall}>End Call</button>:<div>
              
              <input type="text" value={this.state.name} onChange={this.onchangeName}/>
              <CopyToClipboard text={this.state.me}>
                <button>copy ID</button>
              </CopyToClipboard>

              <input type="text" value={this.state.idToCall} onChange={this.onchangeIdtoCall}/>
              <button onClick={this.callUser(this.state.idToCall)}>call User</button>
                   {this.state.idToCall}  </div>}
       

              {this.state.receivingCall && !this.state.callAccepted ? <div className="container"> <p>{this.state.name} is calling</p> <button onClick={this.answerCall} style={{width:"100%"}}>Answer</button> </div>: null}
          </div></div>
        )
    }
}
