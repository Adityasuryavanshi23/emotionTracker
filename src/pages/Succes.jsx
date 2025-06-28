import succesimg from "../assets/images/succes.png";
import card1 from "../assets/images/Card Container.png";
import card2 from "../assets/images/Card Container 2.png";
import card3 from "../assets/images/Card Container 3.png";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { FramerMotion } from "../components/FramerMotion";

export const Succes = () => {
  const cardContainers = [
    {
      id: 1,
      img: card1,
    },
    {
      id: 2,
      img: card2,
    },
    {
      id: 3,
      img: card3,
    },
  ];
  return (
    <FramerMotion>
      <div className="max-w-[804px] max-sm:w-full  bg-white rounded-2xl px-[20px] max-sm:px-[30px] opacity-80 py-4 flex flex-col items-center font-montserrat ">
        <img
          src={succesimg}
          alt={"succesimg"}
          className="w-40 mb-2 max-sm:w-28"
        />
        <h1 className="font-semibold text-[#4E2C84] text-2xl max-sm:text-xl">
          Great job completing your session!
        </h1>
        <p className="text-[#4E2C84] font-normal text-[16px] max-sm:text-[14px] mt-4">
          Want to make this a habbit? Set a remainder for next time.
        </p>
        <div className="text-center mt-4">
          <Link to={"/"}>
            <Button
              content={"go to home"}
              bgcolor={"#005840"}
              color={"#FAFAFA"}
            />
          </Link>
        </div>

        <div className="w-full mt-[30px]">
          <h1 className="ml-5 font-semibold text-black text-xl max-sm:text-lg">
            My Reccomendations
          </h1>
          <div className="block sm:hidden mt-4">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
              spaceBetween={20}
              slidesPerView={1}
            >
              {cardContainers.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.img}
                    alt={`card-${item.id}`}
                    className="w-60 mx-auto hover:scale-110 transition-all ease-linear duration-300 hover:drop-shadow-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden sm:flex justify-center gap-4 mt-4">
            {cardContainers.map((item) => (
              <img
                key={item.id}
                src={item.img}
                alt={`card-${item.id}`}
                className="w-60 hover:scale-105 transition-all ease-linear duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </FramerMotion>
  );
};
