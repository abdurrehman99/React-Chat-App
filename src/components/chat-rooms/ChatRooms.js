import React, {Component} from 'react';
import { getChatRooms } from '../../actions/chatRoomsActions';
import { connect } from 'react-redux';

class ChatRooms extends Component
{
    constructor (props)
  {
    super(props);
    this.state = {

      activeNode : null ,
      persons : [
        {
          name  :'Syed Ebad',
          image : 'https://ptetutorials.com/images/user-profile.png',
          lastMessage : 'Hi there what\'s up',
          time : new Date(), 
          nodeKey : 1,
        },

        {
          name  :'S M Arif',
          image : 'https://ptetutorials.com/images/user-profile.png',
          lastMessage : 'Hi there what\'s up',
          time : new Date(), 
          nodeKey : 2,

        },

        {
          name  :'Abdul Nafay',
          image : 'https://ptetutorials.com/images/user-profile.png',
          lastMessage : 'Hi there what\'s up',
          time : new Date(), 
          nodeKey : 3,

        },

        {
          name  :'S M Zafar',
          image : 'https://ptetutorials.com/images/user-profile.png',
          lastMessage : 'Hi there what\'s up',
          time : new Date(),
          nodeKey : 4,
          
        },
      ]
    }
  }

  componentWillMount()
  {
    this.props.getChatRooms();
  }
  
  abc = (value) =>
  {
    this.setState({
      activeNode : value.nodeKey
    });
    console.log(this.state);
  }

    render()
    {
        return(
                <div className="inbox_people">
                    <div className="headind_srch">
                        <div className="recent_heading">
                            <h4>Recent</h4>
                        </div>
                            <div className="srch_bar">
                                <div className="stylish-input-group">
                                    <input type="text" className="search-bar " placeholder="Search"/>
                                    <span className="input-group-addon">
                                    <button type="button"> <i className="fa fa-search" aria-hidden="true"></i></button>
                                    </span> 
                                </div>
                            </div>
                            <div className="inbox_chat">
                            
                            {
                              this.state.persons.map(function(value,index)
                              {
                    
                                return(
                                  
                                  <div className={this.state.activeNode !== null && this.state.activeNode === value.nodeKey ? 'active_chat chat_list' : 'chat_list'} onClick={()=> {
                                    this.abc(value);
                                  }}>
                                    <div className="chat_people">
                                        <div className="chat_img"><img src={value.image} alt="sunil"/>   
                                        </div>
                                    <div className="chat_ib">
                                        <h5>{value.name} <span className="chat_date">{value.time.toLocaleDateString()}</span></h5>
                                        <p>{value.lastMessage}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                )
                              },this)
                            }
                            
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

export default connect(mapStatetoProps,{ getChatRooms }) (ChatRooms);









































