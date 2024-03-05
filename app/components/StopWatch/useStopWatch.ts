import { useRef, useState } from "react";

export function useStopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalId = useRef(0);

  function handleClickStart() {
    intervalId.current = window.setInterval(() => {
      setElapsedTime((prevState) => prevState + 1);
    }, 1000);
    setIsRunning(true);
  }

  function handleClickStop() {
    clearInterval(intervalId.current);
    setIsRunning(false);
  }

  function handleClickReset() {
    clearInterval(intervalId.current);
    setElapsedTime(0);
    setIsRunning(false);
  }

  return {
    elapsedTime,
    handleClickReset,
    handleClickStart,
    handleClickStop,
    isRunning,
  };
}
