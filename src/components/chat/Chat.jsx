import React, { useEffect, useRef } from 'react'
import classes from './Chat.module.css'
import Container from '../UI/Container'
import ChatFooter from './ChatFooter'
import ChatMessage from './ChatMessage'

function Chat({ myChat, setMyChat, data  , url=''}) {

    const myDivRef = useRef(null);

    const scrollToBottom = () => {
        if (myDivRef.current) {
            myDivRef.current.scrollTop = myDivRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    });

    const props = { myChat, setMyChat, data, scrollToBottom , url }

    return (
        <div
            className={classes.container}
        >
            <Container
                cls={classes.chat_window}
            >
                {myChat?.map((element, index) => (
                    <ChatMessage key={index} message={element.message} reply={element?.sender !== 'user'?true:false} />
                ))}
            </Container>
            {data.status !== 'closed' &&
            <ChatFooter  {...props} />}
        </div>
    )
}

export default Chat
