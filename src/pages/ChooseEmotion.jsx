import { useState } from "react";
import { EmotionFaces } from "../components/EmotionFaces";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FramerMotion } from "../components/FramerMotion";
import { useTitle } from "../hook/useTitle";

export const ChooseEmotion = () => {
  const [active, setActive] = useState(null);
  const nav = useNavigate();
  useTitle("Choose Emotion");

  const handleComplete = () => {
    if (active) {
      nav(`/emotion/${active.id}`);
      toast.success(`Emotion selected :  "${active.label}"`);
    } else {
      toast.error("Please select an emotion to proceed");
    }
  };
  return (
    <FramerMotion>
      <div className=" max-lg:max-w-[900px] px-12 max-sm:px-5 max-sm:py-8 bg-white bg-opacity-20 backdrop-blur-[18px]  rounded-xl shadow-md  py-10 font-montserrat flex flex-col justify-center items-center">
        <div>
          <h1 className="font-bold text-[24px] text-[#3E4352] text-center max-sm:text-lg">
            How are you feeling today?
          </h1>
          <p className="max-w-[500px] text-[18px] max-sm:text-[14px] text-[#3E4352] font-semibold text-center mt-4 max-sm:mt-2">
            No matter how you're feeling, it's okay. We're here to support you.
          </p>
        </div>
        <EmotionFaces setActive={setActive} active={active} />
        <p className="text-[#3E4352] text-center mt-12 font-semibold max-sm:text-[14px]">
          Choose the feeling that is closest to how you are feeling
        </p>
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={handleComplete}
          className={`px-24 py-2 bg-[#A44167] text-white font-semibold text-2xl rounded-full capitalize font-montserrat hover:bg-[#7e2144] active:scale-95 transition-all ease-linear ${
            !active ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          complete
        </button>
      </div>
    </FramerMotion>
  );
};
