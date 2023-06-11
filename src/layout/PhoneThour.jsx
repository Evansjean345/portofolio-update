import React from "react";
import Vid from "../movies/fimat-groupe-api.mp4";

export default function PhoneThour() {
  return (
    <>
      <a href="https://fimat-group-api.onrender.com/">
        <div className="cursor-pointer transition-all sm:hover:translate-y-[-35px] sm:hover:translate-x-[25px] bg-none">
          <div
            data-aos="flip-left"
            data-aos-duration="2000"
            className="mockup-phone border-[#05055e] w-[290px]  drop-shadow-lg"
          >
            <div className="camera"></div>
            <div
              className="display 
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
