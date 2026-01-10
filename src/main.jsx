import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageContext from './context/Home/ImageContext.jsx'
import AudioContext from './context/Home/AudioContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import TodoContext from './context/Todo/TodoContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TodoContext>
      <AudioContext>
        <ImageContext>
          <App />
        </ImageContext>
      </AudioContext>
    </TodoContext>
  </BrowserRouter>
)
