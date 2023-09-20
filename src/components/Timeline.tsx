import starsecondary from "../assets/images/star-secondary.svg";
import star from "../assets/images/star.svg";
import Sparkle from "react-sparkle";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface Props {
  data: { title: string; summary: string; number: string; date: string }[];
}

const Timeline = ({ data }: Props) => {
  const isMobileScreen = useCheckMobileScreen();

  return (
    <div className="mb-24 relative">
      <Sparkle overflowPx={0} count={48} maxSize={3} flicker={false} />
      <div className="absolute top-0 left-0 md:ml-[330px] ml-10 md:mt-0 -mt-10">
        <img src={starsecondary} alt="star" className="md:w-auto w-[14px]" />
        <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
      </div>
      <div className="absolute top-0 right-0 md:mr-[260px] md:mt-[35%] mr-10 mt-[90%]">
        <img src={star} alt="star" className="md:w-auto w-[10px]" />
        <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
      </div>
      <div className="absolute opacity-40 bottom-0 left-0 md:ml-[180px] md:mb-[35%] -mb-[10%] -ml-6">
        <img src={star} alt="star" className="md:w-auto w-[10px]" />
        <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
      </div>
      {data.map((d, i) => (
        <div key={`timeline-${d.title}`}>
          <div className="flex md:flex-col flex-row">
            <div className="flex items-center justify-center">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                duration={0.7}
                style={{
                  height: isMobileScreen ? "90%" : undefined,
                }}
              >
                <div
                  className="bg-accent w-1 mb-3"
                  style={{
                    height: isMobileScreen
                      ? "100%"
                      : i === 0
                      ? "137px"
                      : "86px",
                  }}
                ></div>
              </AnimationOnScroll>
            </div>
            <div className="flex flex-1 md:flex-row flex-col md:ml-0 ml-3 items-center justify-center mb-3">
              <div
                className={`flex flex-1 md:px-32 flex-col items-center justify-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 md:mb-0 mb-3 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`md:text-2xl text-xs mb-3 font-bold text-accent`}
                  >
                    <AnimationOnScroll
                      animateIn="animate__fadeInUp"
                      duration={0.7}
                    >
                      {d.title}
                    </AnimationOnScroll>
                  </div>
                  <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    duration={0.7}
                  >
                    <div className="text-xs">{d.summary}</div>
                  </AnimationOnScroll>
                </div>
                {!isMobileScreen && (
                  <>
                    <div className="h-[53px] w-[53px] rounded-full bg-gradient-to-r from-accent to-secondary flex justify-center items-center text-2xl font-bold md:mx-[86px]">
                      <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={0.7}
                      >
                        {d.number}
                      </AnimationOnScroll>
                    </div>
                    <div
                      className={`md:text-2xl text-left text-xs flex-1 font-bold md:w-auto w-full text-accent ${
                        i % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={0.7}
                      >
                        {d.date}
                      </AnimationOnScroll>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {isMobileScreen && (
            <div className="flex gap-x-2 items-center -ml-2 mb-7">
              <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-r from-accent to-secondary flex justify-center items-center text-xs font-bold">
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.7}>
                  {d.number}
                </AnimationOnScroll>
              </div>
              <div
                className={`md:text-2xl text-left text-xs flex-1 font-bold md:w-auto w-full text-accent ${
                  i % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.7}>
                  {d.date}
                </AnimationOnScroll>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
