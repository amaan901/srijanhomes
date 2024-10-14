import React from "react";
import video from "../assets/video.mp4";

export default function Video() {
  return (
    <div className="flex justify-center mx-5 mt-2 mb-5">
      <video
        src={video}
        className="w-full lg:h-[40vh] lg:object-cover xl:h-[95vh] xl:w-[100%]"
        controls
        preload="auto"
        // style={{ maxWidth: "100%", height: "90vh" }}
      ></video>
    </div>
  );
}
