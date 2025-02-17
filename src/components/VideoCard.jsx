import React from 'react'
import "../styles/components/videocard.css"
import imgOne from '../assets/image.png'
import imgTow from '../assets/image copy.png'
function VideoCard() {
  return (
    <div class=' video_card_container '>
      <div class="card_one video_card">
        <img src={imgOne} alt="" />
        <p>surafel meles</p>
      </div>
      <div class="card_tow video_card">
        <img src={imgTow} alt="" />
        <p>surafel meles</p>
      </div>
    </div>
  )
}

export default VideoCard
