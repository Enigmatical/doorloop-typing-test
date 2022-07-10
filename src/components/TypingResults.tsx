import Stat from "./Stat";
import {
  getCharsPerMinute,
  getCorrectWordCount,
  getMistakes,
  getMistakeWordCount,
  getWordsPerMinute,
} from "../utils/stats";
import type { CompletedWord } from "../types";

interface TypingResultsProps {
  handleRestart: Function;
  completed: CompletedWord[];
}

/**
 * The Typing Results which is shown once the Typing Test is complete.
 *
 * This page utilizes utils/stats.ts to compile the results of the test
 * and presents those calculations to the user.
 *
 * @param props.completed an array of CompletedWord[] objects
 * @param props.handleRestart a callback fired when the "Restart Button" is pressed
 * @returns React.ReactNode
 */

const TypingResults = ({ completed, handleRestart }: TypingResultsProps) => {
  const correctCount = getCorrectWordCount(completed);
  const mistakeCount = getMistakeWordCount(completed);
  const { correctWPM, allWPM } = getWordsPerMinute(completed);
  const { correctCPM, allCPM } = getCharsPerMinute(completed);
  const mistakes = getMistakes(completed);

  return (
    <div className="">
      <h2 className="text-center text-2xl">Results</h2>
      <div className="grid grid-cols-3 gap-5 m-8">
        <Stat heading="Only Correct">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Correct Words
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-green-500">
            {correctCount}
          </dd>
          <dt className="text-sm font-medium text-gray-500 truncate">
            Words Per Minute
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-green-500">
            {correctWPM}
          </dd>
          <dt className="text-sm font-medium text-gray-500 truncate">
            Characters Per Minute
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-green-500">
            {correctCPM}
          </dd>
        </Stat>
        <Stat heading="All (including Mistakes)">
          <dt className="text-sm font-medium text-gray-500 truncate">
            All Words
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-red-500">
            {correctCount + mistakeCount}
          </dd>
          <dt className="text-sm font-medium text-gray-500 truncate">
            Words Per Minute
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-red-500">{allWPM}</dd>
          <dt className="text-sm font-medium text-gray-500 truncate">
            Characters Per Minute
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-red-500">{allCPM}</dd>
        </Stat>
        <Stat heading="Mistakes">
          {mistakes.length > 0 && (
            <ul className="list-disc ml-2">
              {mistakes.map((mistake) => {
                return (
                  <li key={mistake.word} className="py-1">
                    For "{mistake.word}", you typed "{mistake.typed}".
                  </li>
                );
              })}
            </ul>
          )}
          {mistakes.length === 0 && <div>You made no mistakes!</div>}
        </Stat>
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={() => handleRestart()}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Restart Test
        </button>
      </div>
    </div>
  );
};

export default TypingResults;
