interface IncompleteProps {
  word: string;
}

/**
 * A very simple component that displays a word that has not yet been typed by the user yet.
 *
 * @param props.word a word that has not been typed yet
 * @returns React.ReactNode
 */

const Incomplete = ({ word }: IncompleteProps) => {
  return <div className="text-2xl px-3 py-1 ">{word}</div>;
};

export default Incomplete;
