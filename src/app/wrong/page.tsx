"use client";
import { useEffect, useState } from "react";
import QuestionList from "../../components/QuestionList";
import { Question } from "../../types";

export default function WrongQuestionsPage() {
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const storedWrongQuestions = JSON.parse(localStorage.getItem("wrongQuestions") || "[]");
    setWrongQuestions(storedWrongQuestions);
  }, []);

  const data = { common: { questions: wrongQuestions } };

  return (
    <div className="items-center justify-center min-h-screen flex flex-col p-4 m-4">
      {wrongQuestions.length === 0 ? (
        <div className="text-center text-gray-500">No wrong questions to show.</div>
      ) : (
        <QuestionList data={data} randomQuestions={false} />
      )}
    </div>
  );
}
