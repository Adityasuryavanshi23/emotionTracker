import { useNavigate, useParams } from "react-router-dom";
import emotiondata from "../data/emotiondata.json";
import gallerylogo from "../assets/logos/gallery.png";
import toast from "react-hot-toast";
import { useState } from "react";
import { Button } from "../components/Button";
import axios from "axios";
import { FramerMotion } from "../components/FramerMotion";

export const ReasonInput = () => {
  const { id } = useParams();
  const emotion = emotiondata?.find((item) => item.id === Number(id));
  const extractedemotion = emotion?.keywords.slice(1, 4);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async () => {
    if (!reason.trim()) {
      toast.error("Please enter a reason");
      return;
    }

    setLoading(true);
    try {
      const userData = {
        emotion: emotion.label,
        note: reason,
        timestamp: new Date().toISOString(),
      };
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        userData
      );
      console.log(res.data);
      toast.success("submitted successfully");
      setReason("");
      nav("/success");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FramerMotion>
      <div className="max-w-[900px] px-24 max-sm:px-3  bg-white bg-opacity-20 backdrop-blur-[18px]  rounded-xl shadow-md  py-10 font-montserrat flex flex-col gap-8 justify-between items-center">
        <h1 className="font-bold text-2xl max-sm:text-[16px] text-[#3E4352]">
          What is making you feel this way?
        </h1>
        <div className="relative">
          <textarea
            name="reason"
            placeholder=" I feel this way because...."
            className="placeholder:text-[#3E4352]/70 placeholder:font-semibold placeholder:text-lg max-sm:placeholder:text-[14px] h-[220px] max-sm:h-[180px] max-sm:w-full pl-4 pr-14  py-4 bg-transparent text-black font-semibold font-montserrat capitalize placeholder:lowercase  border border-black rounded-xl resize-none overflow-y-auto focus:outline-none max-sm:overflow-y-auto "
            cols={"60"}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
          <img
            onClick={() =>
              toast.error("Sorry This Feature Is Not Started Yet.. ")
            }
            src={gallerylogo}
            alt="gallerylogo"
            className="absolute max-sm:w-8 cursor-pointer bottom-4 right-4 top-3 hover:scale-110 transition-all ease-linear duration-300 hover:rotate-180"
          />
        </div>

        <div className="font-montserrat flex justify-between items-center w-full">
          <div>
            <h1 className="text-[#3E4352] font-bold text-xl">
              {emotion?.label}
            </h1>
            <div className="flex gap-4">
              {extractedemotion?.map((item) => (
                <span className="flex items-center font-montserrat text-[16px] max-sm:text-[12px] text-[#3E4352] font-semibold">
                  {item}{" "}
                  <span className="text-2xl mb-2 ml-2 max-sm:mb-3 max-sm:ml-1 font-extrabold">
                    .
                  </span>
                </span>
              ))}
            </div>
          </div>
          <img
            src={emotion?.image}
            alt={emotion?.image}
            className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] hover:animate-spin transition-all ease-linear   duration-300"
          />
        </div>
      </div>

      <div onClick={handleSubmit} className="mt-6 text-center">
        <Button
          content={loading ? "submitting..." : "complete"}
          bgcolor={"#A44167"}
          color={"#FAFAFA"}
          loading={loading}
          setLoading={setLoading}
          reason={reason}
          reasoncompletebutton={true}
        />
      </div>
    </FramerMotion>
  );
};
