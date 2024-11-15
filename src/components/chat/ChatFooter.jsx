import React, { useState } from 'react'
import classes from './Chat.module.css'
import { IoSendOutline } from "react-icons/io5";

import { Button, Flex, Input, Space } from 'antd'
import useHttp2 from '../../hooks/useHttp2';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

function ChatFooter({ myChat, setMyChat, data, scrollToBottom  , url }) {

  const [myMessage, setMyMessage] = useState('')
  const { sendRequest, isLoading } = useHttp2()
  const [placeholder, setPlaceHolder] = useState('write your message')
  const { id } = useParams()


  const messageHandler = (e) => {
    e.preventDefault()

    if (!myMessage) {
      toast.error('message cannot be empty')
      return
    }


    sendRequest({
      url: `${url ? url : 'ticket'}/${id}/respond`,
      method: 'PUT',
      body: {
        message: myMessage
      }
    }, (data) => {
      setMyChat([...myChat, {
        message: myMessage,
        sender: 'user'
      }])
    })
    scrollToBottom()
    setMyMessage('')
    setPlaceHolder('message...')
  }

  return (
    <Flex
      align='center'
      justify='space-between'
      gap={10}
    >
      <Input value={myMessage} onChange={e => setMyMessage(e.target.value)} className={classes.chat_footer_input} placeholder={placeholder} />
      <Button onClick={messageHandler} disabled={isLoading} className={classes.chat_footer_button} type='primary'>
        <IoSendOutline size={14} color='white' />
      </Button>
    </Flex>
  )
}

export default ChatFooter
