import React, { use, useContext, useEffect, useRef } from 'react'
import { useState } from 'react'
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react'
import { AudioDataContext } from '../../context/Home/AudioContext'

const Audio = () => {
  const [index, setindex] = useState(0)
  const audioData = useContext(AudioDataContext)
  const audioref = useRef(null)
  const [currentTime, setcurrentTime] = useState(0)
  const [duration, setduration] = useState(0)
  const [isplaying, setisplaying] = useState(false)
  const [audiocondition, setaudiocondition] = useState(<Play />)
  const [isautoplay, setisautoplay] = useState(false)

  function formatTime(time) {
    let min = Math.floor(time / 60)
    let sec = Math.floor(time % 60)
    return <div className='flex'>
      <h1>{min < 10 ? "0" + min : min}</h1>:<h1>{sec < 10 ? "0" + sec : sec}</h1>
    </div>
  }
  return (
    <div className='h-40 w-full bg-[conic-gradient(from_var(--rotate),var(--primary),var(--dark-blue))] animate-[rot_3s_linear_infinite] px-1 flex justify-center items-center rounded-2xl'>
      <div style={{ backgroundImage: `url(${audioData[index].Image})` }} className='h-38 w-full bg-sky-600 rounded-2xl p-4   bg-cover bg-center text-white flex flex-col justify-center items-center'>
      <audio ref={audioref} src={audioData[index].audio} onTimeUpdate={() => {
        setcurrentTime(audioref.current.currentTime)
      }} onLoadedMetadata={() => {
        setduration(audioref.current.duration)
      }} autoPlay={isautoplay} ></audio>
      {/* TIME FORMAT */}
      <div className='flex w-full justify-between'>
        {formatTime(currentTime)}{formatTime(duration)}
      </div>
      {/* TIME LENGTH BAR */}
      <div>
        <input className='w-60' type="range" min={0} max={duration} value={currentTime} onChange={(e) => {
          audioref.current.currentTime = e.target.value
        }} />
      </div>

      {/* AUDIO CONTROLS */}
      <div className='flex gap-12 '>

        {/* SKIP BACK */}
        <button onClick={() => {
          if (index === 0) {
            setindex(5)
          } else {
            // setisautoplay(true)
            setindex(index - 1)
            if(isplaying){
              setisautoplay(true)
            }else{
              setisautoplay(false)
            }
            // setisautoplay(false)
          }
        }} ><SkipBack /></button>

        {/* PLAY/PAUSE */}
        <button onClick={() => {
          if (!isplaying) {
            setisplaying(true)

            audioref.current.play()
            setaudiocondition(<Pause />)
          } else {
            setisplaying(false)

            audioref.current.pause()
            setaudiocondition(<Play />)
          }
        }} >{audiocondition}</button>

        {/* SKIP FORWARD */}
        <button onClick={() => {
          if (index === 5) {

            setindex(0)
          } else {
            // setisautoplay(true)
            setindex(index + 1)
            // setisautoplay(false)
            if(isplaying){
              setisautoplay(true)
            }else{
              setisautoplay(false)
            }
          }
        }} ><SkipForward /></button>
      </div>
    </div>
    </div>
  )
}

export default Audio




