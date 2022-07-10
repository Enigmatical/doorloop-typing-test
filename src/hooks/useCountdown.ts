import { useState, useEffect } from "react";

/**
 * A custom hook responsible for the Typing Test's Countdown.
 *
 * It uses a combination of two `useEffect()` hooks:
 * * The first manages the countdown itself, decrementing timeLeft every second (via setTimeout).
 * * The second manages the completion of the countdown, resetting the clock, and firing the callback.
 *
 * @param target number of seconds
 * @param onCountdownComplete callback fired when countdown finishes
 * @returns timeLeft, active, setActive
 */

const useCountdown = (target: number, onCountdownComplete: () => void) => {
  const [active, setActive] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(target);

  useEffect(() => {
    if (active && timeLeft > 0) {
      setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
  }, [active, timeLeft]);

  useEffect(() => {
    if (active === true && timeLeft === 0) {
      setActive(false);
      setTimeLeft(target);
      onCountdownComplete();
    }
  }, [active, timeLeft, target, onCountdownComplete]);

  return { timeLeft, active, setActive };
};

export default useCountdown;
