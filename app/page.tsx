import Hero from "@/sections/Hero";
import Header from "@/sections/Header";
import Work from "@/sections/Work";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Image from "next/image";


// Generate an array of 1000 stars with random properties
const stars = Array.from({ length: 2000 }, () => ({
  size: Math.random() * 2 + 1, // Star size between 0.5px and 2.5px
  top: Math.random() * 100, // Random top position between 0% and 100%
  left: Math.random() * 100, // Random left position between 0% and 100%
  delay: Math.random() * 4, // Random animation delay between 0s and 4s
}));





export default function Home() {
  return (
   <main className="relative flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">

 {/* Starry background */}
 <div className="fixed inset-0 blur-[0.8px] w-full h-full starry-background z-[-20] pointer-events-none hidden sm:block">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>

    <Header />
    <Hero />
    <Work />
    <Services />
    <About />
    <Footer />
   </main>
  );
}
