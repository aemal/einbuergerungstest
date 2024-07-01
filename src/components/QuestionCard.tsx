import { Answer, Question } from "../types";
import Image from "next/image";

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  selectedAnswers: { [key: number]: number | null };
  handleAnswerSelection: (questionIndex: number, answerIndex: number) => void;
  isState?: boolean;
}

const QuestionCard = ({
  question,
  questionIndex,
  selectedAnswers,
  handleAnswerSelection,
}: QuestionCardProps) => {
  return (
    <div
      className={`relative ${
        question.isState ? "bg-gray-400" : ""
      } p-4 rounded-lg shadow-md mb-4`}
    >
      {question.image && (
        <Image
          src={`/images/${question.image}`} // Construct the image path
          alt={question.image || ""}
          width={500} // Set the desired width
          height={300} // Set the desired height
        />
      )}
      <QuestionCardContent
        questionText={question.question}
        answers={question.answers}
        questionIndex={questionIndex}
        selectedAnswers={selectedAnswers}
        handleAnswerSelection={handleAnswerSelection}
      />
      <div className="flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full text-white text-center absolute -mt-10 -ml-5 z-10">
        {questionIndex + 1}
      </div>
      <QuestionCardContent
        questionText={question.questionen || ""}
        answers={question.answers}
        questionIndex={questionIndex}
        selectedAnswers={selectedAnswers}
        handleAnswerSelection={handleAnswerSelection}
        isEnglish
      />
    </div>
  );
};

interface QuestionCardContentProps {
  questionText: string;
  answers: Answer[];
  questionIndex: number;
  selectedAnswers: { [key: number]: number | null };
  handleAnswerSelection: (questionIndex: number, answerIndex: number) => void;
  isEnglish?: boolean;
}

const QuestionCardContent = ({
  questionText,
  answers,
  questionIndex,
  selectedAnswers,
  handleAnswerSelection,
  isEnglish = false,
}: QuestionCardContentProps) => {
  return (
    <div className="flex flex-col p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-black">{questionText}</h2>
        {}
        <div className="space-y-2">
          {answers.map((answer, answerIndex) => {
            const isSelected = selectedAnswers[questionIndex] === answerIndex;
            const isCorrect = answer.correct;
            const revealAnswer = selectedAnswers[questionIndex] != null;

            return (
              <label
                key={`${questionIndex}${isEnglish ? "-en" : ""}-${answerIndex}`}
                className={`block p-3 rounded-lg cursor-pointer ${
                  revealAnswer
                    ? isCorrect
                      ? "bg-green-500"
                      : isSelected
                      ? "bg-red-500"
                      : "bg-blue-500"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() =>
                  handleAnswerSelection(questionIndex, answerIndex)
                }
              >
                <input
                  type="radio"
                  name={`option${isEnglish ? "-en" : ""}-${questionIndex}`}
                  className="hidden"
                  disabled={revealAnswer}
                />
                {revealAnswer && (isCorrect ? "✅" : isSelected ? "❌" : "")}{" "}
                {isEnglish && answer.texten ? answer.texten : answer.text}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
