import React from "react";
import CardComponentRow from "./CardComponentRow";
const CardComponentSection = () => {
  return (
    <div className="relative z-10 pb-32 flex flex-col md:flex-row md:space-x-3">
      <div className="p-6 h-full w-full  flex justify-center items-center">
        <CardComponentRow
          title="COMPANY OVERVIEW"
          justify={"align-start"}
          content={`
        Prometheus is the premier full-service public relations firm and marketing agency in Western Visayas, specializing
in creating and amplifying powerful stories that build and grow brands. Our team is dedicated to helping clients
optimize their communications, create high-impact customer experiences, and reach wider audiences.
        `}
        />
      </div>

      <div className="p-6 h-full w-full  flex justify-center items-center">
        <CardComponentRow
          title="HISTORY"
          justify={"align-end justify-end"}
          content={`
Prometheus is founded on the comprehensive science of marketing, drawing from multiple disciplines and converging into a singular, focused goal: to effectively promote and elevate your brand. Through our multidisciplinary approach, we leverage diverse marketing strategies and insights to craft compelling narratives that resonate with your audience, driving meaningful connections and sustainable brand growth.
        `}
        />
      </div>
    </div>
  );
};

export default CardComponentSection;
