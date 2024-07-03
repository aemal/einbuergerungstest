"use client";
import { useEffect, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import Score from "../../components/Score";
import myData from "../../data/questions.json";
import { Data, Question, Land } from "../../types";
import useScrollAnimation from "@/hooks/useScrollAnimation";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function CountdownTimer({ initialMinutes = 60 }) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useScrollAnimation("countdown-circle");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      id="countdown-circle"
      className="scroll-animation flex justify-center items-center bg-blue-500 rounded-full text-white text-center w-20 h-20 fixed right-5 top-24 z-10"
    >
      {formatTime(timeLeft)}
    </div>
  );
}

export default function TestPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | null;
  }>({});
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("selectedState")) {
      localStorage.setItem("selectedState", "Berlin");
    }

    const commonQuestions: Question[] = shuffleArray(
      myData.common?.questions
    ).slice(0, 30);

    const selectedState = localStorage.getItem("selectedState");
    const stateData = myData.lands.lands.find(
      (land: Land) => land.name === selectedState
    );
    const stateQuestions: Question[] = stateData
      ? shuffleArray(stateData.questions)
          .slice(0, 3)
          .map((q) => ({ ...q, isState: true }))
      : [];
    const allQuestions = [...commonQuestions, ...stateQuestions];
    setQuestions(allQuestions);
  }, []);

  const handleAnswerSelection = (
    questionIndex: number,
    answerIndex: number
  ) => {
    if (selectedAnswers[questionIndex] == null) {
      const correctAnswer = questions[questionIndex].answers.findIndex(
        (answer: { correct: boolean }) => answer.correct
      );
      if (answerIndex === correctAnswer) {
        setScore(score + 1);
      } else {
        storeWrongQuestion(questions[questionIndex]);
      }
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: answerIndex,
      });
      setAnsweredQuestions(answeredQuestions + 1);
    }
  };

  const storeWrongQuestion = (wrongQuestion: Question) => {
    const storedWrongQuestions = JSON.parse(
      localStorage.getItem("wrongQuestions") || "[]"
    );
    const isDuplicate = storedWrongQuestions.some(
      (q: Question) => q.question === wrongQuestion.question
    );
    if (!isDuplicate) {
      storedWrongQuestions.push(wrongQuestion);
      localStorage.setItem(
        "wrongQuestions",
        JSON.stringify(storedWrongQuestions)
      );
    }
  };

  const calculateScorePercentage = () => {
    return answeredQuestions > 0 ? (score / answeredQuestions) * 100 : 0;
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="items-center justify-center min-h-screen flex flex-col p-4 m-4">
      <Score scorePercentage={calculateScorePercentage()} />
      <CountdownTimer initialMinutes={60} />
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
