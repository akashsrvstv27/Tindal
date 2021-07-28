import React, { useEffect, useState, setInput, input } from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./ChatScreen.css"

function ChatScreen(){

    const [input, setInput] = useState('');


    const [messages, setMessages] = useState([
        {
            name: 'Mark',
            message: 'Whats Up? <3',
            image: 'https://www.wideopenpets.com/wp-content/uploads/2019/08/Owning-a-Husky.png',

        },

        {
            name: 'Mark',
            message: 'Hows it goin?',
            image: 'https://www.wideopenpets.com/wp-content/uploads/2019/08/Owning-a-Husky.png',

        },

        {
            
            message: 'Hello!',
            
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message : input}]);
        setInput("");
    }



    return(
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Mark on 01/07/2021</p>

            {messages.map(message => (

                message.name ? (

                    <div className="chatScreen__message">

                    <Avatar className="chatScreen__image"
                    src={message.image}
                    alt={message.name} />
                    <p className="chatScreen__text">{message.message}</p>
                    </div>

                ) : (

                    <div className="chatScreen__message">

                    
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>

                )

                

            ))}

            <div>
                <form className="chatScreen__input">
                <input
                value={input}
                onChange={e => setInput(e.target.value)}
                type="text" placeholder="..............Type your message.............." className="chatScreen__inputField" />
                <button 
                onClick={handleSend}
                type="submit"
                style={{backgroundColor: `rgb(185, 184, 184)`, color:`black`, marginRight: `30px`, fontWeight: `bolder`}} className="chatScreen__inputButton">SEND</button>
                </form>
            </div>

        </div>
    );
}

export default ChatScreen