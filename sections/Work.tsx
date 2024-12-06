const Work = () => {
  return (
    <section id='work' className="relative flex flex-col justify-center items-center 
    w-screen overflow-hidden lg:mt-40 lg:top-0 md:top-[0px] top-0 z-40">
      
      <h1 className="text-[48px] font-bold z-20
      lg:text-[64px] lg:mt-10 lg:top-0
      md:text-[64px] md:top-0
      ">Work</h1>
      
      <div className="relative lg:w-[100%] md:w-[95%] w-[95%] max-w-[1200px] mt-4 shadow-sm shadow-black/50">
  {/* Aspect ratio container */}
  <div className="aspect-w-16 aspect-h-9 border border-white rounded-xl overflow-hidden relative z-20">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube.com/embed/kjxLhDrQUVA?autoplay=1&mute=1&loop=1&playlist=kjxLhDrQUVA" // New video embed link
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    {/* Optional fallback for users without JS */}
    {/* <div className="absolute inset-0 flex items-center justify-center text-white bg-black/01">
      <p></p>
    </div> */}
    
  </div>
</div>

      {/* <div className="absolute mt-80 w-[75%] h-[600px] bg-[#00A8FF]/50 rounded-full blur-[100px] z-10 glow-animation"></div> */}
    </section>
  );
};

export default Work;
