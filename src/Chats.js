
import React from 'react'
import "./Chats.css"
import Chat from "./Chat"

function Chats(){

    return (
        <div className="chats">
            <Chat
            name="Mark"
            message="Hey! What's up?"
            timestamp="40 seconds ago"
            profilePic="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"
            />

        <Chat
            name="Elon"
            message="Hello!"
            timestamp="55 minutes ago"
            profilePic="https://i.ytimg.com/vi/WDxkBjL_r8g/maxresdefault.jpg"
            />

        <Chat
            name="Steve"
            message="Heya..."
            timestamp="1 day ago"
            profilePic="https://cdn.mos.cms.futurecdn.net/ZvueiLL2vdwoHWHjCRuQCW-1200-80.jpg"
            />

        <Chat
            name="Sarah"
            message="Hola!!!"
            timestamp="3 days ago"
            profilePic="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Forange-kitten-blue-eyes-730290907-2000.jpg"
            
            />

            
        </div>
    );


}




export default Chats