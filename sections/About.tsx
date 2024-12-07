


const About = () => {

  return (
    <section id='about' className="lg:w-[100%] md:w-[100%] max-w-[1100px] flex flex-col items-center">
      {/* Title */}
      <h1 className="font-bold pt-20 z-20 mb-8
      text-[48px]
      lg:text-[64px]
      md:text-[64px]
      ">About</h1>
      
      {/* Main content area with responsive column/row layout */}
      <div className="flex flex-col sm:flex-row w-full items-center space-y-4 sm:space-y-0 sm:space-x-4">
        
        {/* First main div - About Text */}
        <div className="flex flex-col items-start sm:w-1/2 p-4">
          <p className="text-center sm:text-left max-w-lg lg:leading-8">
            Hi, my name is Akash and I'm a video editor, graphic designer, and UI/UX designer from Delhi with a passion for creating impactful digital experiences. With 2 years of experience in video editing and graphic design, I’ve worked on a variety of projects, from YouTube videos and advertisements to branding materials. I’m also a certified UI/UX designer, having completed multiple case studies that reflect my deep understanding of user-centric design. As a software engineer from Delhi Technological University, I have hands-on experience in front-end coding, allowing me to seamlessly integrate design with development. Let’s collaborate to bring your creative vision to life!
          </p>

          <a href="mailto:ac.akashchauhan827@gmail.com">
  <button className="bg-[#00A8FF] rounded-xl hover:shadow-[0_0_16px_#00A8FF] px-8 py-4 mt-10 lg:block md:block hidden">
    Contact Me
  </button>
</a>

        </div>

        {/* Second main div - Skills and Education */}
        <div className="sm:w-1/2 flex flex-col space-y-4 border border-white/50 rounded-2xl bg-white/5 backdrop-blur text-white p-6 lg:p-10 z-10 shadow-sm">
          
          {/* Education Section */}
          
      <div className=" bg-[#00A8FF] rounded-xl shadow-[0_0_16px_#00A8FF] ">
        <h1 className="p-4 text-lg font-semibold">Education</h1>
      </div>

      <div className="p-[1px] relative" >
<div className="absolute inset-0 w-full bg-gradient-to-r from-white/50 rounded-2xl"/>
<div className="p-4 w-full  bg-black/90 rounded-2xl  relative group transition duration-200">
<p className="font-semibold">Delhi Technological University</p>
<p className="font-light">Software Engineer</p>
</div>
</div>

          {/* Skills Section */}
          <div className="bg-[#00A8FF] rounded-xl shadow-[0_0_16px_#00A8FF]">
            <h1 className="p-4 text-lg font-semibold">Skills</h1>
          </div>

          {/* Skills List */}
          <div className="flex flex-wrap gap-2">
            {["UI/UX Designer", "Graphic Designer", "Video Editor", "Front End Developer", "Visual Designer"].map((skill) => (
              <div key={skill} className="w-full sm:w-auto p-[1px] bg-gradient-to-r from-white/50 rounded-xl">
                <div className="p-3 bg-black/90 rounded-xl text-center">
                  <p className="font-semibold">{skill}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="absolute right-[-200px] mt-80  w-[1200px] h-[100px] bg-[#00A8FF] rounded-full blur-[200px] z-0 glow-animation"></div>
      
    </section>
  )
}




export default About
