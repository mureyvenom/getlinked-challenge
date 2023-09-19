import criteria from "../../assets/images/criteria.svg";
import mobilecriteria from "../../assets/images/mobile-criteria.svg";
import star from "../../assets/images/star.svg";
import gradientstar from "../../assets/images/star-secondary.svg";
import Sparkle from "react-sparkle";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Button from "../../components/Button";
import flare1 from "../../assets/images/criteria-flare-1.png";
import flare2 from "../../assets/images/criteria-flare-2.png";

const criterias = [
  {
    title: "Innovation and Creativity",
    summary: `Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.`,
  },
  {
    title: "Functionality",
    summary: `Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution`,
  },
  {
    title: "Impact and Relevance",
    summary: `Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.`,
  },
  {
    title: "Technical Complexity",
    summary: `Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced  technologies or algorithms, and the scalability of the solution.`,
  },
  {
    title: "Adherence to Hackathon Rules",
    summary: `Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.`,
  },
];

const Criteria = () => {
  const isMobileScreen = useCheckMobileScreen();

  return (
    <>
      <div className="flex relative md:flex-row flex-col md:px-0 px-10 bg-primary md:gap-x-16 md:mb-20 mb-10">
        <img
          src={flare1}
          alt="flare 1"
          className="absolute md:-ml-10 blur-lg -ml-[24%] mt-20"
        />
        <img
          src={flare2}
          alt="flare 2"
          className="absolute right-0 bottom-0 md:-mr-[10%] md:-mb-[40%] -mb-[34%] -mr-[29%] blur-lg"
        />
        <div className="md:pt-16 pt-5 md:pl-16 relative z-[4567897654]">
          <div className="flex">
            <div className="relative md:ml-40 ml-32 md:mb-14 mb-10">
              <img
                src={gradientstar}
                alt="Gradient star"
                className="md:w-[30px] w-[13px]"
              />
              <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
            </div>
          </div>
          <img
            src={isMobileScreen ? mobilecriteria : criteria}
            alt="Criteria"
          />
          <div className="absolute bottom-0 right-0 md:mr-0 mr-[40%] md:mb-0 mb-[34%]">
            <img
              src={star}
              alt="star"
              className="md:w-auto w-[12px] md:opacity-100 opacity-40"
            />
            <Sparkle overflowPx={0} count={7} maxSize={3} flicker={false} />
          </div>
        </div>
        <div className="md:pt-20 md:pr-20 z-[4567897654]">
          <div className="font-clash md:text-[32px] md:leading-9 leading-6 text-xl md:text-left text-center font-bold md:max-w-[275px] max-w-[170px] md:mx-0 mx-auto mb-5 z-[894898]">
            Judging Criteria <br />{" "}
            <span className="text-accent">Key attributes</span>
          </div>
          <div>
            {criterias.map((c) => (
              <div
                key={c.title}
                className="md:text-sm text-xs md:max-w-[568px] leading-5 mb-5 md:text-left text-center"
              >
                <span className="text-accent md:text-base text-[13px] font-bold">
                  {c.title}:
                </span>{" "}
                {c.summary}
              </div>
            ))}
            <div className="max-w-[172px] mt-20 md:mx-0 mx-auto">
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] opacity-[0.18]"></div>
    </>
  );
};

export default Criteria;
