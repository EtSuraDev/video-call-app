import React from 'react'
import VideoCard from './VideoCard'
import CallControls from './CallControls'
import { IoTimeOutline } from "react-icons/io5";
import "../styles/components/videocall.css"


function VideoCallSection() {
  return (
    <div className="video_call_section" >
        <div className='video_title  ' >
            <IoTimeOutline size={18} />
            <p>interview</p>
        </div>
            <VideoCard />
            <CallControls />
    </div>
  )
}

export default VideoCallSection
