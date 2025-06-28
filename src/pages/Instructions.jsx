import { Link } from "react-router-dom";
import InstructionImage from "../assets/images/instructionimage.png";
import correct from "../assets/logos/check read.png";
import select from "../assets/logos/Select.png";
import drops from "../assets/logos/spots.png";
import { FramerMotion } from "../components/FramerMotion";

export const Instructions = () => {
  return (
    <FramerMotion>
      <div className="max-w-[804px]  bg-white rounded-lg px-[70px] opacity-80 py-4">
        <div className="flex justify-center ml-8">
          <img
            src={InstructionImage}
            alt={InstructionImage}
            className="w-[147px] "
          />
        </div>
        <h1 className="capitalize mt-[-20px] text-center  font-montserrat text-[30px] font-bold text-[#005840]">
          instructions
        </h1>

        <p className="font-montserrat text-center font-semibold text-[16px] mt-[30px] ">
          Welcome to the Stress scale. This is a quiz to identify our stress
          levels ranging from high to low and navigate through such situations.
        </p>

        <div className="flex flex-col  mt-[30px] ml-4">
          <div className="flex items-center gap-2">
            <img src={correct} alt={correct} className="w-[42px]" />
            <p className="font-montserrat text-[16px] font-semibold ">
              Read the statements carefully and relate to each of the
              statements.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={select} alt={select} className="w-[42px]" />
            <p className="font-montserrat text-[16px] font-semibold">
              Choose the option which best describes your mood.
            </p>
          </div>

          <div className="text-center mt-12  relative">
            <Link to={"/choose-emotion"}>
              <button className=" hover:bg-[#154f40]  transition-all duration-200 ease-linear  font-montserrat px-16 bg-[#005840] active:scale-95 rounded-xl py-2 text-white text-[24px] font-normal">
                Start check-in
              </button>
            </Link>
            <div className="absolute right-[140px] bottom-1 top-8">
              <img src={drops} alt={drops} className="w-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </FramerMotion>
  );
};
