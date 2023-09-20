import { forwardRef, SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  containerClass?: string;
  labelClass?: string;
  error?: string;
  label?: string;
  data: { title: string; value: string }[];
  title?: string;
}

const Select = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const {
    containerClass,
    error,
    label,
    labelClass,
    className,
    style,
    title,
    data,
    ...rest
  } = props;

  return (
    <div className={`md:mb-10 mb-6 ${containerClass}`}>
      {label && <p className={`text-sm mb-3 ${labelClass}`}>{label}</p>}
      <div
        className={`${className} outline-none h-[47px] bg-white bg-opacity-[0.03] w-full border-[1px] border-white rounded md:pl-8 md:mr-8 px-6 placeholder:text-white shadow-md`}
        style={{
          ...style,
        }}
      >
        <select
          ref={ref}
          className={`h-full w-full outline-none bg-transparent`}
          {...rest}
        >
          <option value="">{title || "Select an option"}</option>
          {data.map((d) => (
            <option value={d.value} key={d.value}>
              {d.title}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-xs mt-1 text-accent">{error}</p>}
    </div>
  );
});

export default Select;
