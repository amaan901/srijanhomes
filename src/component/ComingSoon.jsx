import React from "react";
import comingSoon from "../assets/1600w-mLVksf9U9Lc.webp";
import Timer from "./Timer";

const CoomingSoon = () => (
  <div className="mb-5 mx-5 shadow-lg border rounded-md">
    <img
      src={comingSoon}
      alt="No Data"
      className=" lg:h-[40vh] lg:w-[100%] lg:object-cover xl:h-[85vh] xl:w-[100%]"
    />
    <div className=" flex justify-center">
      <Timer initialDays={5} />
    </div>
  </div>
);

export default CoomingSoon;
