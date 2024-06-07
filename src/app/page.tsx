"use client";
import { useEffect, useState } from "react";
import myData from "../data/questions.json";

export type Answer = {
  text: string;
  texten?: string;
  correct: boolean;
};

export type Question = {
  question: string;
  questionen?: string;
  answers: Answer[];
};

export type Data = {
  common: {
    questions: Question[];
  };
};

export default function Home() {
  const data: Data = myData;
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const element = document.getElementById("sticky-element");
      if (element) {
        const scrollY = window.scrollY;
        if (scrollY > lastScrollY) {
          // Scrolling down
          element.style.opacity = "0.5";
          element.style.transform = "scale(0.7)";
        } else {
          // Scrolling up
          element.style.opacity = "1";
          element.style.transform = "scale(1)";
        }
        lastScrollY = scrollY;
      }
      // Save scroll position to localStorage
      localStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    // Retrieve scroll position from localStorage
    const storedScrollPosition = localStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      window.scrollTo(0, parseInt(storedScrollPosition, 10));
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div
        id="sticky-element"
        className="flex justify-center items-center bg-blue-500 rounded-full text-white text-center w-20 h-20 fixed right-2"
      >
        {calculateScorePercentage().toFixed(0)}%
      </div>
      {data.common.questions.map((item, questionIndex) => {
        const correctAnswerIndex = item.answers.findIndex(answer => answer.correct);
        return (
          <div key={questionIndex} className="relative">
            <div className="flex flex-col p-4">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-black">
                  {item.question}
                </h2>
                <div className="space-y-2">
                  {item.answers.map((answer, answerIndex) => {
                    const isSelected = selectedAnswers[questionIndex] === answerIndex;
                    const isCorrect = answer.correct;
                    const revealAnswer = selectedAnswers[questionIndex] != null;

                    return (
                      <label
                        key={`${questionIndex}-${answerIndex}`}
                        className={`block p-3 rounded-lg cursor-pointer hover:bg-blue-600 ${
                          revealAnswer
                            ? isCorrect
                              ? "bg-green-500"
                              : isSelected
                              ? "bg-red-500"
                              : "bg-blue-500"
                            : "bg-blue-500 text-white"
                        }`}
                        onClick={() => handleAnswerSelection(questionIndex, answerIndex)}
                      >
                        <input
                          type="radio"
                          name={`option-${questionIndex}`}
                          className="hidden"
                          disabled={revealAnswer}
                        />
                        {revealAnswer && (isCorrect ? "✅" : isSelected ? "❌" : "")} {answer.text}
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full text-white text-center absolute -mt-10 -ml-5">
              {questionIndex + 1}
            </div>
            <div className="flex flex-col p-4">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-black">
                  {item.questionen}
                </h2>
                <div className="space-y-2">
                  {item.answers.map((answer, answerIndex) => {
                    const isSelected = selectedAnswers[questionIndex] === answerIndex;
                    const isCorrect = answer.correct;
                    const revealAnswer = selectedAnswers[questionIndex] != null;

                    return (
                      <label
                        key={`${questionIndex}-${answerIndex}`}
                        className={`block p-3 rounded-lg cursor-pointer hover:bg-blue-600 ${
                          revealAnswer
                            ? isCorrect
                              ? "bg-green-500"
                              : isSelected
                              ? "bg-red-500"
                              : "bg-blue-500"
                            : "bg-blue-500 text-white"
                        }`}
                        onClick={() => handleAnswerSelection(questionIndex, answerIndex)}
                      >
                        <input
                          type="radio"
                          name={`option-${questionIndex}`}
                          className="hidden"
                          disabled={revealAnswer}
                        />
                        {revealAnswer && (isCorrect ? "✅" : isSelected ? "❌" : "")} {answer.texten || answer.text}
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
