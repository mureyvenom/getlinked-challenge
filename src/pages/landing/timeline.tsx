import React from "react";
import { timelinedata } from "../../utils/helpers";
import TimelineComponent from "../../components/Timeline";

const Timeline = () => {
  return (
    <div className="md:px-0 px-12">
      <div className="flex justify-center items-center md:mb-24 md:mt-16 mt-20 mb-14">
        <div>
          <h3 className="font-clash font-bold md:text-[32px] mb-3 text-center text-xl">
            Timeline
          </h3>
          <div className="md:max-w-[350px] text-center md:text-sm text-sm">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </div>
        </div>
      </div>
      <div>
        <TimelineComponent data={timelinedata} />
      </div>
    </div>
  );
};

export default Timeline;
