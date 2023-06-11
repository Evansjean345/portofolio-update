import React from "react";
import PhoneOne from "./Phone";
import PhoneTwo from "./PhoneTwo";
import Wave from "../movies/wavee.svg";
import PhoneThree from "./PhoneThree";
import PhoneThour from "./PhoneThour";
import PhoneFive from "./PhoneFive";
import PhoneSeven from "./PhoneSeven";

export default function HomeHero() {
  return (
    <div className="bg-black">
      <div
        className="container mx-auto px-4  "
        style={{
          backgroundImage: `url(${Wave})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <br />
        <br />
        <h1 className="text-5xl text-center f-m-w text-slate-200 underline underline-offset-8 font-bold pt-0">
          Projets
        </h1>
        <br />
        <br />
        <br />
        <h1 className="sm:text-5xl text-3xl text-center f-m-w text-slate-200  font-bold pt-0">
          Slider vous allez aimez 🧑‍💻👉👉
          <br />( NB : Cliquez sur le téléphone pour acceder au Projets )
        </h1>
        <br />
        <br />
        <br />
        <div className="carousel rounded-box sm:py-28 py-12 px-12 sm:px-32">
          <div className="carousel-item sm:px-12 px-6">
            <PhoneOne />
          </div>
          <div className="carousel-item sm:px-14 px-6">
            <PhoneTwo />
          </div>
          <div className="carousel-item sm:px-14 px-6">
            <PhoneThree />
          </div>
          <div className="carousel-item sm:px-14 px-6">
            <PhoneThour />
          </div>
          <div className="carousel-item sm:px-14 px-6">
            <PhoneFive />
          </div>
          <div className="carousel-item sm:px-14 px-6">
            <PhoneSeven />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}
