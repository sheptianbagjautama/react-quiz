import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimetout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMETOUT");
    const timer = setTimeout(onTimetout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimetout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
