import myData from "../../data/questions.json";
import QuestionList from "../../components/QuestionList";
import { Data } from "../../types";

export default function View3() {
  const data: Data = myData;
  return <QuestionList data={data} randomQuestions={true} />;
}
