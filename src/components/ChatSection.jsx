import React from 'react'
import "../styles/components/chat.css"
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function ChatSection() {
  return (
    <div className=' chat_section  '>
        <ChatMessage/>
        <ChatInput/>
    </div>
  )
}

export default ChatSection
