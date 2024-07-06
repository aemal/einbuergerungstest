"use client";
import { useEffect, useState } from "react";
import QuestionList from "../../components/QuestionList";
import { Question } from "../../types";

export default function MarkedQuestionsPage() {
  const [MarkedQuestions, setMarkedQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const storedMarkedQuestions = JSON.parse(localStorage.getItem("markedQuestions") || "[]");
    setMarkedQuestions(storedMarkedQuestions);
  }, []);

  const data = { common: { questions: MarkedQuestions } };

  return (
    <div className="items-center justify-center min-h-screen flex flex-col p-4 m-4">
      {MarkedQuestions.length === 0 ? (
        <div className="text-center text-gray-500">No marked questions to show.</div>
      ) : (
        <QuestionList data={data} randomQuestions={false} />
      )}
    </div>
  );
}
