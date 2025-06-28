import { Link, useParams } from "react-router-dom";
import emotiondata from "../data/emotiondata.json";
import { useState } from "react";
import { Button } from "../components/Button";
import { FramerMotion } from "../components/FramerMotion";
import { useTitle } from "../hook/useTitle";

export const EmotionDetail = () => {
  const { id } = useParams();
  const [value, setValue] = useState(50);
  const emotion = emotiondata?.find((item) => item?.id === Number(id));
  console.log(emotion);
  useTitle(emotion?.label);

  return (
    <FramerMotion>
      <div className=" max-lg:max-w-[900px] px-24   bg-white bg-opacity-20 backdrop-blur-[18px] max-sm:rounded-lg rounded-xl shadow-md max-sm:px-4 py-10 font-montserrat flex flex-col justify-between items-center">
        <h1 className="font-bold text-[24px] max-sm:text-[18px] text-[#3E4352] text-center">
          {emotion?.label} is a complex emotion
        </h1>
        <p className=" text-[16px] max-sm:text-[12px] text-[#3E4352]/80 font-semibold text-center mt-1">
          Identifying your emotions is the first step to releasing thems
        </p>
        <img
          src={emotion?.image}
          alt={emotion?.label}
          className="w-[170px] h-[170px] max-sm:w-[120px] max-sm:h-[120px]"
        />
        <div className="flex gap-4 justify-between  items-center">
          <span className="text-[#3E4352] text-[18px] max-sm:text-[14px] font-semibold">
            Slightly {emotion?.label}
          </span>

          <input
            type="range"
            min="0"
            max="100"
            className={`"w-[250px] h-[40px] appearance-none cursor-grab rounded-xl  border ${emotion?.["range-color"]}
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-2.5
    [&::-webkit-slider-thumb]:h-16
    [&::-webkit-slider-thumb]:bg-gradient-to-b
    [&::-webkit-slider-thumb]:${emotion?.["range-color"]}
    [&::-webkit-slider-thumb]:${emotion?.["range-color"]}
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:border-4
    [&::-webkit-slider-thumb]:${emotion?.["range-color"]}
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:w-2.5
    [&::-moz-range-thumb]:h-8
    [&::-moz-range-thumb]:bg-gradient-to-b
    [&::-moz-range-thumb]:${emotion?.["range-color"]}
    [&::-moz-range-thumb]:${emotion?.["range-color"]}
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:border-4
    [&::-moz-range-thumb]:${emotion?.["range-color"]}"`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              background: `linear-gradient(to right, ${emotion?.["range-color"]} ${value}%, #fee2e2 ${value}%)`,
            }}
          />
          <span className="text-[#3E4352] text-[18px] max-sm:text-[14px] font-semibold">
            Very {emotion?.label}
          </span>
        </div>

        <div className="w-full flex flex-col gap-2 mt-8">
          <p className="text-[#3E4352] font-semibold max-sm:text-sm  text-left">
            What stage is your anger in?
          </p>

          <div className="flex gap-5 max-sm:gap-3 flex-wrap">
            {emotion?.keywords.map((item, index) => (
              <span
                key={index}
                className="bg-transparent hover:scale-110 transition-all ease-linear cursor-pointer hover:bg-gray-300 max-sm:p-1 p-2 max-sm:px-2 max-sm:text-[14px]  rounded-[20px] border border-black text-[#3E4352] font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className=" font-montserrat flex justify-center gap-4 mt-6">
        <Link to={"/choose-emotion"}>
          <Button
            content={"add emotions"}
            bgcolor={"#FAFAFA"}
            color={"#A44167"}
            reasoncompletebutton={false}
          />
        </Link>
        <Link to={`/reasonInput/${emotion?.id}`}>
          <Button
            content={"continue"}
            bgcolor={"#A44167"}
            color={"#FAFAFA"}
            reasoncompletebutton={false}
          />
        </Link>
      </div>
    </FramerMotion>
  );
};
