import rules from "../../assets/images/rules.svg";
import star from "../../assets/images/star.svg";
import lensflare from "../../assets/images/flare.png";
import rulesflare from "../../assets/images/rules-flare.png";
import Sparkle from "react-sparkle";

const Rules = () => {
  return (
    <>
      <div className="relative flex w-screen flex-col-reverse md:px-0 px-10 justify-between md:flex-row bg-primary z-[87484080]">
        <img
          src={lensflare}
          alt="lens flare"
          className="absolute md:-mt-[250px] top-0 left-0 md:left-auto md:ml-0 -ml-10 -mt-16 opacity-60 blur-lg"
        />
        <img
          src={rulesflare}
          alt="lens flare 2"
          className="absolute right-0 md:scale-100 scale-50 md:mr-0 -mr-24 top-0 md:mt-0 mt-1 blur-lg"
        />
        <div className="absolute md:left-[52%] left-[52px] bottom-[78%] md:w-auto w-[10px] md:bottom-[20%] md:mx-auto flex justify-center">
          <div className="relative">
            <img src={star} alt="star" className="" />
            <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
          </div>
        </div>
        <div className="md:pl-[180px] md:pt-24 z-[4567897654]">
          <div className="opacity-40 md:mx-auto flex justify-center">
            <div className="relative">
              <img src={star} alt="star" className="" />
              <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
            </div>
          </div>
          <div className="font-clash md:text-[32px] text-xl md:text-left text-center font-bold md:max-w-[170px] max-w-[120px] md:mx-0 mx-auto mb-4 z-[894898]">
            Rules and <span className="text-accent">Guidelines</span>
          </div>
          <div className="md:text-sm text-[13px] md:text-left text-center md:mb-0 mb-6 md:max-w-[527px] leading-[27.5px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </div>
        </div>
        <div className="z-[4567897654]">
          <img src={rules} alt="Rules" />
        </div>
      </div>
      <div className="border-b-[1px] opacity-[0.18]"></div>
    </>
  );
};

export default Rules;
