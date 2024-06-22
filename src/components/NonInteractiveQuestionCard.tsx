import { Answer, Question } from '../types';

interface NonInteractiveQuestionCardProps {
  question: Question;
  questionIndex: number;
}

const NonInteractiveQuestionCard = ({ question, questionIndex }: NonInteractiveQuestionCardProps) => {
  return (
    <div className="relative">
      <NonInteractiveQuestionCardContent
        questionText={question.question}
        answers={question.answers}
        questionIndex={questionIndex}
      />
      <div className="flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full text-white text-center absolute -mt-10 -ml-5 z-10">
        {questionIndex + 1}
      </div>
      <NonInteractiveQuestionCardContent
        questionText={question.questionen || ""}
        answers={question.answers}
        questionIndex={questionIndex}
        isEnglish
      />
    </div>
  );
};

interface NonInteractiveQuestionCardContentProps {
  questionText: string;
  answers: Answer[];
  questionIndex: number;
  isEnglish?: boolean;
}

const NonInteractiveQuestionCardContent = ({
  questionText,
  answers,
  questionIndex,
  isEnglish = false,
}: NonInteractiveQuestionCardContentProps) => {
  return (
    <div className="flex flex-col p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-black">{questionText}</h2>
        <div className="space-y-2">
          {answers.map((answer, answerIndex) => {
            const isCorrect = answer.correct;

            return (
              <div
                key={`${questionIndex}${isEnglish ? "-en" : ""}-${answerIndex}`}
                className={`block p-3 rounded-lg ${
                  isCorrect ? "bg-green-500 text-white" : "bg-gray-200 text-black"
                }`}
              >
                {isEnglish && answer.texten ? answer.texten : answer.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NonInteractiveQuestionCard;
