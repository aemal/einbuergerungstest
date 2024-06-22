import useScrollAnimation from '../hooks/useScrollAnimation';

interface ScoreProps {
  scorePercentage: number;
}

const Score = ({ scorePercentage }: ScoreProps) => {
  useScrollAnimation("sticky-element");

  return (
    <div
      id="sticky-element"
      className="flex justify-center items-center bg-blue-500 rounded-full text-white text-center w-20 h-20 fixed right-2"
    >
      {scorePercentage.toFixed(0)}%
    </div>
  );
};

export default Score;