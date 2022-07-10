interface StatItemProps {
  label: string;
  value: number;
  valueClass?: string;
}

/**
 * A simple component that returns a single StatItem to be typically used as a children within Stat.
 *
 * @param props.label label for the stat
 * @param props.value value of the stat
 * @param props.valueClass additional class to apply to the value (usually a color)
 * @returns React.ReactNode
 */

const StatItem = ({ label, value, valueClass }: StatItemProps) => {
  return (
    <>
      <dt className="text-sm font-medium text-gray-500 truncate">{label}</dt>
      <dd
        className={`mt-1 text-3xl font-semibold ${
          valueClass || "text-gray-500"
        }`}
      >
        {value}
      </dd>
    </>
  );
};

export default StatItem;
