import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import VideoCallSection from './components/VideoCallSection';
import ChatSection from './components/ChatSection';
function App() {
  return (
    <div className='container' >
      <Sidebar/>
      <div className='content' >
        <Header/>
        <div className=' main_content ' >
          <VideoCallSection/>
          <ChatSection/>
        </div>
      </div>
    </div>
  )
}

export default App
