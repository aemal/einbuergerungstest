"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Word } from "../types";

interface FlashcardProps {
  word: Word;
}

const Flashcard: React.FC<FlashcardProps> = ({ word }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div
        onClick={handleFlip}
        className="flex items-center justify-center w-80 h-40 bg-blue-500 text-white text-2xl font-bold rounded-lg shadow-lg cursor-pointer"
      >
        {word.German}
      </div>

      <div
        onClick={handleFlip}
        className="flex items-center justify-center w-80 h-40 bg-green-500 text-white text-2xl font-bold rounded-lg shadow-lg cursor-pointer"
      >
        {word.English}
      </div>
    </ReactCardFlip>
  );
};

export default Flashcard;
