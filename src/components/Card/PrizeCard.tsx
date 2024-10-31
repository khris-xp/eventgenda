type Props = {
  prize: number;
  index: string;
};

const PRIZE_STYLES = {
  "1": {
    text: "text-red-500",
    gradient: "from-red-500 to-red-300",
    ring: "ring-4 ring-red-300",
    label: "First Prize",
  },
  "2": {
    text: "text-yellow-500",
    gradient: "from-yellow-500 to-yellow-300",
    ring: "ring-4 ring-yellow-300",
    label: "Second Prize",
  },
  "3": {
    text: "text-green-500",
    gradient: "from-green-500 to-green-300",
    ring: "ring-4 ring-green-300",
    label: "Third Prize",
  },
} as const;

const getStyles = (index: string) => {
  return PRIZE_STYLES[index as keyof typeof PRIZE_STYLES] ?? PRIZE_STYLES["3"];
};

export default function PrizeCard({ prize, index }: Props) {
  const styles = getStyles(index);

  return (
    <div className="pt-10 w-full hover:scale-105 duration-500">
      <div className="flex items-center justify-between p-4 rounded-lg bg-white shadow-indigo-50 shadow-md">
        <div>
          <h2 className="text-gray-900 text-lg font-bold">Prize Rewards</h2>
          <h3 className={`mt-2 text-xl font-bold ${styles.text} text-left`}>
            + {prize} ฿
          </h3>
          <p className="text-sm font-semibold text-gray-400">{styles.label}</p>
        </div>
        <div
          className={`
            bg-gradient-to-tr
            ${styles.gradient}
            ${styles.ring}
            w-32 h-32 rounded-full shadow-2xl
            border-white border-dashed border-2
            flex justify-center items-center
          `}
        >
          <div>
            <h1 className="text-white text-2xl">{index}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
