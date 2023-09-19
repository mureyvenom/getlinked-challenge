import gradientstar from "../../assets/images/star-secondary.svg";
import Sparkle from "react-sparkle";
import Accordion from "../../components/Accordion";
import { accordiondata } from "../../utils/helpers";
import faq from "../../assets/images/faq.svg";
import star from "../../assets/images/star.svg";

const Faqs = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:px-0 px-12">
        <div className="md:pt-28 md:pl-[183px] pt-12">
          <div className="flex">
            <div className="relative">
              <img
                src={gradientstar}
                alt="Gradient star"
                className="md:w-auto w-[18px]"
              />
              <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
            </div>
          </div>
          <div className="md:pl-6">
            <div className="font-clash md:text-[32px] md:leading-9 leading-6 text-xl md:text-left text-center font-bold md:mx-0 mx-auto mb-5 z-[894898]">
              Frequently Asked <br />{" "}
              <span className="text-accent">Questions</span>
            </div>
            <div className="md:text-sm text-xs md:text-left text-center mb-10 leading-7 max-w-[375px] md:mb-16">
              We got answers to the questions that you might want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </div>
            <div>
              <Accordion data={accordiondata} />
            </div>
          </div>
        </div>
        <div className="md:pr-[101px] md:pl-8 md:pt-8 md: pb-10">
          <div className="md:max-h-[820px] max-h-[340px] overflow-hidden relative">
            <img src={faq} alt="FAQ" className="w-full" />
            <Sparkle overflowPx={0} count={40} maxSize={3} flicker={false} />
            <img
              src={star}
              alt="star"
              className="absolute bottom-0 right-0 md:mr-64 md:w-auto w-[16px] mr-20"
            />
          </div>
        </div>
      </div>
      <div className="border-b-[1px] opacity-[0.18]"></div>
    </>
  );
};

export default Faqs;
