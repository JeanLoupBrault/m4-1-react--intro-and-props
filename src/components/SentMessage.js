import React from 'react';

import './SentMessage.css'



function SentMessage(props) {

    return <div className="chat-message">
        <p>{props.username}</p>
        <span><img src={props.imgUrl} alt={props.username} /></span><span className="chat-sent-message">{props.body}</span>
    </div>;
}

export default SentMessage;