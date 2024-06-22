"use client";
import { NextPage } from 'next';
import myData from "../../data/questions.json";
import NonInteractiveQuestionCard from "../../components/NonInteractiveQuestionCard";
import { Data } from "../../types";

const View2: NextPage = () => {
  const data: Data = myData;

  return (
    <div className="items-center justify-center min-h-screen flex flex-col p-4 m-4">
      {data.common.questions.map((item, questionIndex) => (
        <NonInteractiveQuestionCard
          key={questionIndex}
          question={item}
          questionIndex={questionIndex}
        />
      ))}
    </div>
  );
};

export default View2;
