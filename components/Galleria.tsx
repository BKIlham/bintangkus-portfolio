"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CassetteTape, Prohibit } from "@phosphor-icons/react";

// Data list project sesuai desain
const projects = [
  {
    id: "01",
    slug: "onehub",
    type: "Mobile",
    title: "Onehub",
    tech: ["Expo", "React Native", "NativeWind", "TypeScript"],
    image: "/project-1.png",
  },
  {
    id: "02",
    slug: "fitlab",
    type: "Website",
    title: "Fitlab",
    tech: ["Next.js", "React", "Tailwind"],
    image: "/project-2.png",
  },
  {
    id: "03",
    slug: "id-farm",
    type: "Website",
    title: "Id Farm",
    tech: ["Laravel", "PHP", "Figma"],
    image: "/project-3.png",
  },
];

export default function Galleria() {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingImageRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Setup GSAP QuickTo untuk performa mouse follower yang tinggi
  useGSAP(() => {
    if (!floatingImageRef.current) return;
    
    // Setup animasi X dan Y agar ngikutin kursor
    const xTo = gsap.quickTo(floatingImageRef.current, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(floatingImageRef.current, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      // Offset koordinat agar gambar pas di tengah kursor
      xTo(e.clientX - 200); // 200 adalah setengah lebar gambar (400px)
      yTo(e.clientY - 150); // 150 adalah setengah tinggi gambar (300px)
    };

    // Pasang event listener ke window
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <section id="galleria" ref={containerRef} className="relative w-full min-h-screen bg-blueprint py-12 lg:py-24 px-6 lg:px-12 overflow-hidden">
      
      <div className="relative w-full max-w-[1200px] mx-auto">
        
        {/* BANNER SECTION */}
        <div className="w-full mb-16">
          <div className="relative w-full aspect-[21/9] max-h-[400px] overflow-hidden drop-shadow-md">
            {/* Ganti dengan aset bannermu */}
            <Image src="/Galleria_Stellaria.png" alt="Galleria Stellaria" fill className="object-cover" />
          </div>
          {/* Garis 3 Warna di bawah banner */}
          <div className="flex w-full h-[6px] md:h-[10px] mt-2">
            <div className="w-1/3 bg-[#5C7F70]" />
            <div className="w-1/3 bg-[#BB852F]" />
            <div className="w-1/3 bg-[#802520]" />
          </div>
        </div>

        {/* PROJECT LISTS */}
        <div className="flex flex-col gap-10 md:gap-12 relative z-10">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/project/${project.slug}`}
              className="group block"
              onMouseEnter={() => setActiveImage(project.image)}
              onMouseLeave={() => setActiveImage(null)}
            >
              <div className="relative w-full bg-brand-orange-light p-6 md:p-10 shadow-project transition-transform duration-300 group-hover:-translate-y-1 group-active:translate-y-0 overflow-hidden flex flex-col md:flex-row justify-between items-center md:items-start">
                
                {/* --- ELEMEN DEKORASI ABSOLUTE --- */}
                {/* Garis Tri-Color Kiri */}
                <div className="absolute left-4 top-8 bottom-8 w-[4px] flex flex-col z-20">
                  <div className="h-1/3 bg-[#97B99C]" />
                  <div className="h-1/3 bg-[#ECA542]" />
                  <div className="h-1/3 bg-[#8D3027]" />
                </div>

                {/* Dekorasi Kanan: Orbit & Rambu Dilarang Masuk */}
                <div className="absolute right-[-20px] lg:right-10 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-40 md:opacity-100 pointer-events-none z-0">
                  {/* Orbit Lingkaran */}
                  <svg className="absolute w-[200px] lg:w-[300px] aspect-square text-[#CF612B]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  {/* Rambu Putar 45 Derajat */}
                  <div className="relative text-disabled-icon rotate-45 z-10 scale-[2.5] lg:scale-[3.5] opacity-80">
                    <Prohibit weight="light" />
                  </div>
                </div>

                {/* Dekorasi Kaset Tape (Opacity rendah di BG) */}
                <div className="absolute left-[30%] top-[-20%] text-[#C76A39] scale-[4] lg:scale-[6] opacity-10 pointer-events-none z-0 rotate-12">
                  <CassetteTape weight="duotone" />
                </div>

                {/* Dekorasi 6 Titik Persegi (Kiri Bawah) */}
                <div className="absolute left-10 bottom-6 flex gap-1 z-20">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-[6px] h-[6px] bg-[#C76A39]" />
                  ))}
                </div>
                {/* --- END DEKORASI --- */}

                {/* KONTEN UTAMA */}
                <div className="relative z-20 pl-6 lg:pl-10 w-full md:w-auto">
                  
                  {/* Badge Platform */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal rounded-full mb-3 md:mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#DF7841]" />
                    <span className="font-futura font-medium text-text-light text-[10px] md:text-sm tracking-widest uppercase">
                      {project.type}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-futura font-bold text-5xl md:text-[64px] text-charcoal leading-none mb-6 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((techItem) => (
                      <div 
                        key={techItem} 
                        className="px-3 md:px-4 py-1 bg-[#F5EDDC] text-tech-alert font-futura font-bold text-[10px] md:text-xs tracking-wider rounded-full"
                      >
                        {techItem}
                      </div>
                    ))}
                  </div>

                </div>

                {/* MOBILE SCREENSHOT STATIS (Hanya muncul di HP, hidden di Tablet/PC) */}
                <div className="relative w-full aspect-video mt-8 rounded-lg overflow-hidden border-2 border-charcoal md:hidden z-20 shadow-md">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* FLOATING IMAGE FOLLOWER (Hanya muncul di Layar Besar saat Hover) */}
      {/* Menggunakan `fixed` agar terbebas dari batasan scroll container */}
      <div 
        ref={floatingImageRef}
        className="fixed top-0 left-0 w-[350px] lg:w-[400px] aspect-video z-50 pointer-events-none hidden md:block"
        style={{ 
          opacity: activeImage ? 1 : 0, 
          scale: activeImage ? 1 : 0.8,
          transition: "opacity 0.3s ease, scale 0.3s ease",
          transformOrigin: "center center"
        }}
      >
        {activeImage && (
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
            <Image src={activeImage} alt="Project Preview" fill className="object-cover" />
          </div>
        )}
      </div>

    </section>
  );
}