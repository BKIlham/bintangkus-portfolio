"use client";

import Navbar from "./NavBar";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Background Tunnel */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-80"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      <Navbar />

      {/* MAIN HERO CONTENT - Perbaikan Flex untuk Mobile */}
      <div className="relative z-20 w-full flex-1 flex flex-col lg:grid lg:grid-cols-12 px-6 lg:px-12 pb-8 lg:pb-16 pt-4 lg:pt-0 lg:mt-20 md:mt-10">
        
        {/* LEFT/TOP SIDE: Name & CTA */}
        <div className="col-span-8 flex flex-col items-start select-none w-full">
          {/* Teks Nama */}
          <h1 
            className="font-futura font-bold text-text-primary text-glitch uppercase text-[42px] leading-[90%] sm:text-[48px] md:text-[72px] lg:text-[96px] mb-2 lg:mb-4"
            style={{ letterSpacing: "-0.06em" }}
          >
            Bintang <br />
            Kusuma <br />
            Ilham
          </h1>
          
          <h2 className="font-jetbrains font-medium text-sm sm:text-base md:text-2xl lg:text-[32px] text-text-primary tracking-tight mb-6 lg:mb-8">
            FRONTEND & MOBILE DEV
          </h2>

          {/* FIX CTA: Pake w-fit biar gak melar, ukuran font disesuaikan */}
          <a 
            href="/cv.pdf" 
            download 
            className="group relative inline-flex items-center justify-center w-fit px-4 py-3 lg:px-6 lg:py-4 bg-brand-orange text-white font-futura font-bold text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wide shadow-cta transition-transform active:translate-x-[-2px] active:translate-y-[-2px]"
          >
            INITIATE EXPLORATION PROTOCOL // VIEW RESUME
            <span className="absolute bottom-0 left-0 w-2 h-2 lg:w-3 lg:h-3 bg-charcoal" />
          </a>
        </div>

        {/* RIGHT/BOTTOM SIDE: Tech Tags & Dot Pattern */}
        {/* FIX KOMPOSISI: mt-auto dorong elemen ke bawah. Di HP sejajar (kiri-kanan), di PC atas-bawah */}
        <div className="col-span-4 flex flex-row lg:flex-col justify-between items-end w-full mt-auto pt-10 lg:pt-0 lg:h-full">
          
          {/* Pattern Titik - Di HP posisinya di kiri bawah */}
          <div className="w-[100px] h-[60px] lg:w-[240px] lg:h-[120px] text-text-primary/30 opacity-80 lg:mt-auto lg:order-2 lg:self-center">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-dots" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="2" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-dots)" />
            </svg>
          </div>

          {/* Tech Stack List - Di HP posisinya di kanan bawah (hidden dihapus) */}
          <div className="font-jetbrains font-medium text-[10px] sm:text-xs md:text-base lg:text-[20px] text-text-primary space-y-1 lg:space-y-2 select-none text-right lg:order-1 lg:w-full">
            <div>[ REACT ]</div>
            <div>[ TYPESCRIPT ]</div>
            <div>[ NEXT.JS ]</div>
            <div>[ EXPO ]</div>
          </div>

        </div>

      </div>
    </section>
  );
}