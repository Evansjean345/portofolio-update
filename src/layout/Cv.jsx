import React from "react";

const products = [
  {
    id: 1,
    name: "Express Js",
    href: "https://expressjs.com/",
    imageSrc: "https://steppingstone.in/images/logos/express.png",
  },
  {
    id: 2,
    name: "React Js",
    href: "https://fr.legacy.reactjs.org/",
    imageSrc:
      "https://cdn.dribbble.com/users/14814/screenshots/16535574/reactlogo.png",
  },
  {
    id: 3,
    name: "Node Js",
    href: "https://nodejs.org/en",
    imageSrc:
      "https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg",
  },
  {
    id: 4,
    name: "Email Js",
    href: "https://www.emailjs.com/",
    imageSrc:
      "https://miro.medium.com/v2/resize:fit:1024/1*ThrwevcjaDOmEVPgPYIgTg.png",
  },
  {
    id: 5,
    name: "Python",
    href: "https://www.python.org/",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968286.png",
  },
  {
    id: 6,
    name: "Mongo DB",
    href: "https://www.mongodb.com/",
    imageSrc:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld",
  },
  {
    id: 7,
    name: "React native",
    href: "https://reactnative.dev/",
    imageSrc:
      "https://www.iakademi.com/wp-content/uploads/2022/12/react-native-nedir-2019-06-19-215527-0.png",
  },
  {
    id: 8,
    name: "Render",
    href: "https://render.com/",
    imageSrc:
      "https://i.pinimg.com/474x/8b/7c/ac/8b7cac4d85303b79158dd3cf2d9b63c8.jpg",
  },
  {
    id: 9,
    name: "Netlify",
    href: "https://www.netlify.com/",
    imageSrc:
      "https://static-00.iconduck.com/assets.00/netlify-icon-256x256-psuiw2x7.png",
  },
  {
    id: 10,
    name: "Cloudinary",
    href: "https://cloudinary.com/",
    imageSrc:
      "https://cloudinary-res.cloudinary.com/image/upload/website/cloudinary_web_favicon.png",
  },
  {
    id: 11,
    name: "Cyclic",
    href: "https://www.cyclic.sh/",
    imageSrc: "https://www.cyclic.sh/images/cyclic-logo.png",
  },
  {
    id: 12,
    name: "Tailwind",
    href: "https://tailwindcss.com/",
    imageSrc:
      "https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default",
  },
  // More products...
];

export default function Cv() {
  return (
    <>
      <div className=" bg-black">
        <h1 className="text-4xl lg:text-5xl text-center f-m-w text-slate-200 underline underline-offset-8 font-bold pt-0">
          Stack Technique
        </h1>
        <div className="bg-black">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="group relative bg-black transition-all sm:hover:scale-110"
                >
                  <div className="aspect-h-1 bg-black rounded-xl aspect-w-1 w-full overflow-hidden   lg:aspect-none group-hover:opacity-75 lg:h-44">
                    <img
                      src={product.imageSrc}
                      alt={""}
                      className="h-32 w-full object-contain rounded-xl  object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="flex items-center justify-center w-full">
                      <h3 className="text-sm font-bold  text-white">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-center my-16 w-full">
        <label
          htmlFor="my-modal-5"
          className="btn modal-button bg-black px-12 h-16 hover:text-black text-white border-2 border-white hover:bg-slate-100 hover:border-black"
        >
          consulter cv
        </label>

        <input type="checkbox" id="my-modal-5" className="modal-toggle " />
        <div className="modal">
          <div className="modal-box w-[94%] lg:w-full h-[62%]  lg:h-[85%]">
            <label
              htmlFor="my-modal-5"
              className="btn bg-black text-white btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <img src="/cv.png" alt="" className="w-full h-full" />
            <div className="modal-action"></div>
          </div>
        </div>
      </div>
    </>
  );
}
