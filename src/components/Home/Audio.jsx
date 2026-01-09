// NOTE:
// Earlier version used time comparison to detect audio end,
// which caused multiple state updates and skipped tracks.
// Refactored to use `onEnded` event for predictable behavior.



import React, { useContext, useEffect, useRef, useState } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { AudioDataContext } from "../../context/Home/AudioContext";

const Audio = () => {
  const audioData = useContext(AudioDataContext);
  const audioRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const totalTracks = audioData.length;

  /* ---------- helpers ---------- */
  const formatTime = (time = 0) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  /* ---------- play / pause sync ---------- */
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, index]);

  /* ---------- when song ends ---------- */
  const handleEnded = () => {
    setIndex((prev) => (prev + 1) % totalTracks);
    setIsPlaying(true);
  };

  /* ---------- skip controls ---------- */
  const skipForward = () => {
    setIndex((prev) => (prev + 1) % totalTracks);
  };

  const skipBackward = () => {
    setIndex((prev) => (prev - 1 + totalTracks) % totalTracks);
  };

  return (
    <div className="h-40 w-full bg-[conic-gradient(from_var(--rotate),var(--primary),var(--dark-blue))] animate-[rot_3s_linear_infinite] px-1 flex justify-center items-center rounded-2xl">
      <div
        style={{ backgroundImage: `url(${audioData[index].Image})` }}
        className="h-38 w-full rounded-2xl p-4 bg-cover bg-center text-white flex flex-col justify-center items-center"
      >
        <audio
          ref={audioRef}
          src={audioData[index].audio}
          onLoadedMetadata={(e) => setDuration(e.target.duration)}
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onEnded={handleEnded}
        />

        {/* TIME */}
        <div className="flex w-full justify-between">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* SEEK BAR */}
        <input
          className="w-60"
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = Number(e.target.value);
            setCurrentTime(Number(e.target.value));
          }}
        />

        {/* CONTROLS */}
        <div className="flex gap-12">
          <button onClick={skipBackward}>
            <SkipBack />
          </button>

          <button onClick={() => setIsPlaying((p) => !p)}>
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <button onClick={skipForward}>
            <SkipForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Audio;




