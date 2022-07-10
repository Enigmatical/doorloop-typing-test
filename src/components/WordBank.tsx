import { createRef, useEffect } from "react";
import Current from "./Words/Current";
import Complete from "./Words/Complete";
import Incomplete from "./Words/Incomplete";

import type { CompletedWord } from "../types";

interface WordBankProps {
  words: string[];
  completed: CompletedWord[];
  currentIndex: number;
  typedValue: string;
  className?: string;
}

/**
 * This component is responsible for the rendering of the `words` during the test.
 *
 * Any word can display in one of three styles:
 * * Current - actively being typed and shows typing progress and mistakes
 * * Complete - completed by the user and displays either correct or incorrect styling
 * * Incomplete - not yet completed by the user
 *
 * @param props.words list of words from the word bank
 * @param props.currentIndex the index of the word the user is currently typing
 * @param props.typedValue the value of the <Inputter />
 * @param props.completed an array of CompletedWord[] objects
 * @param props.className any additional css classes for this component
 * @returns React.ReactNode
 */

const WordBank = ({
  words,
  currentIndex,
  typedValue,
  completed,
  className,
}: WordBankProps) => {
  const wordRef = createRef<HTMLDivElement>();

  useEffect(() => {
    wordRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [wordRef]);

  return (
    <div className={`overflow-y-hidden h-56 ${className}`}>
      <div className="grid grid-cols-3 gap-5">
        {words.map((word, idx) => {
          if (idx === currentIndex) {
            return (
              <Current
                ref={wordRef}
                key={word}
                word={word}
                typedValue={typedValue}
              />
            );
          }
          if (completed[idx]) {
            return <Complete key={word} completed={completed[idx]} />;
          }
          return <Incomplete key={word} word={word} />;
        })}
      </div>
    </div>
  );
};

export default WordBank;
