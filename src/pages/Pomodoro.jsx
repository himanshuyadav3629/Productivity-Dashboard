import React, { use, useEffect, useRef, useState } from 'react'

const WORK_TIME = 25 * 60;   // 1500 sec
const BREAK_TIME = 5 * 60;  // 300 sec

const Pomodoro = () => {
  const [time, setTime] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work"); // work | break
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);

          // switch mode
          if (mode === "work") {
            setMode("break");
            return BREAK_TIME;
          } else {
            setMode("work");
            return WORK_TIME;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, mode]);

  const handlePlay = () => setIsRunning(true);
  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setMode("work");
    setTime(WORK_TIME);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;




  return (
    <div className='p-6 h-screen bg-sky-200'>
      <div className='h-fit w-full bg-[conic-gradient(from_var(--rotate),var(--primary),var(--dark-blue))] animate-[rot_3s_linear_infinite] p-1 flex justify-center items-center rounded-2xl'>
        <div className='h-50 w-full  rounded-2xl flex flex-col items-center justify-around bg-sky-400'>
          <h4 className='bg-sky-600 p-2 rounded-3xl text-white'>{mode === "work" ? "Work Time" : "Break Time"}</h4>
          <div className="timer text-6xl text-white">
            {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
          </div>
          <div className="controls flex gap-4 text-xl">
            <button className='bg-sky-600 p-2 rounded-full active:scale-85 text-white' onClick={handlePlay} >START</button><button className='bg-sky-600 p-2 rounded-full active:scale-85 text-white' onClick={handlePause}>PAUSE</button><button className='bg-sky-600 p-2 rounded-full active:scale-85 text-white' onClick={handleReset}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pomodoro