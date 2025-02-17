import React, { useState } from 'react'
import "../styles/components/callcontrols.css"
import { MdVideocamOff } from "react-icons/md";
import { BsFillMicMuteFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";
import { LuSquareArrowUpRight } from "react-icons/lu";


import { MdKeyboardVoice } from "react-icons/md";
// unmute
import { MdCallEnd } from "react-icons/md";
// call end
import { IoMdVideocam } from "react-icons/io";
// video record
import { FaVolumeXmark } from "react-icons/fa6";
// no voice



function CallControls() {
  const [call, setCall] = useState(false)
  const [volume, setVolume] = useState(true)
  const [mute, setMute] = useState(true)
  const [shareVideo, setShareVideo] = useState(true)



  return (
    <div class="call_controls">
      <div className=' shareVideo 'data-tooltip={shareVideo ?   "close camera" : "open camera"}>
        {
          shareVideo ?  
          <IoMdVideocam  size={34} onClick={() => setShareVideo(prev => !prev)} /> : 
          <MdVideocamOff   size={34} onClick={() => setShareVideo(prev => !prev)}   /> 
        }
      </div>
      <div data-tooltip={mute ? "mute" : "unmute"}>
        {
          mute ?
          <MdKeyboardVoice size={38} onClick={() => setMute(prev => !prev)} />:
          <BsFillMicMuteFill size={34}  onClick={() => setMute(prev => !prev)} />
        }
        </div>
        
        <div class='call_controls_call'  data-tooltip={call ? "call" : "end call"} >
          {
            call ?   <MdCallEnd size={34} onClick={() => setCall(prev => !prev)}/> : <IoCallSharp size={34} onClick={() => setCall(prev => !prev)} />
          }
            
        </div>
        <div data-tooltip={volume ? "volume on" : "volume off"}>
          {
            volume ?
            <IoVolumeHigh  size={34} onClick={() => setVolume(prev => !prev)} /> :
            <FaVolumeXmark size={34} onClick={() => setVolume(prev => !prev)} />
          }
        </div>
        <div data-tooltip="go">
          <LuSquareArrowUpRight size={34} />
        </div>
    </div>
  )
}

export default CallControls
