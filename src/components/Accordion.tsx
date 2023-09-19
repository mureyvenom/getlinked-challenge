import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Props {
  data: { title: string; summary: string }[];
}

const Accordion = ({ data }: Props) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {data.map((d, i) => (
        <div
          className="border-b-[1px] border-b-accent pb-[13px] mb-6"
          key={`accordion-${d.title}`}
        >
          <div className="flex items-center justify-between gap-x-6">
            <div className="md:text-sm text-xs">{d.title}</div>
            <button
              className="relative"
              onClick={() => {
                if (visibleIndex === i) {
                  setVisible(!visible);
                } else {
                  setVisible(true);
                  setVisibleIndex(i);
                }
              }}
            >
              <AiOutlineMinus className="opacity-0" size={12} />
              <AiOutlineMinus
                className={`text-accent absolute top-0 left-0 transition-all duration-300 ${
                  visible && visibleIndex === i ? "opacity-100" : "opacity-0"
                }`}
                size={12}
              />
              <AiOutlinePlus
                className={`text-accent absolute top-0 left-0 transition-all duration-300 ${
                  visible && visibleIndex === i ? "opacity-0" : "opacity-100"
                }`}
                size={12}
              />
            </button>
          </div>
          <div
            className={`transision-all md:max-w-[427px] text-xs opacity-80 duration-300 transform overflow-hidden ${
              visible && visibleIndex === i
                ? "opacity-100 h-auto py-3"
                : "opacity-0 h-0 py-0"
            }`}
          >
            {d.summary}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
