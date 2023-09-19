import { ReactNode, useMemo, useState } from "react";
import { useHistory } from "react-router";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close-btn.svg";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";
import Button from "./Button";

interface NProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

const NButton = ({ onClick, className, children }: NProps) => {
  return (
    <button
      onClick={onClick}
      className={`transition-all duration-300 text-base text-white ${className}`}
    >
      {children}
    </button>
  );
};

const Navbar = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const isMobileScreen = useCheckMobileScreen();

  const links = useMemo(
    () => [
      {
        title: "Timeline",
        onClick: () => history.push("/"),
      },
      {
        title: "Overview",
        onClick: () => history.push("/"),
      },
      {
        title: "FAQs",
        onClick: () => history.push("/"),
      },
      {
        title: "Contact",
        onClick: () => history.push("/"),
      },
    ],
    [history]
  );

  return (
    <>
      <div
        className={`flex justify-between items-center md:pb-[25px] md:pt-[63px] py-8 px-12 md:px-[128px]`}
      >
        <div>
          <img
            src={logo}
            alt="Get linked"
            className="md:w-auto md:h-auto h-[18px]"
          />
        </div>
        <div className="flex">
          {!isMobileScreen ? (
            <div className="flex-1 flex md:gap-x-[121px]">
              <div className="flex items-center md:gap-x-14">
                {links.map((l) => (
                  <NButton onClick={l.onClick} key={l.title}>
                    {l.title}
                  </NButton>
                ))}
              </div>
              <div>
                <Button className="px-14">Register</Button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setVisible(!visible)}
              className="w-[23px] h-[23px]"
            >
              <img src={visible ? close : menu} alt="menu-toggle" />
            </button>
          )}
        </div>
      </div>
      <div
        className={`${
          visible && isMobileScreen
            ? "h-auto pb-40 pt-10"
            : "h-0 overflow-hidden"
        } transition-all duration-300 transform flex flex-col gap-y-5 px-[47px]`}
      >
        {links.map((l) => (
          <NButton onClick={l.onClick} key={l.title} className="text-left">
            {l.title}
          </NButton>
        ))}
        <div className="max-w-[172px]">
          <Button className="px-14">Register</Button>
        </div>
      </div>
      <div className="border-b-[1px] opacity-[0.18]"></div>
    </>
  );
};

export default Navbar;
