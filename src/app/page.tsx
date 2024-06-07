"use client";
import Image from "next/image";
import { useEffect } from "react";
import myData from '../data/questions.json';


export default function Home() {

  return (
    <div className="items-center justify-center min-h-screen flex flex-col p-4 m-4">
      {myData.common.questions.map((item, questionIndex) => {
        return (
          <div key={questionIndex} className="relative">
            <div className="flex flex-col p-4">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-black">
                  {item.question}
                </h2>
                <div className="space-y-2">
                  {item.answers.map((answer, answerIndex) => {
                    return (<label key={`{questionIndex}-${answerIndex}`} className="block bg-blue-500 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-600">
                    <input
                      type="radio"
                      name="option"
                      className="hidden"
                      value="paris"
                    />
                    {answer.correct && `✅`} {answer.text}
                  </label>)
                  })}
                </div>
              </div>
            </div>
            {/* <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full text-white text-center fixed -mt-8 -ml-3">{questionIndex + 1}</div> */}
            <div className="flex flex-col p-4">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-black">
                  {item.questionen}
                </h2>
                <div className="space-y-2">
                  {item.answers.map((answer, answerIndex) => {
                    return (<label key={`{questionIndex}-${answerIndex}`} className="block bg-blue-500 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-600">
                    <input
                      type="radio"
                      name="option"
                      className="hidden"
                      value="paris"
                    />
                    {answer.correct && `✅`} {answer.texten}
                  </label>)
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
