"use client";
import React, { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import { Word } from "../types";
import wordsData from "../data/words.json";
import useScrollPosition from "@/hooks/useScrollPosition";

const FlashcardList: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);

  useScrollPosition("scrollPositionFlashcardsPage");
  
  useEffect(() => {
    // Shuffle the words array
    const shuffledWords = [...wordsData].sort(() => Math.random() - 0.5);
    setWords(shuffledWords);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 h-screen p-4">
      {words.map((word, index) => (
        <Flashcard key={index} word={word} />
      ))}
    </div>
  );
};

export default FlashcardList;
