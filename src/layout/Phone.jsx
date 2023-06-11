import React from "react";
import Vid from "../movies/VidG.mp4"

export default function PhoneOne() {
  return (
    <>
      <a href="https://gleenpy.com/">
        <div className="cursor-pointer  transition-all sm:hover:translate-y-[-35px] sm:hover:translate-x-[25px] bg-none">
          <div
            data-aos="flip-left"
            data-aos-duration="2000"
            className="mockup-phone border-[#b51e1e] w-[290px]  drop-shadow-lg"
          >
            <div className="camera"></div>
            <div
              className="display bg-black
         "
            >
              <video
                autoPlay
                loop
                muted
                src={Vid}
                playsInline
                className="w-full h-full artboard artboard-demo phone-1 bg-black"
              />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
