import React from "react";
import starsecondary from "../../assets/images/star-secondary.svg";
import star from "../../assets/images/star.svg";
import prizesbg from "../../assets/images/prizes-bg.png";
import mobileprizesbg from "../../assets/images/mobile-prizes-bg.png";
import prizes from "../../assets/images/prizes.svg";
import rewards from "../../assets/images/rewards.svg";
import flare1 from "../../assets/images/prizes-flare-1.png";
import flare2 from "../../assets/images/prizes-flare-2.png";
import Sparkle from "react-sparkle";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Prizes = () => {
  const isMobileScreen = useCheckMobileScreen();

  return (
    <div className="w-screen">
      <div
        className="bg-cover align-top md:px-0 px-14 overflow-y-hidden overflow-x-hidden w-screen bg-no-repeat bg-bg bg-center flex md:flex-row flex-col relative md:pb-[200px] pb-24 bg-opacity-0"
        style={
          {
            //   backgroundImage: isMobileScreen ? `url(${prizesbg})` : undefined,
          }
        }
      >
        <img
          src={starsecondary}
          alt=""
          className="absolute md:top-20 top-10 md:left-[334px] md:w-[21px] w-[10px]"
        />
        <img
          src={starsecondary}
          alt=""
          className="absolute md:top-20 top-24 md:right-[334px] md:w-[21px] right-20 w-[10px]"
        />
        <img
          src={star}
          alt=""
          className="absolute md:right-20 md:top-[50%] md:w-[26px] top-[55%] w-[10px]"
        />
        <img
          src={star}
          alt=""
          className="absolute md:left-[320px] md:w-[15px] bottom-[40%] left-[78%] w-[10px]"
        />
        {!isMobileScreen && (
          <img
            src={isMobileScreen ? mobileprizesbg : prizesbg}
            alt=""
            className="absolute h-full w-full opacity-30 blur-lg"
          />
        )}
        <Sparkle overflowPx={0} count={48} maxSize={3} flicker={false} />
        <img
          src={flare1}
          alt="flare 1"
          className="absolute md:-ml-10 blur-lg -ml-[24%] mt-20 opacity-50"
        />
        <img
          src={flare2}
          alt="flare 2"
          className="absolute right-0 bottom-0 md:-mr-[10%] md:-mb-[20%] opacity-50 -mb-[74%] -mr-[39%] blur-lg"
        />
        {isMobileScreen && (
          <div className="md:pl-36 pt-20 mb-10">
            <div className="font-clash md:text-[32px] text-xl md:leading-9 leading-6 md:text-left text-center font-bold md:mx-0 mx-auto mb-4 z-[894898]">
              Prizes and <br /> <span className="text-accent">Rewards</span>
            </div>
            <div className="max-w-[277px] md:mb-20 text-center text-xs">
              Highlight of the prizes or rewards for winners and for
              participants.
            </div>
          </div>
        )}
        <div className="md:pt-[260px] md:pl-[120px] z-[673638638] md:mb-0 mb-14">
          <img src={prizes} alt="prizes" />
        </div>
        <div className="md:pt-20 md:ml-10 z-[673638638] md:pr-40">
          {!isMobileScreen && (
            <div className="md:pl-36">
              <div className="font-clash md:text-[32px] md:leading-9 leading-6 text-xl md:text-left text-center font-bold md:mx-0 mx-auto mb-4 z-[894898]">
                Prizes and <br /> <span className="text-accent">Rewards</span>
              </div>
              <div className="md:max-w-[401px] md:mb-20">
                Highlight of the prizes or rewards for winners and for
                participants.
              </div>
            </div>
          )}
          <div>
            <AnimationOnScroll animateIn="animate__zoomIn" duration={0.7}>
              <img src={rewards} alt="rewards" />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
