import "../styles/components/chatmessage.css"

function ChatMessage(props) {
  
  return (
    <div className="message_list">
      {props.messages.map((msg) => (
        <div key={msg.id} className={`message ${msg.sender === "user" ? "sent" : "received"}`}>
          <p>{msg.message}</p>
        </div>
      ))}
    </div>
  )
}

export default ChatMessage
 