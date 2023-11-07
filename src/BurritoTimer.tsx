import { useEffect, useRef, useState } from "react";
import { initialTime, timeHelper } from "./helpers/timer";
import { TimerText } from "./styles";

export function BurritoTimer() {
  const [refresher, setRefresher] = useState(0);
  const timer = useRef(initialTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setRefresher((old) => old + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TimerText key={refresher}>{timeHelper.count(timer.current)}</TimerText>
  );
}
