import React from "react";
import logo from "../../assets/images/logo.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import facebook from "../../assets/images/facebook.svg";
import phone from "../../assets/images/phone.svg";
import location from "../../assets/images/location.svg";
import star from "../../assets/images/star.svg";
import gradientstar from "../../assets/images/gradient-star.svg";
import Sparkle from "react-sparkle";
import { useHistory } from "react-router";

const Footer = () => {
  const history = useHistory();

  return (
    <div className="bg-[#100B20]">
      <div className="grid relative md:grid-cols-[1fr_0.5fr_0.5fr] md:pt-[70px] md:px-0 px-16 pt-[51px] md:pl-[235px] md:mb-14">
        <div className="absolute md:left-[120px] md:top-[105px] top-[128px] left-[36px]">
          <img
            src={star}
            alt="star"
            className="md:w-[15px] md:h-auto w-[9px]"
          />
          <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
        </div>
        <div className="">
          <div className="md:mb-0 mb-3">
            <img
              src={logo}
              alt="logo"
              className="h-[20px] w-auto md:h-auto md:w-auto"
            />
          </div>
          <div className="md:max-w-[412px] md:mt-2 text-xs leading-[172%] md:mb-[74px] mb-10">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </div>
          <div className="md:mb-0 mb-10">
            <div className="flex items-stretch gap-x-2 text-xs">
              <button>Terms of Use</button>
              <div className="w-[2px] bg-accent"></div>
              <button>Privacy Policy</button>
            </div>
          </div>
        </div>
        <div className="md:pt-3 relative">
          <div className="absolute md:-bottom-[30px] md:-left-[150px] left-[20%] -bottom-[120%]">
            <img
              src={gradientstar}
              alt="gradientstar"
              className="md:w-[15px] w-[7px]"
            />
            <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
          </div>
          <p className="text-sm font-semibold text-accent mb-2">Useful Links</p>
          <div className="flex flex-col items-start md:mb-0 mb-3">
            <button
              onClick={() => history.push("/overview")}
              className="text-xs mb-3"
            >
              Overview
            </button>
            <button
              onClick={() => history.push("/timeline")}
              className="text-xs mb-3"
            >
              Timeline
            </button>
            <button
              onClick={() => history.push("/faqs")}
              className="text-xs mb-3"
            >
              FAQs
            </button>
            <button
              onClick={() => history.push("/register")}
              className="text-xs mb-3"
            >
              Register
            </button>
          </div>
          <div className="flex gap-x-4 items-center">
            <div className="text-xs text-accent">Follow Us</div>
            <button>
              <img src={instagram} alt="instagram" />
            </button>
            <button>
              <img src={twitter} alt="twitter" />
            </button>
            <button>
              <img src={facebook} alt="facebook" />
            </button>
            <button>
              <img src={linkedin} alt="linkedin" />
            </button>
          </div>
        </div>
        <div className="md:pt-3 pt-16 relative">
          <div className="absolute md:-left-[90px] md:top-[99px] opacity-40 -top-[50%] left-[50%]">
            <img src={star} alt="star" className="md:w-[15px] w-[15px]" />
            <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
          </div>
          <div className="absolute md:right-[120px] md:bottom-[0px] bottom-[25%] right-[5%]">
            <img src={star} alt="star" className="md:w-[15px] w-[7px]" />
            <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
          </div>
          <p className="text-sm font-semibold text-accent mb-2">Contact Us</p>
          <div className="flex items-center gap-x-4 text-xs leading-[152%]">
            <img src={phone} alt="phone" />
            <p>+234 679 81819</p>
          </div>
          <div className="flex items-start gap-x-4 text-xs md:max-w-[115px] leading-[152%] max-w-[135px] mt-5">
            <img src={location} alt="location" />
            <p>27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <div className="text-center text-xs pb-24 md:mt-0 mt-16">
        All rights reserved. © getlinked Ltd.
      </div>
    </div>
  );
};

export default Footer;
