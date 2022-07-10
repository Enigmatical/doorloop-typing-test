import { forwardRef } from "react";

interface CurrentProps {
  word: string;
  typedValue: string;
}

/**
 * A more complicated component that handles the inprogress typing of the user against the current word.
 *
 * Additionally, the component uses forwardRef() to provide WordBank with a ref to its position in the DOM
 * so that `scrollIntoView` can be used to navigate the WordBank.
 *
 * @param props.word the current word being typed by the user
 * @param props.typedValue the current value being input by the user
 * @returns React.ReactNode
 */

const Current = forwardRef<HTMLDivElement, CurrentProps>(
  ({ word, typedValue }, ref) => {
    const wordArr = word.split("");
    const typedArr = typedValue.split("");

    return (
      <div
        ref={ref}
        className="bg-blue-200 rounded-lg text-2xl font-bold px-3 py-1"
      >
        {wordArr.map((char, idx) => {
          const type = typedArr[idx] || undefined;

          if (type) {
            if (char === type) {
              return (
                <span key={`${word}-${idx}`} className="text-green-500">
                  {char}
                </span>
              );
            } else {
              return (
                <span key={`${word}-${idx}`} className="text-red-500">
                  {char}
                </span>
              );
            }
          } else {
            return <span key={`${word}-${idx}`}>{char}</span>;
          }
        })}
      </div>
    );
  }
);

export default Current;
