"use client";

import { GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-dot-grid bg-bg-dark overflow-hidden flex flex-col justify-center items-center py-24 md:py-32 z-20">
      
      {/* Top Border Divider (Garis 3 Warna) */}
      <div className="absolute top-0 left-0 right-0 flex w-full h-[6px] md:h-[8px]">
        <div className="w-1/3 bg-[#5C7F70]" />
        <div className="w-1/3 bg-[#BB852F]" />
        <div className="w-1/3 bg-[#802520]" />
      </div>

      {/* KONTEN UTAMA FOOTER */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center w-full max-w-4xl mx-auto">
        
        {/* Subheading */}
        <h3 className="font-futura-book font-bold text-text-primary text-sm md:text-lg tracking-widest uppercase mb-6 opacity-80">
          Have a project in mind ?
        </h3>

        {/* Email Link dengan Animasi Hover Underline */}
        <a 
          href="mailto:bintangkus308@gmail.com"
          className="group relative inline-block mb-12"
        >
          <span className="font-futura font-bold text-[28px] sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-md">
            bintangkus308@gmail.com
          </span>
          {/* Garis Bawah (Underline) yang memanjang saat dihover */}
          <span className="absolute -bottom-2 left-0 w-0 h-[3px] md:h-[4px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
        </a>

        {/* Social Media Icons */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* GitHub */}
          <a href="https://github.com/BKIlham" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-orange hover:-translate-y-1 transition-all duration-300">
            <GithubLogo weight="fill" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/bintang-kusuma-ilham-2862a6190/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-orange hover:-translate-y-1 transition-all duration-300">
            <LinkedinLogo weight="fill" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          
          {/* WhatsApp */}
          <a href="https://wa.me/6285786567899" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-orange hover:-translate-y-1 transition-all duration-300">
            {/* Ganti nomor WA di atas dengan nomormu (pakai 62) */}
            <WhatsappLogo weight="fill" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
        </div>

      </div>

      {/* --- DEKORASI POJOK --- */}
      
      {/* Kotak Oranye Kiri Bawah */}
      <div className="absolute left-6 bottom-6 md:left-12 md:bottom-12 w-4 h-4 md:w-6 md:h-6 bg-brand-orange-light opacity-80" />

      {/* Orbit Minimalis Putih Kanan Bawah */}
      {/* Menggunakan animasi spin bawaan Tailwind untuk berputar konstan */}
      <div className="absolute right-[-80px] bottom-[-80px] md:right-[-150px] md:bottom-[-150px] w-[300px] md:w-[500px] aspect-square text-white opacity-20 pointer-events-none animate-[spin_40s_linear_infinite]">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {/* Orbit Utama (Paling Besar) */}
          <circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" strokeWidth="2.5" />
          {/* Planet di Orbit Utama (Kiri) */}
          <circle cx="10" cy="150" r="12" fill="currentColor" />

          {/* Orbit Sekunder (Agak ke kanan bawah) */}
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="2.5" />

          {/* Cincin Memotong (Kanan) */}
          <circle cx="260" cy="220" r="35" fill="none" stroke="currentColor" strokeWidth="2.5" />

          {/* Kumpulan 3 Cincin Rapat (Pusat Planet Kanan Bawah) */}
          <circle cx="240" cy="260" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="240" cy="260" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="240" cy="260" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Planet Solid di Tengah Cincin Rapat */}
          <circle cx="240" cy="260" r="16" fill="currentColor" />
        </svg>
      </div>

    </footer>
  );
}