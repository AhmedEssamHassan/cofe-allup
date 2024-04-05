import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import flower from "../../assets/images/g12.png";
import cup from "../../assets/images/cup.png";

function Header() {
  return (
    <header
      className="w-full rounded-xl overflow-hidden"
      // style={{ aspectRatio: "5/2" }}
    >
      <Slider
        slidesToShow={1}
        // autoplay
        draggable
        swipeToSlide
        className="h-[100%]"
      >
        <div className="w-full h-full rounded-xl container">
          <div className="relative h-full rounded-xl bg-[#FFBD2B] overflow-hidden flex justify-start items-center">
            <img
              src={flower}
              alt=""
              className="left-0 top-0 absolute w-[40vw]"
            />
            <div className="z-10 ps-5 text-white flex flex-col justify-center items-start gap-3 md:gap-5 lg:gap-8 w-full">
              <h1 className="w-4/5 md:w-3/5 font-bold sm:text-5xl md:text-5xl lg:text-7xl wagner">
                The world famous zafran chai
              </h1>
              <button className="font-ars text-xs sm:text-base md:text-xl lg:text-2xl font-bold rounded-3xl bg-main_color p-2 px-5">
                TRY IT NOW{" "}
              </button>
            </div>
            <img className="absolute right-0 h-full" src={cup} alt="" />
          </div>{" "}
        </div>
        <div className="w-full h-full rounded-xl container">
          <div className="relative h-full rounded-xl bg-[#FFBD2B] overflow-hidden flex justify-start items-center">
            <img
              src={flower}
              alt=""
              className="left-0 top-0 absolute w-[40vw]"
            />
            <div className="z-10 ps-5 text-white flex flex-col justify-center items-start gap-3 md:gap-5 lg:gap-8 w-full">
              <h1 className="w-4/5 md:w-3/5 font-bold sm:text-5xl md:text-5xl lg:text-7xl wagner">
                The world famous zafran chai
              </h1>
              <button className="font-ars text-xs sm:text-base md:text-xl lg:text-2xl font-bold rounded-3xl bg-main_color p-2 px-5">
                TRY IT NOW{" "}
              </button>
            </div>
            <img className="absolute right-0 h-full" src={cup} alt="" />
          </div>{" "}
        </div>
      </Slider>
    </header>
  );
}

export default Header;
