import gradientstar from "../../assets/images/gradient-star.svg";
import starsecondary from "../../assets/images/star-secondary.svg";
import bigidea from "../../assets/images/big-idea.svg";
import title from "../../assets/images/big-idea-title.svg";
import mobiletitle from "../../assets/images/mobile-big-idea-title.svg";
import floatingarrow from "../../assets/images/floating-arrow-big-title.svg";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Sparkle from "react-sparkle";
import { forwardRef } from "react";

const BigIdea = forwardRef<HTMLDivElement, any>((_, ref) => {
  const isMobileScreen = useCheckMobileScreen();

  return (
    <>
      <div className="border-t-[1px] opacity-[0.18]"></div>
      <div
        ref={ref}
        className={`flex relative md:flex-row flex-col md:gap-y-0 gap-y-14 md:gap-x-[109px] bg-bg py-16 md:pl-[190px] md:pr-40 px-[70px] items-center`}
      >
        <div className="flex flex-1 items-start">
          <div className="-mr-2 md:mr-8 relative">
            <img
              src={gradientstar}
              alt="Gradient star"
              className="md:w-auto max-w-[11px]"
            />
            <Sparkle overflowPx={0} count={1} maxSize={1} flicker={false} />
          </div>
          <img src={bigidea} alt="The Big Idea" className="md:w-auto w-full" />
        </div>
        <img
          src={floatingarrow}
          alt="Floating arrow"
          className="absolute md:left-[48%] md:bottom-[10%] md:h-auto md:w-auto w-[20px] bottom-[54%]"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <img
              src={isMobileScreen ? mobiletitle : title}
              alt="Title"
              className="mb-4"
            />
            <div className="relative">
              <img
                src={starsecondary}
                alt="Gradient star"
                className="md:mb-4 mb-0 md:min-w-[30px] w-[8px]"
              />
              <Sparkle overflowPx={0} count={5} maxSize={1} />
            </div>
          </div>
          <p className="text-sm md:text-left text-center">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div className="border-b-[1px] opacity-[0.18]"></div>
    </>
  );
});

export default BigIdea;
