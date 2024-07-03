"use client";
import myData from "@/data/questions.json";
import QuestionList from "@/components/QuestionList";
import useScrollPosition from "@/hooks/useScrollPosition";
import { Data } from "@/types";

export default function View1() {
  const data: Data = myData;
  useScrollPosition("scrollPositionTestPage");
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-5 mt-20">310 Questions</h1>
      <p className="text-center pl-5 pr-5">You can keep scrolling, leave the app, come back and it will resume from the same scroll position.</p>
      <QuestionList data={data} randomQuestions={false} />
    </>
  );
}
