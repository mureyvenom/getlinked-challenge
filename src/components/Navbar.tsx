import { ReactNode, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close-btn.svg";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";
import Button from "./Button";

interface NProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  active?: boolean;
}

const NButton = ({ onClick, className, children, active }: NProps) => {
  return (
    <button
      onClick={onClick}
      className={`transition-all cursor-pointer duration-300 text-base ${
        active
          ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"
          : "text-white"
      } ${className} transition-all duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent`}
    >
      {children}
    </button>
  );
};

const Navbar = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const isMobileScreen = useCheckMobileScreen();
  const location = useLocation();

  const links = useMemo(
    () => [
      {
        title: "Timeline",
        onClick: () => history.push("/timeline"),
      },
      {
        title: "Overview",
        onClick: () => history.push("/overview"),
      },
      {
        title: "FAQs",
        onClick: () => history.push("/faqs"),
      },
      {
        title: "Contact",
        onClick: () => history.push("/contact"),
        active: location.pathname === "/contact",
      },
    ],
    [history, location]
  );

  return (
    <>
      <div
        className={`flex z-[456789875456] justify-between items-center md:pb-[25px] md:pt-[63px] py-8 px-12 md:px-[128px]`}
      >
        <div>
          <button onClick={() => history.push("/")}>
            <img
              src={logo}
              alt="Get linked"
              className="md:w-auto md:h-auto h-[18px]"
            />
          </button>
        </div>
        <div className="flex">
          {!isMobileScreen ? (
            <div className="flex-1 flex md:gap-x-[121px]">
              <div className="flex items-center md:gap-x-14">
                {links.map((l) => (
                  <NButton active={l?.active} onClick={l.onClick} key={l.title}>
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
        } transition-all duration-300 transform flex flex-col gap-y-5 px-[47px] z-[98765456777]`}
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
    </>
  );
};

export default Navbar;
