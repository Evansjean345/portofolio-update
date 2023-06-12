import React from "react";

export default function Loader() {
  return (
    <div className="h-[100vh] bg-black w-full flex flex-col justify-center items-center">
        <img src="/me.jpg" alt="" className="h-40 w-40 animate-bounce rounded-full object-bottom"  />
        <h1 className="text-white animate-bounce mt-12 font-bold text-3xl">
          Loading ....
        </h1>
    </div>
  );
}
