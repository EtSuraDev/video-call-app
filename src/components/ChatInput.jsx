import React from 'react'
import "../styles/components/chatinput.css"
import { RiTelegram2Fill } from "react-icons/ri";


function ChatInput() {
  return (
    <div className=' chat_input '>
      <input type="text" name="" id="" placeholder='Type Message' />
      <button class='buttons'>
        <RiTelegram2Fill size={40} />
      </button>
    </div>
  )
}

export default ChatInput
