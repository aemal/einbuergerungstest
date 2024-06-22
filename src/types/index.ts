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
