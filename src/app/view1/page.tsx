"use client";
import { useEffect, useState } from "react";
import myData from "../../data/questions.json";
import QuestionCard from "../../components/QuestionCard";
import Score from "../../components/Score";
import { Data } from "../../types";

export default function View1() {
  const data: Data = myData;
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const handleAnswerSelection = (questionIndex: number, answerIndex: number) => {
    if (selectedAnswers[questionIndex] == null) {
      const correctAnswer = data.common.questions[questionIndex].answers.findIndex(answer => answer.correct);
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
      {data.common.questions.map((item, questionIndex) => (
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
