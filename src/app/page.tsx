"use client";
import { useEffect } from "react";
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="items-center justify-center min-h-screen flex flex-col p-4 m-4">
      <div
        id="sticky-element"
        className="flex justify-center items-center bg-blue-500 rounded-full text-white text-center w-20 h-20 fixed right-2"
      >
        34%
      </div>
      {data.common.questions.map((item, questionIndex) => {
        return (
          <div key={questionIndex} className="relative">
            <div className="flex flex-col p-4">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-black">
                  {item.question}
                </h2>
                <div className="space-y-2">
                  {item.answers.map((answer, answerIndex) => {
                    return (
                      <label
                        key={`${questionIndex}-${answerIndex}`}
                        className="block bg-blue-500 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-600"
                      >
                        <input
                          type="radio"
                          name="option"
                          className="hidden"
                          value="paris"
                        />
                        {answer.correct && `✅`} {answer.text}
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
                    return (
                      <label
                        key={`${questionIndex}-${answerIndex}`}
                        className="block bg-blue-500 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-600"
                      >
                        <input
                          type="radio"
                          name="option"
                          className="hidden"
                          value="paris"
                        />
                        {answer.correct && `✅`} {answer.texten || answer.text}
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
