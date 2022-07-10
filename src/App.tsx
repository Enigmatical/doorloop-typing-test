import { useState } from "react";

import TypingTest from "./components/TypingTest";
import TypingResults from "./components/TypingResults";

import getWords from "./utils/words";

import type { CompletedWord } from "./types";

/**
 * Overall app is responsible for maintaining states and callbacks
 * that are used by both TypingTest and TypingResults.
 *
 * Primarily, it is responsible for maintaining the `completed` state which is an array of
 * CompletedWord objects that respresent both the progress of the current Test as well as the Results.
 *
 * @returns React.ReactNode
 */

const App = () => {
  const [words, setWords] = useState<string[]>(getWords());
  const [completed, setCompleted] = useState<CompletedWord[]>([]);

  const [showResults, setShowResults] = useState<boolean>(false);

  const handleRestart = () => {
    setWords(getWords());
    setCompleted([]);

    setShowResults(false);
  };

  const onCountdownComplete = () => {
    setShowResults(true);
  };

  const onSubmitValue = (word: string, value: string) => {
    if (word === value) {
      setCompleted((completed) => [
        ...completed,
        { word, typed: value, correct: true },
      ]);
    } else {
      setCompleted((completed) => [
        ...completed,
        { word, typed: value, correct: false },
      ]);
    }
  };

  return (
    <div className="pt-8 h-screen bg-gradient-to-b from-white to-slate-300">
      <h1 className="text-3xl font-extrabold text-center">Typing Assessment</h1>
      {!showResults && (
        <TypingTest
          words={words}
          completed={completed}
          onSubmitValue={onSubmitValue}
          onCountdownComplete={onCountdownComplete}
        />
      )}
      {showResults && (
        <TypingResults completed={completed} handleRestart={handleRestart} />
      )}
    </div>
  );
};

export default App;
