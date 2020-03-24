import React from 'react';

import './ChatMessage.css'

import SentMessage from './SentMessage'
import ReceivedMessage from './ReceivedMessage'


function doThis(props) {
    if (props.messageType === 'sent') {
        return (
            <SentMessage
                imgUrl={props.user.avatar}
                username={props.user.username}
                body={props.body}
                messageType={props.messageType}
            />
        );
    } else {
        return (
            <ReceivedMessage
                imgUrl={props.user.avatar}
                username={props.user.username}
                body={props.body}
                messageType={props.messageType}
            />
        );
    }
}

function ChatMessage(props) {
    return (
        <section className="chat-message">
            {doThis(props)}
        </section>)
}


export default ChatMessage;