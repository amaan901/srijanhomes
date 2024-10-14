// CountdownTimer.jsx
import React, { useState, useEffect } from "react";

const Timer = ({ initialDays }) => {
  const totalSeconds = initialDays * 24 * 60 * 60;
  const [time, setTime] = useState(totalSeconds);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const days = Math.floor(time / (60 * 60 * 24));
  const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;

  return (
    <div className="flex flex-col items-center justify-center p-4 lg:w-[50%]">
      {time > 0 ? (
        <h1 className="text-xl font-bold md:text-4xl lg:text-5xl mb-4">
          {days}d : {hours}h : {minutes}m : {seconds}s
        </h1>
      ) : (
        <span className="text-3xl mb-4 text-red-500">Time's up!</span>
      )}
    </div>
  );
};

export default Timer;
