"use client"; // Ensure this component runs on the client side

import Image from "next/image";
import video from "@/assets/images/Video2.png";
import { useRef } from "react";

const Video = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent, elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      const { clientX, clientY } = event;
      const { left, top, width, height } = elementRef.current.getBoundingClientRect();
      
      // Calculate the center of the element
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calculate the tilt values
      const deltaX = (clientX - centerX) / width;
      const deltaY = (clientY - centerY) / height;
      const tiltX = deltaY * 10; // Adjust tilt intensity
      const tiltY = -deltaX * 10; // Adjust tilt intensity

      // Apply the tilt effect
      elementRef.current.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }
  };

  const handleMouseLeave = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      elementRef.current.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div className="sm:flex-row flex mt-10 w-full justify-center gap-4">
      <div className="flex flex-col sm:flex-row mt-10 w-full justify-center gap-4 lg:gap-20 lg:p-4">
        {/* Left side with the image */}
        <div 
          className="w-full sm:w-1/2 flex justify-center items-center z-10 animate-tilt" 
        >
          <Image
            src={video}
            alt="Video thumbnail"
            className="rounded-lg transition-transform duration-300 opacity-90 mb-10 lg:mb-0 md:mb-0" // Smooth transition for the tilt
          />
        </div>

        {/* Right side with the text content */}
        <div 
          className="w-full sm:w-1/2 h-full border border-white/50 rounded-2xl bg-white/5 backdrop-blur 
            flex flex-col justify-center items-center p-6 space-y-4 text-white lg:p-10 z-10 shadow-sm"
          onMouseMove={(event) => handleMouseMove(event, cardRef)}
          onMouseLeave={() => handleMouseLeave(cardRef)}
          ref={cardRef} // Reference for the card
        >
          <h1 className="font-semibold text-2xl lg:text-[32px] text-center lg:pb-4">Video Editing</h1>

          <ul className="list-disc pl-5 space-y-2 text-sm lg:space-y-4 tracking-wide lg:text-[16px]">
            <li>Offering top-quality video editing services</li>
            <li>Specializing in YouTube videos, advertisements, shorts, reels, and music video editing</li>
            <li>Expertise in educational videos and creating montages</li>
            <li>Tailored projects to match style and audience</li>
            <li>Experience working with multiple clients and producing viral content</li>
            <li>Ability to enhance brands and captivate viewers</li>
          </ul>

          <div className="absolute bg-[#00A8FF] w-[40%] h-[8px] rounded-full top-[-20.5px] shadow-[0_0_16px_#00A8FF]"></div>
        </div>

        <div className="absolute left-[-200px] translate-y-24 w-[1200px] h-[100px] bg-[#00A8FF] rounded-full opacity-100 blur-[200px] z-0"></div>
        <div className="absolute left-[350px] mt-14 w-[250px] h-[250px] bg-[#00A8FF] rounded-full opacity-100 blur-[100px] z-0 glow-animation"></div>
      </div>
    </div>
  );
}

export default Video;
