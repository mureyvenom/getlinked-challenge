import { forwardRef, TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClass?: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { containerClass, error, ...rest } = props;

  return (
    <div className="md:mb-10 mb-6">
      <textarea
        ref={ref}
        className="outline-none md:min-h-[120px] h-[160px] md:py-2 bg-white bg-opacity-[0.03] w-full border-[1px] border-white rounded md:px-8 px-6 py-6 placeholder:text-white shadow-md"
        {...rest}
      ></textarea>
      {error && <p className="text-xs mt-1 text-accent">{error}</p>}
    </div>
  );
});

export default TextArea;
