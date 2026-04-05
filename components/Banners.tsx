import React from "react";
import bannerImg from "@/public/assets/banners/banner.jpg";
import Image from "next/image";

export const Banners = () => {
  return (
    <section className="relative h-72 md:min-h-screen flex items-end">
      <Image
        src={bannerImg}
        alt="Banner"
        className="absolute -z-10 w-full h-96 md:h-screen"
      />
      <div className="text-black w-full md:w-[60%] pb-5 md:pb-20 flex flex-col justify-end px-4 md:px-10">
        <h1 className="text-xl md:text-5xl font-bold mb-2">
          Place for creative mind, Imagination become Reality
        </h1>
        <p className="text-sm md:text-xl font-bold">
          Present your Ideas and thought in the form of articles, blogs and
          Stories.
        </p>
      </div>
      {/* <div className="absolute bottom-[18%] md:bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#dddff8]" /> */}
    </section>
  );
};
