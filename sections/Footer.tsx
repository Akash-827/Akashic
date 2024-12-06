const Footer = () => {
  return (
    <section className="lg:w-[1100px] md:w-[100%] flex flex-col items-center mt-20 relative">
      
      {/* Gradient Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mt-4"></div>

      {/* Connect and Social Section Layout */}
      <div className="flex flex-col justify-between lg:flex-row md:flex-row gap-10 lg:gap-20 mt-10 text-white z-10 space-y-4 lg:space-y-0 w-full bg-black/60 p-6 rounded-lg">
        
        {/* Connect Section */}
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-2xl font-bold">Let's Connect</h1>

          <div className="flex flex-row gap-8">
            <div className="space-y-8">
              <h1 className="font-semibold">E-mail</h1>
              <h1 className="font-semibold lg:block md:block hidden">Phone Number</h1>
              <h1 className="font-semibold lg:hidden md:hidden">Phone No.</h1>
              <h1 className="font-semibold">Location</h1>
            </div>
            <div className="space-y-8">
              <p className="font-light">akashworkmail4@gmail.com</p>
              <p className="font-light">+91 8800701698</p>
              <p className="font-light">Delhi, India</p>
            </div>
              
          </div>
        </div>

        {/* Social Media Buttons Section */}
        <div className="flex flex-col gap-2 w-full lg:w-1/2 pt-4">
          {/* Instagram Button */}
          <button className="p-[1px] relative z-50 w-full">
            <div className="absolute w-full inset-0 bg-gradient-to-r from-white/50 to-white/0 rounded-xl" />
            <div className="w-full p-[8px] pr-12 pl-12 bg-black rounded-xl relative group transition duration-200 hover:bg-[#00A8FF]/80 hover:shadow-[0_0_15px_#00A8FF]">
              <a 
                href="https://www.instagram.com/akashicshades" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-left w-full block"
              >
                Instagram
              </a>
            </div>
          </button>

          {/* YouTube Button */}
          <button className="p-[1px] relative z-50 w-full">
            <div className="absolute w-full inset-0 bg-gradient-to-r from-white/50 to-white/0 rounded-xl" />
            <div className="w-full p-[8px] pr-12 pl-12 bg-black rounded-xl relative group transition duration-200 hover:bg-[#00A8FF]/80 hover:shadow-[0_0_15px_#00A8FF]">
              <a 
                href="https://www.youtube.com/@theaakashic" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-left w-full block"
              >
                Youtube
              </a>
            </div>
          </button>

          {/* LinkedIn Button */}
          <button className="p-[1px] relative z-50 w-full">
            <div className="absolute w-full inset-0 bg-gradient-to-r from-white/50 to-white/0 rounded-xl" />
            <div className="w-full p-[8px] pr-12 pl-12 bg-black rounded-xl relative group transition duration-200 hover:bg-[#00A8FF]/80 hover:shadow-[0_0_15px_#00A8FF]">
              <a 
                href="https://www.linkedin.com/in/akashchauhan827" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-left w-full block"
              >
                LinkedIn
              </a>
            </div>
          </button>

          {/* Behance Button */}
          <button className="p-[1px] relative z-50 w-full">
            <div className="absolute w-full inset-0 bg-gradient-to-r from-white/50 to-white/0 rounded-xl" />
            <div className="w-full p-[8px] pr-12 pl-12 bg-black rounded-xl relative group transition duration-200 hover:bg-[#00A8FF]/80 hover:shadow-[0_0_15px_#00A8FF]">
              <a 
                href="https://www.behance.net/akashchauhan73" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-left w-full block"
              >
                Behance
              </a>
            </div>
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <h1 className="font-extralight mt-8 text-center p-4
      lg:text-[48px] md:text-[32px] text-[24px]
      ">Transforming Ideas into Engaging Visuals</h1>
    </section>
  );
};

export default Footer;
