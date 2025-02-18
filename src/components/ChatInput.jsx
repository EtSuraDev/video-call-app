import React from 'react'
import "../styles/components/chatinput.css"
import { RiTelegram2Fill } from "react-icons/ri";


function ChatInput(props) {
  return (
    <div className=' chat_input '>
      <input type="text" name="" id=""
        placeholder='Type Message' 
        value={props.inputValue.message}
        onChange={props.handleInputChange}
      />
      <button className='buttons'
        onClick={() => props.handleSubmit()}
      >
        <RiTelegram2Fill size={40} />
      </button>
    </div>
  )
} 

export default ChatInput
