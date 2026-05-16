"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-blueprint py-12 lg:py-24 px-6 lg:px-12 overflow-hidden flex items-center">
      
      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* === KIRI: Kotak Oranye (Urutan 2 di Mobile, Urutan 1 di PC) === */}
        <div className="order-2 lg:order-1 relative w-full lg:w-[55%] bg-brand-orange-light p-6 sm:p-8 md:p-12 z-10 shadow-lg">
          
          {/* TEKS RAKSASA ROTATE 90 DERAJAT (Hanya muncul di PC) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[50%] rotate-90 origin-center hidden lg:block z-30 pointer-events-none">
            <span className="font-futura font-bold text-[90px] xl:text-[110px] text-text-primary tracking-tight drop-shadow-sm">
              Introduction
            </span>
          </div>

          {/* Garis Tri-Color Vertikal Kiri */}
          <div className="absolute left-4 top-12 bottom-12 w-[4px] flex flex-col">
            <div className="h-1/3 bg-[#97B99C]" />
            <div className="h-1/3 bg-[#ECA542]" />
            <div className="h-1/3 bg-[#8D3027]" />
          </div>

          <div className="pl-6 lg:pl-8 relative z-20">
            
            {/* Garis Tri-Color Horizontal */}
            <div className="flex w-24 sm:w-32 h-[4px] mb-6">
              <div className="w-1/3 bg-[#97B99C]" />
              <div className="w-1/3 bg-[#ECA542]" />
              <div className="w-1/3 bg-[#8D3027]" />
            </div>

            {/* Header Area - FIX: Pake flex-wrap dan penyesuaian font agar tidak keluar kotak */}
            <div className="flex flex-wrap items-end gap-x-6 gap-y-4 mb-8">
              <div>
                <h2 className="font-futura font-bold text-4xl sm:text-5xl md:text-[56px] xl:text-[64px] text-charcoal leading-none flex items-center">
                  Intr
                  <span className="relative flex items-center justify-center mx-[2px]">
                    <span className="relative z-10">o</span>
                    <svg className="absolute w-[250%] h-[250%] text-brand-orbit animate-[spin_15s_linear_infinite] pointer-events-none" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
                      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                  duction
                </h2>
                
                <div className="mt-4 inline-block px-4 py-1.5 bg-charcoal text-white font-futura font-bold text-xs md:text-sm tracking-widest uppercase rounded-full">
                  Catalogue
                </div>
              </div>

              {/* Garis vertikal & sub-text */}
              <div className="hidden md:flex items-center gap-4 border-l-[3px] border-charcoal pl-4 pb-1">
                <p className="font-futura font-medium text-charcoal text-lg xl:text-xl leading-snug">
                  Introduction <br /> Catalogue
                </p>
              </div>
            </div>

            {/* Deskripsi */}
            <p className="font-futura-book text-charcoal text-base sm:text-lg md:text-xl text-justify mb-8 md:mb-10 leading-relaxed pr-0 lg:pr-8">
              A Frontend & Mobile Dev with a keen eye for visually appealing design. Bintang is currently mastering Backend to become a Fullstack Engineer, dedicated to blending clean code with immersive digital experiences.
            </p>

            {/* Kotak Tech Stacks */}
            <div className="relative bg-tech-bg p-6 md:p-8 mr-0 lg:mr-8 shadow-md">
              <div className="absolute left-0 top-0 bottom-0 w-[4px] flex flex-col">
                <div className="h-1/3 bg-[#97B99C]" />
                <div className="h-1/3 bg-[#ECA542]" />
                <div className="h-1/3 bg-[#8D3027]" />
              </div>
              
              <h3 className="font-futura font-bold text-text-light text-xl sm:text-2xl md:text-3xl mb-6 ml-4">
                Tech Stacks
              </h3>
              
              <div className="ml-4 flex flex-wrap gap-2 sm:gap-3 text-text-light/70">
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 border border-text-light/30 text-[10px] sm:text-xs md:text-sm font-jetbrains">[ React ]</div>
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 border border-text-light/30 text-[10px] sm:text-xs md:text-sm font-jetbrains">[ Next.js ]</div>
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 border border-text-light/30 text-[10px] sm:text-xs md:text-sm font-jetbrains">[ TypeScript ]</div>
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 border border-text-light/30 text-[10px] sm:text-xs md:text-sm font-jetbrains">[ Tailwind ]</div>
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 border border-text-light/30 text-[10px] sm:text-xs md:text-sm font-jetbrains">[ Expo ]</div>
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 border border-text-light/30 text-[10px] sm:text-xs md:text-sm font-jetbrains">[ Node.js ]</div>
              </div>
            </div>
          </div>
        </div>

        {/* === KANAN: Foto & Dekorasi Planet (Urutan 1 di Mobile, Urutan 2 di PC) === */}
        {/* FIX: w-full untuk mobile agar fotonya lebar penuh (100%) */}
        <div className="order-1 lg:order-2 relative w-full max-w-[500px] lg:max-w-none lg:w-[40%] aspect-square lg:aspect-[3/4] flex justify-center items-end bg-transparent z-0">
          
          <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
            <Image 
              src="/planet-decor.svg" 
              alt="Planet Orbit" 
              fill 
              className="object-contain scale-[1.3] lg:scale-[1.5]"
            />
          </div>

          <div className="relative w-full h-full z-10 drop-shadow-2xl grayscale">
            <Image 
              src="/bintang-photo.png" 
              alt="Bintang Kusuma Ilham" 
              fill 
              className="object-contain object-bottom"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}