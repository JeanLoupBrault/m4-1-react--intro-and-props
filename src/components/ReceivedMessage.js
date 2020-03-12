import React from 'react';

import './ReceivedMessage.css'



function ReceivedMessage(props) {

    return <div className="chat-message">

        <p>{props.username}</p>
        <span className="chat-received-message">{props.body}</span>
    </div>;
}

export default ReceivedMessage;