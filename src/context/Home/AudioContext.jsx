import React, { createContext } from 'react'
export const AudioDataContext = createContext()
const AudioContext = ({children}) => {
const AudioList=[
    {
        audio:"public/Audio/audio1.mp3",
        Image:'public/home-images/audio1i.png'
    },
    {
        audio:"public/Audio/audio2.mp3",
        Image:'public/home-images/audio2i.png'
    },
    {
        audio:"public/Audio/audio3.mp3",
        Image:'public/home-images/audio3.png'
    },
    {
        audio:"public/Audio/audio4.mp3",
        Image:'public/home-images/audio4.png'
    },
    {
        audio:"public/Audio/audio5.mp3",
        Image:'public/home-images/audio5i.png'
    },
    {
        audio:"public/Audio/audio6.mp3",
        Image:'public/home-images/audio6i.png'
    }
]
  return (
    <div>
        <AudioDataContext value={AudioList}>
            {children}
        </AudioDataContext>
    </div>
  )
}


export default AudioContext