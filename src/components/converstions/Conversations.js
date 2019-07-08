import React, {Component} from 'react';
import { sendMsg } from '../../actions/msgsActions';
import { connect } from 'react-redux';
class Conversations extends Component
{

  constructor (props)
  {
   
    super(props);
    this.msgsend = this.msgsend.bind(this);
    this.handleChange =  this.handleChange.bind(this);
    this.state = {
      msg : "" ,
      persons : [
        {
          image : 'https://ptetutorials.com/images/user-profile.png',
          lastMessage : 'Hi there what\'s up',
          time : new Date(), 
          type : 'in',
        },

        {
          image : 'https://ptetutorials.com/images/user-profile.png',
          lastMessage : 'I m fine ! ',
          time : new Date(), 
          type : 'out',

        },
        {
          image : 'https://ptetutorials.com/images/user-profile.png',
          lastMessage : 'Hi there what\'s up',
          time : new Date(), 
          type : 'in',
        },

        {
          image : 'https://ptetutorials.com/images/user-profile.png',
          lastMessage : 'I m fine ! ',
          time : new Date(), 
          type : 'out',

        },
      ]
    }
  }

  msgsend(event)
  {
    console.log(this.state.msg);

    if(this.state.msg !== "")
    {

      var chat = { 
          image : 'https://ptetutorials.com/images/user-profile.png',
          lastMessage : this.state.msg,
          time : new Date(), 
          type : 'out',
      };

      var newChat = this.state.persons.concat(chat);
      this.setState ({
      persons : newChat,
      msg : "",
      })
      
      this.props.sendMsg(newChat);
      event.preventDefault();
      
    }
    else
    {
      alert("Enter a message !")
      event.preventDefault();
    }
  }


  handleChange (event)
  {
    this.setState({
      msg : event.target.value
    });

    // console.log(this.state.msg);
  }
    render()
    {
        return(
            <div className="mesgs">
                  <div className="msg_history">
                    <div className="incoming_msg">

                        {
                          this.state.persons.map(function(value,index){

                            if(value.type === 'in')
                            return(
                              <div className="received_msg">
                              <div className="received_withd_msg">

                              <p>{value.lastMessage}</p>
                              <span className="time_date">{value.time.toLocaleTimeString()}</span>
                              </div>
                              </div>   
                             
                            );
                            else
                            return(
                              <div className="outgoing_msg">
                              <div className="sent_msg">
                              <p>{value.lastMessage}</p>
                              <span className="time_date">{value.time.toLocaleTimeString()}</span>
                              </div>
                              </div>
                            );
                          })
                        }
                               
                  <div className="type_msg">
                    <div className="input_msg_write">

                      <form onSubmit={this.msgsend}>
                        <input type="text" className="write_msg form-control" onChange={this.handleChange}
                        value={this.state.msg} placeholder="Type a message. ."/>
                        <button  className="msg_send_btn" type="submit"><i class="fas fa-paper-plane"></i></button>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
          </div>

        );
    }
}

  const mapStatetoProps = (state) => (
    console.log(state),
  {
    msg : state.msg
  })

export default connect(mapStatetoProps,{sendMsg}) (Conversations);