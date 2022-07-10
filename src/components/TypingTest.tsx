import { useState } from "react";
import { CompletedWord } from "../types";
import Inputter from "./Inputter";
import WordBank from "./WordBank";
import useCountdown from "../hooks/useCountdown";

interface TypingTestProps {
  words: string[];
  completed: CompletedWord[];
  onSubmitValue(word: string, value: string): void;
  onCountdownComplete(): void;
}

/**
 * The Typing Test which consists of <WordBank /> and the <Inputter />.
 *
 * This component is also responsible for managing the Timer (useCountdown()).
 *
 * @param props.words list of words from the word bank
 * @param props.completed an array of CompletedWord[] objects
 * @param props.onSubmitValue a callback fired when the <Inputter /> submits a value
 * @param props.onCountdownComplete a callback fired when useCountdown finishes
 * @returns React.ReactNode
 */

const TypingTest = ({
  words,
  completed,
  onSubmitValue,
  onCountdownComplete,
}: TypingTestProps) => {
  const { timeLeft, active, setActive } = useCountdown(60, () => {
    setCurrentIndex(0);
    onCountdownComplete();
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [typedValue, setTypedValue] = useState<string>("");

  const onSubmit = (value: string) => {
    if (active === false) {
      setActive(true);
    }

    const word = words[currentIndex];
    onSubmitValue(word, value);

    setCurrentIndex((curr) => curr + 1);
    setTypedValue("");
  };

  return (
    <div>
      <h2 className="text-center text-2xl">Test</h2>
      <WordBank
        className="m-8"
        words={words}
        completed={completed}
        currentIndex={currentIndex}
        typedValue={typedValue}
      />
      <div className="grid grid-cols-1 grid-rows-2 place-items-center">
        <Inputter
          onType={(value) => setTypedValue(value)}
          onSubmit={onSubmit}
        />
        <div>
          <span className="mr-2 font-bold">Time Left:</span>
          <span>
            {timeLeft} second{timeLeft !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
