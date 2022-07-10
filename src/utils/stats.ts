import type { CompletedWord } from "../types";

/**
 * Returns the number of correct words typed by the user
 *
 * @param completed an array of CompletedWord[] objects
 * @returns number
 */

export const getCorrectWordCount = (completed: CompletedWord[]) => {
  return completed.filter(({ correct }) => correct === true).length;
};

/**
 * Returns the number of mistaken words typed by the user
 *
 * @param completed an array of CompletedWord[] objects
 * @returns number
 */

export const getMistakeWordCount = (completed: CompletedWord[]) => {
  return completed.filter(({ correct }) => correct === false).length;
};

/**
 * Returns the number of words per minute based on:
 * * correctWPM = only correctly typed words
 * * allWPM = all typed words
 *
 * @param completed an array of CompletedWord[] objects
 * @returns correctWPM, allWPM
 */

export const getWordsPerMinute = (completed: CompletedWord[]) => {
  const corrects = getCorrectWordCount(completed);
  const all = completed.length;

  return {
    correctWPM: corrects,
    allWPM: all,
  };
};

/**
 * Returns the number of characters per minute based on:
 * * correctCPM = only correctly typed words
 * * allCPM = all typed words
 *
 * @param completed an array of CompletedWord[] objects
 * @returns correctCPM, allCPM
 */

export const getCharsPerMinute = (completed: CompletedWord[]) => {
  const corrects = completed
    .filter(({ correct }) => correct === true)
    .reduce((acc, { typed }) => (acc += typed.length), 0);
  const all = completed.reduce((acc, { typed }) => (acc += typed.length), 0);

  return {
    correctCPM: corrects,
    allCPM: all,
  };
};

/**
 * Returns an array of CompletedWord[] objects that are correct=false
 *
 * @param completed an array of CompletedWord[] objects
 * @returns CompletedWord[]
 */

export const getMistakes = (completed: CompletedWord[]) => {
  return completed.filter(({ correct }) => correct === false);
};
