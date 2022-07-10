import type { CompletedWord } from "../../types";

interface CompleteProps {
  completed: CompletedWord;
}

/**
 * A simple component responsible for displaying whether the word is correctly typed or not.
 *
 * This is primarily used by the WordBank component.
 *
 * @param props.completed a single CompletedWord instance (word, typed, correct)
 * @returns React.ReactNode
 */

const Complete = ({ completed }: CompleteProps) => {
  const { word, correct } = completed;
  return (
    <div
      className={`text-2xl px-3 py-1 ${
        correct ? "text-green-500" : "text-red-500"
      }`}
    >
      {word}
    </div>
  );
};

export default Complete;
