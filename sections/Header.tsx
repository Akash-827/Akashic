"use client";

import { useState } from 'react';
import aslogo from '@/assets/logos/as-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import instagram from '@/assets/icons/Instagram.svg';
import behance from '@/assets/icons/Behance.svg';
import linkedin from '@/assets/icons/LinkedIn.svg';
import dribble from '@/assets/icons/Dibble.svg';
import aslogo2 from '@/assets/logos/Straightlogo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:ac.akashchauhan827@gmail.com';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Explicitly define 'sectionId' type as string
  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      // Scroll to the top of the page for Home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to the section with the provided ID
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false); // Close menu on small screens after selecting a section
  };

  return (
    <div className="flex flex-row justify-between items-center m-10 w-full max-w-[1200px] flex-wrap">
      {/* Logo - Visible on medium and larger screens */}
      <Link href="/" passHref>
        <Image 
          src={aslogo} 
          alt="Logo" 
          width={130} 
          height={130} 
          className="cursor-pointer hidden md:block mt-[10px]"
        />
      </Link>

      {/* Fixed and centered navbar for all screen sizes */}
      <nav className={`fixed top-[72px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-10 md:translate-y-0 flex md:flex-row 
      transition-all duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full lg:opacity-100 md:opacity-100 opacity-0'}  
      lg:w-auto md:w-auto w-[90%] items-center gap-4 pr-4 pl-4 p-2 border border-white/25 rounded-xl bg-white/5 backdrop-blur shadow-md shadow-black/25 z-50 
      flex-col md:flex-row`}>
        <div className="nav-item" onClick={() => handleScrollToSection('home')}>
          <span className="nav-text text-white cursor-pointer">Home</span>
        </div>
        <div className="nav-item" onClick={() => handleScrollToSection('work')}>
          <span className="nav-text text-white cursor-pointer">Work</span>
        </div>
        <div className="nav-item" onClick={() => handleScrollToSection('services')}>
          <span className="nav-text text-white cursor-pointer">Services</span>
        </div>
        <div className="nav-item" onClick={() => handleScrollToSection('about')}>
          <span className="nav-text text-white cursor-pointer">About</span>
        </div>

        {/* Contact button only inside menu on small screens */}
        <button className="p-[1px] relative md:hidden" onClick={handleEmailClick}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 rounded-xl"/>
          <div className="p-[12px] pr-8 pl-8 bg-black rounded-xl relative group transition duration-100 hover:bg-[#00A8FF]/80 hover:shadow-[0_0_15px_#00A8FF]">
            Contact
          </div>
        </button>
      </nav>

      {/* Contact button visible on medium and larger screens */}
      <button className="p-[1px] relative hidden md:block" onClick={handleEmailClick}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 rounded-xl"/>
        <div className="p-[12px] pr-8 pl-8 bg-black rounded-xl relative group transition duration-100 hover:bg-[#00A8FF]/80 hover:shadow-[0_0_15px_#00A8FF]">
          Contact
        </div>
      </button>

      {/* Social media links - In the corner on small screens */}
      <div className="fixed md:translate-y-[620px] md:left-auto md:bottom-auto flex lg:flex-col md:flex-col sm:flex-row lg:w-[48px] lg:h-[200px] md:w-[48px] md:h-[200px] w-1/2 h-[48px] border border-white/25 rounded-xl z-50 bg-white/5 backdrop-blur shadow-black/50 shadow-lg justify-between items-center lg:pt-5 lg:pb-5 md:pt-5 md:pb-5 hover:shadow-[0px_0px_16px] hover:shadow-[#00A8FF]/40 
        right-0 left-24 p-4 lg:p-2 md:p-2 bottom-4 md:right-auto">
        <a href="https://www.instagram.com/akashicshades" target="_blank" rel="noopener noreferrer" className='instagram-icon'>
          <Image src={instagram} alt="Instagram" width={20} height={20} />
        </a>
        <a href="https://www.behance.net/akashchauhan73" target="_blank" rel="noopener noreferrer" className='behance-icon'>
          <Image src={behance} alt="Behance" width={20} height={20} />
        </a>
        <a href="https://www.linkedin.com/in/akashchauhan827" target="_blank" rel="noopener noreferrer" className='linkedin-icon'>
          <Image src={linkedin} alt="LinkedIn" width={20} height={20} />
        </a>
        <a href="https://dribbble.com/Akash827" target="_blank" rel="noopener noreferrer" className='dribbble-icon'>
          <Image src={dribble} alt="Dribbble" width={20} height={20} />
        </a>
      </div>

      {/* Hamburger Icon - Visible only on small screens */}
      <div className="md:hidden mt-4 flex flex-row justify-between p-[8px_16px] fixed w-[90%] border border-white/25 
      rounded-lg bg-white/10 z-50 backdrop-blur shadow-black/50 shadow-sm">
        <Image src={aslogo2} alt='' />
        <button onClick={toggleMenu}>
          <span className="text-white">☰</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
