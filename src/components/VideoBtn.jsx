import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";


const VideoBtn = ({name}) => {

  const clickHandler = () => {
    console.log("clicked");
  };

  return (
    <button className="bg-transparent flex items-center gap-2" style={{color: '#EA580C'}}>
      <FaRegCirclePlay size={"28px"} /> 
      <span onClick={()=> clickHandler()} className="text-lg text-gray-800 font-medium tracking-wide">{name}</span>
    </button>
  )
}

export default VideoBtn