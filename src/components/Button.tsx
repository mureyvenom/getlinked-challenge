import { CSSProperties, ReactNode } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  onClick,
  children,
  className,
  style,
  loading,
  disabled,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`md:h-[53px] h-[46px] flex items-center justify-center transition-all duration-300 md:text-base text-sm w-full rounded bg-gradient-to-r from-extra via-accent to-secondary ${
        disabled ? "opacity-50" : ""
      } ${className}
      ${!className?.includes("text-") && "text-white"}
      ${
        !className?.includes("border-") &&
        "border-primary dark:border-secondary"
      }
      `}
      style={style}
    >
      {loading && <AiOutlineLoading3Quarters className="mr-2 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
