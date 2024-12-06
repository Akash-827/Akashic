"use client";

import Image from "next/image";
import circle from "@/assets/images/circle.png";
import illustrations from "@/assets/images/ill.svg";
import illustrations3 from "@/assets/images/ill3.svg";
import hero from "@/assets/images/Hero-image4k.png";

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col items-center h-screen w-screen">
      {/* Hero Image */}
      <Image
        src={hero}
        alt="Hero Image"
        className="absolute shadow-2xl shadow-black pointer-events-none 
          top-1/2 right-[-100px] max-w-[1800px] w-[1000px]
          lg:top-[250px] lg:right-0 lg:w-full
          md:top-[300px] md:w-[1400px] md:max-w-[1800px] md:right-[-150px] z-40"
      />

      {/* Headline */}
      <div className="relative flex flex-col h-screen max-w-[1200px] lg:w-full md:w-[95%] m-10">
        <div className="flex flex-col items-start w-full lg:w-1/2 md:w-1/2">
          <div className="flex flex-col items-center w-full mt-0 text-white lg:w-full lg:mt-10 md:mt-28">
            <h1 className="text-[72px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#0085FF] lg:text-[120px] md:text-[96px] z-40">
              Crafting
            </h1>
            <span className="font-bold text-[36px] lg:text-[72px] md:text-[56px] lg:mt-[-42px] md:mt-[-28px] mt-[-16px] z-40">
              Visual Stories
            </span>
            <p className="w-[80%] mt-2 text-center z-40">
              Your Premier Destination for Video Editing and Design
            </p>

            <button className="relative p-[1px] mt-[42px] z-40"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/50 rounded-xl" />
              <div className="relative p-[16px] pr-12 pl-12 bg-black rounded-xl group transition duration-100 hover:bg-[#00A8FF]/80 hover:shadow-[0_0_15px_#00A8FF] hidden md:block lg:block">
                Discover
              </div>
            </button>
          </div>
        </div>

        <div className="w-1/2 h-full z-20 flex items-center justify-center">
          <div>
            <Image
              id="circle"
              src={circle}
              alt=""
              width={800}
              height={800}
              className="absolute w-[800px] opacity-10 animate-spin-slow pointer-events-none z-[-10]
                top-1/4 transform flex justify-center right-0 left-2
                lg:left-1/2 lg:top-[-140px] lg:w-[800px]
                md:left-[460px] md:top-[-40px] md:w-[700px]"
            />

            <Image
            id="ill3"
              src={illustrations3}
              alt="Illustration"
              width={300}
              height={300}
              className="absolute w-[200px] opacity-80 z-10 top-1/3 transform 
                md:top-[140px] md:right-[120px] md:w-[300px] lg:hidden flex justify-center"
            />

            
          </div>

          <Image
              src={illustrations}
              alt="Illustration"
              width={400}
              height={400}
              className="absolute opacity-80 z-10 
                lg:top-[75px] lg:right-[-10px]
                md:top-[100px] md:right-[20px] hidden md:hidden lg:block"
            />
        </div>

        {/* Glow Elements */}
        <div className="absolute lg:w-[800px] lg:h-[800px] bg-[#00A8FF] rounded-full opacity-100 
        lg:blur-[500px] md:blur-[500px] blur-[250px] right-0 bottom-0 transform translate-x-[80%] translate-y-[20%] z-0
        md:w-[800px] md:h-[800px] w-[400px] h-[400px]
        "></div>
        
        <div className="absolute w-[250px] h-[250px] bg-[#00A8FF] rounded-full opacity-80 
        lg:blur-[200px] md:blur-[200px] blur-[200px] right-[-200px] top-[400px] z-[-10] glow-animation"></div>
      </div>

      {/* Overlay */}
      <div id="overlay" className="absolute w-full h-[100vh] top-[88%] bg-gradient-to-b from-black z-0 lg:top-[800px] md:top-[800px]"></div>
    </section>
  );
};

export default Hero;
