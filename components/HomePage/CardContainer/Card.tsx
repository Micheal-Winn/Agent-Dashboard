import React from "react";
import { AdminCards } from "@/components/utils/DummyData/data";

const Card = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-4 sm:gap-x-10 md:gap-x-12 lg:gap-x-14 sm:gap-y-4 md:gap-y-3 lg:gap-y-6  xl:gap-3 2xl:gap-6 w-full pr-6 sm:pr-8 md:pr-6 lg:pr-7 xl:pr-10 2xl:pr-12 mt-4 pl-2">
      {AdminCards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor} h-[185px] sm:h-[140px] md:h-[150px]  lg:h-[180px] xl:h-[160px] 2xl:h-[200px] pt-6 sm:pt-4 md:pt-4 lg:pt-4 xl:pt-6 pl-4 sm:pl-3 md:pl-4  xl:pl-6 text-white  rounded-3xl flex flex-col gap-6 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-4 before:absolute before:content-[''] before:w-[160px] before:h-[160px] before:bg-indigo-500 before:-top-[4.4rem] sm:before:-top-[4rem] md:before:-top-[4.6rem] lg:before:-top-[4.3rem] xl:before:-top-[4.3rem] 2xl:before:-top-24 relative
            2xl:before:-right-20 xl:before:-right-28 lg:before:-right-32 md:before:-right-28 sm:before:-right-28 before:-right-28 overflow-hidden before:rounded-[50%] after:content-[''] after:absolute after:w-[130px] after:h-[130px] after:-z-5 after:bg-sky-500 after:right-[20px] sm:after:right-[20px] md:after:right-[20px] xl:after:right-[30px] 2xl:after:right-[40px] sm:after:-top-[108px] after:-top-[108px] md:after:-top-[108px] xl:after:-top-[108px] 2xl:after:-top-[110px] after:rounded-[50%] `}
        >
          <h2 className=" lg:text-xl font-semibold">main balance</h2>
          <h3 className="text-2xl sm:text-2xl  lg:text-4xl font-bold">
            $ {card.total}
          </h3>
          <p className="text-sm md:text-sm lg:text-base font-medium">
            {card.name}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Card;
