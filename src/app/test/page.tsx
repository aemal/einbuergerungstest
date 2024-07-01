"use client";
import { NextPage } from 'next';
import myData from "../../data/questions.json";
import NonInteractiveQuestionCard from "../../components/NonInteractiveQuestionCard";
import { Data } from "../../types";

const View2: NextPage = () => {
  const data: Data = myData;

  return (
    <div className="items-center justify-center min-h-screen flex flex-col p-4 m-4">
      test
    </div>
  );
};

export default View2;
