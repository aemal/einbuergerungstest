"use client";
import React from "react";
import FlashcardList from "../../components/FlashcardList";

const Home: React.FC = () => {
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-5">Flashcards</h1>
      <FlashcardList />
    </div>
  );
};

export default Home;
