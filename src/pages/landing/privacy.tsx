import React from "react";
import check from "../../assets/images/check.svg";
import privacy from "../../assets/images/privacy.svg";
import privacyflare from "../../assets/images/privacy-flare.png";
import Button from "../../components/Button";
import Sparkle from "react-sparkle";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Privacy = () => {
  return (
    <div className="flex md:flex-row flex-col relative md:px-0 px-12">
      <Sparkle overflowPx={0} count={48} maxSize={3} flicker={false} />
      <img
        src={privacyflare}
        alt="privacy flare"
        className="absolute bottom-0 left-0 md:-ml-[196px] md:opacity-50 md:-mb-[30%] opacity-0"
      />
      <div className="md:ml-[187px] md:mt-[169px] md:mb-24 mt-[71px]">
        <div className="font-clash md:max-w-none max-w-[188px] md:text-[32px] text-xl md:leading-9 leading-6 md:text-left text-center font-bold md:mx-0 mx-auto mb-4 z-[894898]">
          Privacy Policy and <br /> <span className="text-accent">Terms</span>
        </div>
        <div className="md:max-w-[438px]">
          <p className="opacity-75 md:mb-7 md:text-left text-center md:text-sm text-xs mb-7">
            Last updated on September 12, 2023
          </p>
          <p className="mb-16 md:text-left text-center md:text-sm text-xs">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>
        <div
          className={`border-[1px] border-accent rounded-[5px] bg-[#D9D9D9] bg-opacity-[0.03] md:px-[72px] md:pt-[59px] pt-10 md:text-base text-xs px-5 md:pb-[48px]`}
        >
          <div className="md:max-w-[425px] md:text-sm md:mb-6 mb-5 !leading-[216%]">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </div>
          <div className="mb-4">
            <h4 className="font-bold text-accent md:text-base text-[13px] md:mb-3 mb-2">
              Licensing Policy
            </h4>
            <p className="md:text-sm text-xs font-bold">
              Here are terms of our Standard License:
            </p>
          </div>
          <div className="flex items-start gap-x-3 md:mb-4 mb-4">
            <img src={check} alt="check" />
            <div className="md:text-sm md:leading-[216%] leading-[175%] md:-mt-[10px] md:max-w-[423px]">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </div>
          </div>
          <div className="flex gap-x-3 items-start md:mb-4 mb-6">
            <img src={check} alt="check" />
            <div className="md:text-sm md:leading-[216%] leading-[175%] md:-mt-[10px] md:max-w-[423px]">
              You are licensed to use the item available at any free source
              sites, for your project developement
            </div>
          </div>
          <div className="flex items-center justify-center md:mb-0 mb-10">
            <div className="md:w-[172px] w-[140px]">
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mr-24 md:mt-[93px] md:mb-0 mb-20 mt-14">
        <AnimationOnScroll animateIn="animate__flipInY" duration={0.7}>
          <img src={privacy} alt="privacy" />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Privacy;
