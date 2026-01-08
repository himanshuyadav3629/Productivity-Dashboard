import React, { Children, createContext, useContext } from 'react'

export const ImageDataContext=createContext()

const ImageContext = ({children}) => {
  return (
    <div>
        <ImageDataContext.Provider value={{
            todo:"/home-images/todo.jpg",
            dailygoals:"/home-images/dailygoals.jpg",
            motivation:"/home-images/motivation.jpg",
            pomodoro:"/home-images/pomodoro.jpg"
        }}>
            {children}
        </ImageDataContext.Provider>
    </div>
  )
}

export default ImageContext