import React, { Component } from 'react'
import io from 'socket.io-client'
import { Row, Col, Button, Form } from 'react-bootstrap'
import axios from 'axios'


const socket = io.connect('http://localhost:4000')


export default class ChatC extends Component {

  state = {
    loggedIn: false,
    room: "",
    userName: "",
    message: "",
    messagereceived: [],
    messagereceived1: "",
    typing: false
  }

  getData = async () => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}chat/chatroomidc`, {},
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }).then(res => {
        console.log(res)

        this.setState({
          room: res.data,
          userName: "Customer"
        })
        this.connectToRoom()
        this.getmessages()
      }).catch(err => {
        window.alert(err)
      })
  }
  constructor() {
    super()
    this.getData();

  }

getmessages=()=>{
  axios.post(`${process.env.REACT_APP_BACKEND_URL}chat/getmessages`, {room:this.state.room}).then(res => {
   // console.log(res.data.D.length)
   // if (res.data.D.length >= 0) 
    {
      this.setState({
        messagereceived: res.data.D
      })
    }
    /*else {
      this.setState({
        messagereceived: []
      })
    }*/
    //console.log(this.state.messagereceived.length)
  }).catch(err => {
    window.alert(err)
  })
}

  componentDidMount() {

    
      socket.on("receive_message", (data) => {
        this.setState({
          ///messagereceived:[...this.state.messagereceived, data]
          messagereceived: this.state.messagereceived.concat(data)
        })
        this.setState({

          messagereceived1: data
        })
        console.log(this.state.messagereceived1)
        console.log(this.state.messagereceived)
      });


    


  }
  connectToRoom = () => {
    this.setState({ loggedIn: true });
    socket.emit("join_room", this.state.room);
  };

  sendMessage = () => {
    if (!this.state.loggedIn) {
      //this.connectToRoom()
    }
    let messageContent = {
      room: this.state.room,
      content: {
        author: this.state.userName,
        message: this.state.message,
      },
    };


    socket.emit("send_message", messageContent);

    this.setState({
      ///messagereceived:[...this.state.messagereceived, data]
      messagereceived: this.state.messagereceived.concat(messageContent.content)
    })

    axios.post(`${process.env.REACT_APP_BACKEND_URL}chat/addmessage`, {

      message:this.state.message,
      author:this.state.userName,
      room:this.state.room

    }).then(res => {
      console.log(res.data)
      //alert(res.data.success)


    }).catch(err => {
      window.alert(err)
    })


  };



  onchangeMesage = (event) => {
    this.setState({ message: event.target.value })
  }


  render() {
    return (
      <div>
        <div className="App cta2" >

          <div className="chatContainer container" style={{ margin: "auto", height: "98vh", overflowX: "hidden", overflowY: "auto", backgroundColor: "#522909" }}>
            {this.state.typing ? <p>typing</p> : null}
            {this.state.messagereceived.map(e => {
              return (<div>
                { this.state.userName === e.author ? <Row>
                  <Col><div style={{ color: "white", textAlign: "left", backgroundColor: "blue", padding: "10px", margin: "10px", borderRadius: "10px" }}>

                    <h4>{e.message}</h4>
                    <p>By - {e.author}</p>
                    <p></p>
                  </div></Col><Col></Col></Row>
                  :
                  <Row><Col></Col><Col><div style={{ color: "white", textAlign: "right", backgroundColor: "red", padding: "10px", margin: "10px", borderRadius: "10px" }}>
                       <h4>{e.message}</h4>
                    <p>By - {e.author}</p>
                  </div></Col></Row>
                } </div>
              )
            })}

            <p>Author {this.state.messagereceived1.author}</p> <p>Message {this.state.messagereceived1.message}</p>
            <div className="container" style={{ position: "fixed", bottom: "2px", height: "60px", paddingBottom: "20px", paddingTop: "10px" }} >

              <div className="row" >
                <div className="col-lg-11 col-md-8s col-xs-12" >
                  <Form.Control type="text"
                    style={{ width: "100%" }}
                    onChange={this.onchangeMesage}

                  />
                </div>
                <div className="col-lg-1 col-md-4 col-xs-12" >
                  <Button variant="primary" onClick={this.sendMessage}>Send</Button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}
