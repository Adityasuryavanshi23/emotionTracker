import { Link } from "react-router-dom";

import emotiondata from "../data/emotiondata.json";
export const EmotionFaces = ({ active, setActive }) => {
  return (
    <div className="flex gap-3 mt-4 flex-wrap max-sm:justify-center">
      {emotiondata.map((face) => (
        <Link key={face.id}>
          <div
            onClick={() => setActive(face)}
            className="flex flex-col font-semibold text-[16px] text-[#686362] items-center cursor-pointer "
          >
            <img
              src={face.image}
              alt={face.image}
              className={`w-[100px] h-[100px] max-sm:w-[70px] max-sm:h-[70px] hover:scale-125 ${
                active?.id === face.id ? "scale-125" : ""
              } transition-all duration-300  ease-in-out`}
            />
            <p className="text-center max-sm:text-sm">{face.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
