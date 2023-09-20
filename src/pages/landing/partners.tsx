import React from "react";
import star from "../../assets/images/star.svg";
import starsecondary from "../../assets/images/star-secondary.svg";
import gradientstar from "../../assets/images/gradient-star.svg";
import partners from "../../assets/images/partners.svg";
import partnerflare1 from "../../assets/images/partner-flare-1.png";
import partnerflare2 from "../../assets/images/partner-flare-2.png";
import Sparkle from "react-sparkle";

const Partners = () => {
  return (
    <>
      <div className="relative w-screen md:px-0 px-7">
        <Sparkle overflowPx={0} count={48} maxSize={3} flicker={false} />
        <img
          src={star}
          alt="star"
          className="absolute md:bottom-[24%] md:right-[42%] md:w-auto w-[10px] bottom-[30%] right-[20%]"
        />
        <img
          src={gradientstar}
          alt="gradientstar"
          className="absolute md:top-[38%] md:right-[42%]"
        />
        <img
          src={starsecondary}
          alt="starsecondary"
          className="absolute md:top-[20%] md:left-[12%] left-[18%] top-[32%] md:w-auto w-[10px]"
        />
        <img
          src={partnerflare1}
          alt="partner flare"
          className="absolute top-0 left-0 blur-lg opacity-50 md:-ml-[231px] -ml-[150px] -mt-[140px]"
        />
        <img
          src={partnerflare2}
          alt="partner flare"
          className="absolute bottom-0 right-0 blur-lg opacity-50 md:-mr-[200px] md:-mb-[296px] -mr-32 -mb-[90%]"
        />
        <div className="flex items-center justify-center md:mt-24 md:mb-[64px] z-[8393937397] mt-10">
          <div>
            <h3 className="font-clash text-center md:mb-5 md:text-[32px] text-xl font-bold mb-1">
              Partners and Sponsors
            </h3>
            <div className="md:max-w-[452px] text-center md:text-sm text-xs mb-10">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </div>
          </div>
        </div>
        <div className="mb-32">
          <img src={partners} alt="partners" className="md:mx-auto" />
        </div>
      </div>
      <div className="border-b-[1px] opacity-[0.18]"></div>
    </>
  );
};

export default Partners;
