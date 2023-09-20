import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  containerClass?: string;
  labelClass?: string;
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    containerClass,
    error,
    label,
    labelClass,
    className,
    style,
    ...rest
  } = props;
  return (
    <div className={`md:mb-10 mb-6 ${containerClass}`}>
      {label && <p className={`text-sm mb-3 ${labelClass}`}>{label}</p>}
      <input
        ref={ref}
        type="text"
        style={{
          ...style,
        }}
        className={`${className} outline-none h-[47px] bg-white bg-opacity-[0.03] w-full border-[1px] border-white rounded md:px-8 px-6 placeholder:text-white shadow-md`}
        {...rest}
      />
      {error && <p className="text-xs mt-1 text-accent">{error}</p>}
    </div>
  );
});

export default Input;
