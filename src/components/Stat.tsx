interface StatProps {
  heading: string;
  children: React.ReactNode;
}

/**
 * A simple framing component for each panel shown in the TypingResults.
 *
 * @param props.heading the heading for the Stats panel
 * @param props.children the content for the Stats panel
 * @returns React.ReactNode
 */

const Stat = ({ heading, children }: StatProps) => {
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">{heading}</h3>
      <dl className="mt-5">
        <div className="px-5 py-5 bg-white shadow rounded-lg overflow-y-scroll h-56">
          {children}
        </div>
      </dl>
    </div>
  );
};

export default Stat;
