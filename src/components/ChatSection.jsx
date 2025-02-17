import React from 'react'
import "../styles/components/chat.css"
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import  { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";




function ChatSection() {
  const [displayChat, setDisplayChat] = useState("false")
  const [messages, setMessages] = useState( [
    { id: 1, sender: "user", message: "Hi!", timestamp: "15:09" },
    { id: 2, sender: "receiver", message: "Hi!", timestamp: "15:10" },
    { id: 3, sender: "user", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,", timestamp: "15:11" },
    { id: 4, sender: "receiver", message: "That's fine", timestamp: "15:12" },
    { id: 5, sender: "user", message: "Then at 5 near the tower", timestamp: "15:13" },
    { id: 6, sender: "receiver", message: "Deal!", timestamp: "15:14" },
    { id: 7, sender: "user", message: "similique accusantium nemo autem. Veritatisobcaecatiiiiiiiiioooo tenetur iure", timestamp: "15:17" },
    { id: 8, sender: "receiver", message: "so waht ", timestamp: "15:50" },
    { id: 9, sender: "user", message: "so waht ", timestamp: "15:55" },
    { id: 10, sender: "receiver", message: "so waht ", timestamp: "15:59" },
    { id: 11, sender: "user", message: "so waht ", timestamp: "15:59" },
    { id: 12, sender: "receiver", message: "so waht ", timestamp: "15:59" },
    { id: 13, sender: "user", message: "so waht ", timestamp: "15:59" },
  ]);

  const [inputValue, setInputValue] = useState({
    id: messages.length,
    sender: "user",
    message: "",

  })
  const handleInputChange = (e) => {
    setInputValue( prev => {
      return{
        ...prev,
        message: e.target.value
      }
    } );
  };

  function handleSubmit(){
    setMessages(prev => {
      return [
        ...prev,
        inputValue
      ]
    })
    setInputValue({
    id: messages.length,
    sender: "user",
    message: "",
})
  }
  console.log(displayChat)

  return (
    <>
      {
        displayChat 
          &&
        <div className='display_chat' >
          <AiFillMessage size={60} onClick={() => setDisplayChat(true)}  />
        </div>
      }
      <div className=' chat_section  ' style={{ display: displayChat ? "" : "none"  }} >
        <div className=' top_chat '>
          <h3>
            chat
          </h3>
          <div>
            <BsThreeDotsVertical/>
          </div>
        </div>
          <ChatMessage
            messages={messages}
          />
          <ChatInput 
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit} 
          />
      </div>
    </>
  )
}

export default ChatSection
