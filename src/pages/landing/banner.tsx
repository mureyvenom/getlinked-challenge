import lensflare from "../../assets/images/flare.png";
import innounderline from "../../assets/images/inno-underline.svg";
import star from "../../assets/images/star.svg";
import landingTitle from "../../assets/images/landing-title.svg";
import mobilelandingTitle from "../../assets/images/banner-title-mobile.svg";
import innovation from "../../assets/images/innovation-banner.png";
import mobileinnovation from "../../assets/images/mobile-innovation-banner.png";
import Button from "../../components/Button";
import Typewriter from "typewriter-effect";
import { useCallback, useRef, useState } from "react";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Sparkle from "react-sparkle";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const Banner = () => {
  const [layout, setLayout] = useState({
    height: 0,
    width: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const isMobileScreen = useCheckMobileScreen();
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="relative">
      <img
        src={lensflare}
        alt="lensflare"
        className="absolute top-0 left-0 md:-mt-[300px] opacity-50 -ml-20 blur-lg"
      />
      <div
        className="relative overflow-hidden"
        ref={mainRef}
        style={{ minHeight: layout.height }}
      >
        <div className="flex pt-8 flex-col items-end md:px-14 px-8 relative">
          <div className="font-bold flex italic md:text-left text-center md:w-auto w-full text-base md:text-4xl z-[27493749]">
            Igniting a Revolution in{" "}
            <Typewriter
              options={{
                strings: ["HR Innovation"],
                autoStart: true,
                loop: true,
                wrapperClassName: "ml-1",
              }}
            />
          </div>
          <div className="w-full flex justify-between items-start">
            <div className="relative md:ml-10 ml-32 md:mt-0 mt-9">
              <div>
                <img src={star} alt="star" className="md:h-auto h-[12px]" />
                <Sparkle overflowPx={0} maxSize={3} count={4} />
              </div>
            </div>
            <img
              src={innounderline}
              alt="underline"
              className="max-w-[115px] md:max-w-[auto] md:min-w-[250px]"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:mt-[52px] relative">
          <div className="md:pl-[128px] md:max-w-[722px] px-10">
            <img
              src={isMobileScreen ? mobilelandingTitle : landingTitle}
              alt="title"
              className="md:mx-0 mx-auto"
            />
            <p className="text-xl mb-10 md:text-base md:text-left text-center text-[13px]">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div>
              <div className="max-w-[172px] md:mb-20 mb-5 md:mx-0 mx-auto">
                <Button>Register</Button>
              </div>
            </div>
            <div className="font-unica md:max-w-[285px] max-w-[220px] md:mx-0 mx-auto flex items-center justify-between">
              <div className="md:text-[64px] text-[48px]">
                00<span className="font-montserrat text-sm">H</span>
              </div>
              <div className="md:text-[64px] text-[48px]">
                00<span className="font-montserrat text-sm">M</span>
              </div>
              <div className="md:text-[64px] text-[48px]">
                00<span className="font-montserrat text-sm">S</span>
              </div>
            </div>
          </div>
          <div
            className="md:absolute md:right-0 md:-mt-[280px]"
            ref={containerRef}
          >
            <div className="md:w-[400px] md:h-[400px] w-[230px] h-[230px] right-12 bottom-[100px] overflow-hidden md:bottom-[230px] md:right-[160px] absolute">
              <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="h-full"
                options={{
                  fullScreen: false,
                  background: {
                    color: {
                      value: "transparent",
                    },
                  },
                  fpsLimit: 120,
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 6,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 5 },
                    },
                  },
                  detectRetina: true,
                  smooth: true,
                  zLayers: 4,
                }}
              />
            </div>
            <img
              onLoad={() => {
                setLayout({
                  height: containerRef.current?.offsetHeight
                    ? containerRef.current?.offsetHeight - 140
                    : 0,
                  width: containerRef.current?.offsetWidth || 0,
                });
              }}
              src={isMobileScreen ? mobileinnovation : innovation}
              alt="Smart"
              className="w-auto"
            />
            <Sparkle overflowPx={0} maxSize={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
