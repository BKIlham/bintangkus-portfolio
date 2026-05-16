"use client";

import Image from "next/image";
import { CassetteTape } from "@phosphor-icons/react";

// Data list pengalaman kerja/organisasi
const experiences = [
  {
    id: 1,
    company: "PT Oneject Indonesia",
    role: "Frontend Developer Intern",
    date: "Oct 2025 - April 2026",
  },
  {
    id: 2,
    company: "PT Cazh Teknologi Inovasi",
    role: "Web Developer Intern",
    date: "July 2024 - September 2024",
  },
  {
    id: 3,
    company: "Sircle (Student Research Group)",
    role: "Head of Software & Mobile Engineering",
    date: "July 2023 - July 2024",
  },
  {
    id: 4,
    company: "Ngoprek UI/UX Event",
    role: "Workshop Speaker & Lead Mentor",
    date: "Oct 2023 - Nov 2023",
  },
  {
    id: 5,
    company: "Telkom University Purwokerto",
    role: "Practicum Assistant",
    date: "March 2023 - July 2023",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full min-h-screen bg-dot-grid bg-bg-dark overflow-hidden flex">
      
      {/* KIRI: Sidebar Oranye (Coordinate Strip) */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-brand-orange-light flex flex-col justify-between items-center py-12 lg:py-24 z-20 border-r border-charcoal/20">
        <div className="rotate-180" style={{ writingMode: 'vertical-rl' }}>
          <span className="font-jetbrains text-[10px] md:text-xs text-charcoal opacity-70 tracking-widest uppercase">
            SYS_VER // EXP.001A
          </span>
        </div>
        <div className="rotate-180" style={{ writingMode: 'vertical-rl' }}>
          <span className="font-jetbrains text-[10px] md:text-xs text-charcoal opacity-70 tracking-widest uppercase">
            UNIT_COORD: 03.14.92
          </span>
        </div>
      </div>

      {/* KANAN: Dekorasi Ekstra (Background) */}
      {/* Peta Orbit Kanan Atas */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[600px] aspect-square opacity-60 pointer-events-none translate-x-[20%] -translate-y-[20%]">
        <Image src="/experience-orbit.svg" alt="Solar System Orbit" fill className="object-contain" />
      </div>

      {/* TENGAH: Konten Utama Experience */}
      <div className="relative w-full max-w-[1200px] mx-auto pl-16 md:pl-28 lg:pl-40 pr-6 lg:pr-12 py-20 z-10">
        
        {/* Header Title */}
        <div className="mb-16 lg:mb-24">
          <h2 className="font-futura font-bold text-5xl md:text-6xl lg:text-7xl text-text-primary inline-block">
            Experience
          </h2>
          {/* Garis merah tebal di bawah judul */}
          <div className="h-[4px] w-[80%] md:w-[60%] max-w-[400px] bg-[#8D3027] mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-text-primary/20 ml-4 md:ml-8 flex flex-col gap-12 lg:gap-16">
          
          {experiences.map((exp) => (
            <div key={exp.id} className="group relative flex items-start pl-8 lg:pl-12 cursor-pointer">
              
              {/* Timeline Node (Titik Simpul) */}
              {/* Default State: Krem redup | Hover State: Oranye menyala dengan Radar */}
              <div className="absolute left-[-24px] top-1 flex items-center justify-center w-[46px] h-[46px]">
                
                {/* Efek Radar Orbit (Hanya muncul saat hover container baris ini) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {/* Lingkaran Luar Berkedip */}
                  <div className="absolute w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full border border-brand-orbit animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" />
                  {/* Lingkaran Tengah */}
                  <div className="absolute w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full border border-brand-orbit opacity-60" />
                  {/* Lingkaran Statis Dalam */}
                  <div className="absolute w-[30px] h-[30px] rounded-full bg-brand-orbit/20" />
                </div>

                {/* Ikon Utama */}
                <div className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 bg-bg-dark rounded-full border-4 border-bg-dark flex items-center justify-center text-text-primary/60 group-hover:text-brand-orbit transition-colors duration-300">
                  <CassetteTape size="100%" weight="fill" />
                </div>
              </div>

              {/* Konten Teks Timeline */}
              <div className="flex flex-col select-none transition-transform duration-300 group-hover:translate-x-2">
                <span className="font-futura-book text-sm md:text-base lg:text-lg text-text-primary/60 mb-1 transition-colors duration-300 group-hover:text-text-primary/80">
                  {exp.company}
                </span>
                <h3 className="font-futura font-bold text-xl md:text-3xl lg:text-4xl text-text-primary mb-2 transition-colors duration-300 group-hover:text-white">
                  {exp.role}
                </h3>
                <span className="font-jetbrains text-xs md:text-sm lg:text-base text-text-primary/40 transition-colors duration-300 group-hover:text-text-primary/60">
                  {exp.date}
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}