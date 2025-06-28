import { Route, Routes } from "react-router-dom";
import {
  Instructions,
  Succes,
  EmotionDetail,
  ReasonInput,
  ChooseEmotion,
} from "../pages";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Instructions />} />
      <Route path="/success" element={<Succes />} />
      <Route path="/emotion/:id" element={<EmotionDetail />} />
      <Route path="/reasonInput/:id" element={<ReasonInput />} />
      <Route path="/choose-emotion" element={<ChooseEmotion />} />
    </Routes>
  );
};
