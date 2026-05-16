"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Planet, CassetteTape, EnvelopeSimple, ArticleIcon } from "@phosphor-icons/react";

export default function Navbar() {
  const containerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi scroll untuk mengubah background navbar jadi sticky glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi agar scroll dari Navbar smooth (tidak teleport/blink)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(() => {
    gsap.to(".orbit-rotate", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
    
    gsap.to(".orbit-rotate-slow", {
      rotation: -360,
      duration: 30,
      repeat: -1,
      ease: "linear",
    });
  }, { scope: containerRef });

  return (
    <nav 
      ref={containerRef} 
      // FIX: Pakai fixed agar sticky, dan transisi background dinamis
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 lg:px-12 z-[100] select-none transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-[#181818]/90 backdrop-blur-md shadow-lg border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      
      {/* LEFT: Logo Section */}
      <div className="relative flex flex-col">
        <div className="relative flex items-center">
          {/* Teks Logo Responsif */}
          <span className="font-helvetica font-bold text-2xl lg:text-[32px] text-text-light relative z-10 tracking-tight pl-2">
            BINTANGKUS
          </span>
          
          {/* Orbit Dekorasi - Diperbesar, lebih terang, garis ditambah */}
          <div className="absolute left-[-20px] lg:left-[-25px] top-1/2 -translate-y-1/2 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] pointer-events-none z-0 opacity-80 text-brand-orbit">
            <svg className="orbit-rotate w-full h-full" viewBox="0 0 100 100">
              {/* Garis 1 */}
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" />
              {/* Garis 2 */}
              <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
              {/* Garis 3 */}
              <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
              {/* Garis 4 (Paling dalam) */}
              <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
              {/* Planet/Satelit kecil */}
              <circle cx="98" cy="50" r="4" fill="currentColor" />
              <circle cx="12" cy="74" r="2.5" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        {/* Tri-color Line Asset */}
        <div className="flex w-full h-[3px] mt-1 ml-2">
          <div className="w-1/3 bg-[#802520]" />
          <div className="w-1/3 bg-[#BB852F]" />
          <div className="w-1/3 bg-[#5C7F70]" />
        </div>
      </div>

      {/* RIGHT: Section List */}
      <div className="flex gap-6 lg:gap-10 items-center">
        
        {/* Nav Item: ABOUT */}
        <a 
          href="#about" 
          onClick={(e) => handleSmoothScroll(e, "about")}
          className="group flex items-center gap-2 text-text-light font-futura tracking-wider text-sm relative"
        >
          <div className="relative w-6 h-6 lg:w-5 lg:h-5 text-nav-muted group-hover:text-brand-orange transition-colors">
            <Planet size="100%" weight="duotone" className="relative z-10" />
            <svg className="orbit-rotate absolute inset-0 w-full h-full opacity-50 hidden lg:block" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" />
            </svg>
          </div>
          <span className="relative hidden md:block">
            AB<span className="relative z-10">OUT</span>
            <span className="absolute bottom-[-4px] left-0 w-[40%] h-[3px] bg-charcoal border border-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
        </a>

        {/* Nav Item: EXPERIENCE */}
        <a 
          href="#experience" 
          onClick={(e) => handleSmoothScroll(e, "experience")}
          className="group flex items-center gap-2 text-text-light font-futura tracking-wider text-sm relative"
        >
          <div className="relative w-6 h-6 lg:w-5 lg:h-5 text-nav-muted group-hover:text-brand-orange transition-colors">
            <ArticleIcon size="100%" weight="duotone" className="relative z-10" />
            <svg className="orbit-rotate absolute inset-0 w-full h-full opacity-50 hidden lg:block" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" />
            </svg>
          </div>
          <span className="relative hidden md:block">
            EX<span className="relative z-10">PERIENCE</span>
            <span className="absolute bottom-[-4px] left-0 w-[25%] h-[3px] bg-charcoal border border-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
        </a>

        {/* Nav Item: GALLERIA */}
        <a 
          href="#galleria" 
          onClick={(e) => handleSmoothScroll(e, "galleria")}
          className="group flex items-center gap-2 text-text-light font-futura tracking-wider text-sm relative"
        >
          <div className="relative w-6 h-6 lg:w-5 lg:h-5 text-nav-muted group-hover:text-brand-orange transition-colors">
            <CassetteTape size="100%" weight="duotone" className="relative z-10" />
            <svg className="orbit-rotate-slow absolute inset-0 w-full h-full opacity-50 hidden lg:block" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <span className="relative hidden md:block">
            GA<span className="relative z-10">LLERIA</span>
            <span className="absolute bottom-[-4px] left-0 w-[25%] h-[3px] bg-charcoal border border-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
        </a>

        {/* Nav Item: CONTACT */}
        <a 
          href="#contact" 
          onClick={(e) => handleSmoothScroll(e, "contact")}
          className="group flex items-center gap-2 text-text-light font-futura tracking-wider text-sm relative"
        >
          <div className="relative w-6 h-6 lg:w-5 lg:h-5 text-nav-muted group-hover:text-brand-orange transition-colors">
            <EnvelopeSimple size="100%" weight="duotone" className="relative z-10" />
            <svg className="orbit-rotate absolute inset-0 w-full h-full opacity-50 hidden lg:block" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>
          <span className="relative hidden md:block">
            CO<span className="relative z-10">NTACT</span>
            <span className="absolute bottom-[-4px] left-0 w-[30%] h-[3px] bg-charcoal border border-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
        </a>
      </div>
    </nav>
  );
}