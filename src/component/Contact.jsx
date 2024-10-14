import React from "react";
import img from "../assets/home.jpg";
import logo from "../assets/logo.jpeg";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div
      className="relative bg-cover bg-center h-[70vh] md:h-[60vh] lg:h-[60vh] xl:h-[100vh] m-5"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-green-800 opacity-75"></div>
      <div className="flex relative justify-center h-full">
        <div>
          <div className=" flex justify-center mt-5">
            <img
              src={logo}
              alt="logo"
              className=" mix-blend-color-burn text-white"
              height={150}
              width={150}
            />
          </div>
          <div className="mt-3">
            <div className=" flex justify-center">
              <PlaceIcon style={{ fontSize: "40px", color: "white" }} />
            </div>
            <div className=" mt-4 text-center">
              <h1 className=" text-3xl text-white font-semibold">JAMSHEDPUR</h1>
            </div>
            <div className=" mt-4">
              <p className=" text-base text-center text-white">
                Dobo Main Road , Dobo, Jamshedpu <br /> Jharkhand-811012
              </p>
            </div>
          </div>

          <div className=" mt-8">
            <div className=" flex justify-center">
              <CallIcon style={{ fontSize: "40px", color: "white" }} />
            </div>
            <div className=" mt-4">
              <p className=" text-lg font-medium text-center text-white">
                9155499091 <br />
                8298668298
              </p>
            </div>
          </div>
          <div>
            <div className=" flex gap-3 mt-14">
              <EmailIcon style={{ fontSize: "29px", color: "white" }} />
              <div>
                <p className=" text-lg text-white">
                  srijanheightsdobo@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
