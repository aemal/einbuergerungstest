"use client";
import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import Score from "./Score";
import { Data } from "../types";

interface QuestionListProps {
  data: Data;
  randomQuestions: boolean;
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function QuestionList({ data, randomQuestions }: QuestionListProps) {
  const [questions, setQuestions] = useState(data.common.questions);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  useEffect(() => {
    if (randomQuestions) {
      setQuestions(shuffleArray([...data.common.questions]));
    } else {
      setQuestions([...data.common.questions]);
    }
  }, [randomQuestions, data.common.questions]);

  const handleAnswerSelection = (questionIndex: number, answerIndex: number) => {
    if (selectedAnswers[questionIndex] == null) {
      const correctAnswer = questions[questionIndex].answers.findIndex(answer => answer.correct);
      if (answerIndex === correctAnswer) {
        setScore(score + 1);
      }
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: answerIndex,
      });
      setAnsweredQuestions(answeredQuestions + 1);
    }
  };

  const calculateScorePercentage = () => {
    return answeredQuestions > 0 ? (score / answeredQuestions) * 100 : 0;
  };

  return (
    <div className="items-center justify-center min-h-screen flex flex-col p-4 m-4">
      <Score scorePercentage={calculateScorePercentage()} />
      {questions.map((item, questionIndex) => (
        <QuestionCard
          key={questionIndex}
          question={item}
          questionIndex={questionIndex}
          selectedAnswers={selectedAnswers}
          handleAnswerSelection={handleAnswerSelection}
        />
      ))}
    </div>
  );
}
