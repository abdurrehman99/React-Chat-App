import React, {Component} from 'react';
import ChatRooms from '../chat-rooms/ChatRooms';
import Conversations from '../converstions/Conversations';
class MainContainer extends Component
{
    render()
    {
        return(
            <div className="container">
                <h2 className="text-center m-3">Messaging App</h2>
                <div className="messaging mt-4">
                    <ChatRooms/>
                    <Conversations/>
                </div>
            </div>
        );
    }
}

export default MainContainer;

