import React from 'react'
import classes from './Chat.module.css'
import Container from '../UI/Container'

function ChatMessage({reply,message}) {
  return (
    <Container cls={`${classes.message} ${reply && classes.reply}`}>
      {message}
    </Container>
  )
}

export default ChatMessage
