"use client"; // Ensure this component runs on the client side

import Video from "@/components/Video"
import Graphic from "@/components/Graphic";
import Ux from "@/components/Ux";

const Services = () => {

  return (
    <section id="services" className="lg:w-[1200px] md:w-[100%] flex flex-col items-center mt-20">
      <h1 className="font-bold  z-20
      text-[48px]
      lg:text-[64px] lg:mt-20
      md:text-[64px] md:mt-20
      ">Services</h1>

      <Video />
      <Graphic />
      <Ux />
    </section>
  );
};

export default Services;

