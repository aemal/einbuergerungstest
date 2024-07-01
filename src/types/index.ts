export interface Answer {
  text: string;
  texten?: string; // Make texten optional
  correct: boolean;
}

export interface Question {
  question: string;
  questionen: string;
  image?: string;
  answers: Answer[];
  isState?: boolean;
}

export interface Land {
  name: string;
  short: string;
  questions: Question[];
}

export interface LandsData {
  date: string;
  lands: Land[];
}

export interface Data {
  common: {
    date: string;
    questions: Question[];
  };
  lands: LandsData;
}
