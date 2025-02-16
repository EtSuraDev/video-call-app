import React from 'react'
import "../styles/components/callcontrols.css"
import { MdVideocamOff } from "react-icons/md";
import { BsFillMicMuteFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";
import { LuSquareArrowUpRight } from "react-icons/lu";



function CallControls() {
  return (
    <div class="call_controls">
        <MdVideocamOff size={34}  />
        <BsFillMicMuteFill size={34} />
        <div class='call_controls_call'>
            <IoCallSharp size={34} />
        </div>
        <IoVolumeHigh size={34} />
        <LuSquareArrowUpRight size={34} />
    </div>
  )
}

export default CallControls
