import React from 'react'
import "./Chat.css"
import Avatar from "@material-ui/core/Avatar"
import { Link } from 'react-router-dom'

function Chat({name, message, profilePic, timestamp}){
    return(

    <Link to={`/chat/${name}`}>

        <div className="chat">

            <Avatar src={profilePic} className="chat__image" alt="name" />

            <div className="chat__details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>

            <div className="chat__timestamp">
                <p>{timestamp}</p>
            </div>


        </div>

        </Link>
    );
}

export default Chat

