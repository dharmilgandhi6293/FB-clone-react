import React, {useState}from 'react'
import "./MessageSender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';



function MessageSender() {
    
    const[input,setInput]= useState("");
    const[imageurl, setImageUrl] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
        setImageUrl("");
    }
    return (
        <div className="MessageSender">
            <div className="MessageSender__top">
                <Avatar/>
                
                <form>
                    <input
                    value= {input}
                    onChange= {(e) => setInput(e.target.value)}
                     className="MessageSender__input"
                        placeholder="Whats on your mind, Dharmil?" />
                    <input 
                    value={imageurl}
                    onChange= {(e)=> setImageUrl(e.target.value)}
                    
                    placeholder="image URL (optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit

                    </button>
                </form>
            </div>
            <div className="MessageSender__bottom">
                <div className="MessageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="MessageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="MessageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender
