"use client";
import myData from "@/data/questions.json";
import QuestionList from "@/components/QuestionList";
import useScrollPosition from "@/hooks/useScrollPosition";
import { Data } from "@/types";
import { useEffect } from "react";

export default function View1() {
  const data: Data = myData;
  useScrollPosition("scrollPositionTestPage");
  
  return <QuestionList data={data} randomQuestions={false} />;
}
