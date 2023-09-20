import React from "react";
import Layout from "../../components/Layout";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import facebook from "../../assets/images/facebook.svg";
import star from "../../assets/images/star.svg";
import gradientstar from "../../assets/images/gradient-star.svg";
import starsecondary from "../../assets/images/star-secondary.svg";
import flare1 from "../../assets/images/contact-flare-1.png";
import flare2 from "../../assets/images/contact-flare-2.png";
import mobilecontactflare from "../../assets/images/mobile-contact-flare.png";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Sparkle from "react-sparkle";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

const Contact = () => {
  const isMobileScreen = useCheckMobileScreen();

  return (
    <Layout>
      <div className="flex md:flex-row flex-col w-full relative md:pt-28 min-h-screen">
        <div className="absolute md:top-[60px] md:left-[205px] top-5 left-[44%]">
          <img
            src={gradientstar}
            alt="gradientstar"
            className="md:w-[21px] w-[11px]"
          />
          <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
        </div>
        <div className="absolute md:bottom-[248px] md:left-[40%] left-[34px] bottom-[163px]">
          <img
            src={starsecondary}
            alt="starsecondary"
            className="md:w-[21px] w-[12px]"
          />
          <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
        </div>
        <div className="absolute md:top-5 md:right-[235px] opacity-40 right-[57px] top-20">
          <img src={star} alt="star" className="md:w-[21px] w-[16px]" />
          <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
        </div>
        <div className="absolute md:bottom-[115px] md:right-[128px] right-[27px] bottom-[200px]">
          <img src={star} alt="star" className="md:w-[21px] w-[12px]" />
          <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
        </div>
        <img
          src={isMobileScreen ? mobilecontactflare : flare1}
          alt="flare"
          className="absolute md:-top-[52px] md:-left-[228px] -top-9 -left-3 blur-lg opacity-50"
        />
        {!isMobileScreen && (
          <img
            src={flare2}
            alt="flare"
            className="absolute md:bottom-[0px] md:-right-[10%] blur-lg opacity-50"
          />
        )}
        {!isMobileScreen && (
          <div className="md:pl-[188px] flex-1">
            <h3 className="text-accent font-bold font-clash md:text-[32px] md:mb-4">
              Get in touch
            </h3>
            <div className="max-w-[96px] md:mb-4">Contact Information</div>
            <div className="max-w-[120px] mb-5">
              27,Alara Street Yaba 100012 Lagos State
            </div>
            <p className="mb-5">Call Us : 07067981819</p>
            <div className="max-w-[272px] mb-9">
              we are open from Monday-Friday 08:00am - 05:00pm
            </div>
            <p className="text-accent mb-3">Share on</p>
            <div className="flex gap-x-4 items-center">
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
        )}
        <div className="md:pr-[208px] z-[9876545678]">
          <div className="md:bg-white shadow-md md:mb-[115px] md:bg-opacity-[0.03] md:py-[75px] py-[50px] px-12 rounded-xl md:px-[90px] md:w-[620px]">
            <div className="font-clash font-semibold text-accent text-xl md:mb-9 mb-6">
              Questions or need assistance? <br /> Let us know about it!
            </div>
            {isMobileScreen && (
              <div className="mb-7 text-xs">
                Email us below to any question related to our event
              </div>
            )}
            <div>
              <Input placeholder="First Name" />
              <Input placeholder="Mail" />
              <TextArea placeholder="Message" />
              <div className="flex justify-center items-center">
                <div className="w-[172px]">
                  <Button>Submit</Button>
                </div>
              </div>
              {isMobileScreen && (
                <div className="flex flex-col items-center my-10">
                  <p className="text-accent text-xs mb-2">Share on</p>
                  <div className="flex gap-x-4 items-center">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
