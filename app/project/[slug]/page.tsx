"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, GithubLogo, ArrowUpRight } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const projectData: Record<string, Record<string, string>> = {
  "onehub": {
    title: "Onehub",
    year: "2026",
    tech: "Expo, React Native, NativeWind, TypeScript",
    description: "I developed Onehub, a mobile room booking application featuring IoT integration for smart door locks, QRIS payments, and automated scheduling notifications. The design focuses on robust performance, clean code architecture, and an immersive user experience.",
    image: "/project-1.png",
    github: "",
    live: ""
  },
  "fitlab": {
    title: "Fitlab",
    year: "2026",
    tech: "Next.js, React, Tailwind",
    description: "Developed the corporate wellness platform and landing page for Fitlab. The project involved creating a highly responsive and visually appealing interface to showcase gym services and manage user subscriptions.",
    image: "/project-2.png",
    github: "",
    live: "https://fitlab.oneject.co.id/"
  },
  "id-farm": {
    title: "Id Farm",
    year: "2025",
    tech: "Laravel, PHP, Figma",
    description: "An e-procurement and farming management system designed to streamline operations. I was responsible for designing logo, designing high-fidelity Figma prototypes, and implementing the frontend structure.",
    image: "/project-3.png",
    github: "",
    live: ""
  }
};

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const data = projectData[resolvedParams.slug];

  // GSAP Entrance Animation
  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Animasi teks muncul bertahap dari bawah
    tl.fromTo(
      ".animate-text",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );

    // Animasi gambar melayang dari bawah
    tl.fromTo(
      ".animate-image",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  // Jika URL ngawur (slug tidak ada di data), tampilkan halaman 404 sederhana
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-dark text-text-primary">
        <h1 className="font-futura text-4xl">Project Protocol Not Found.</h1>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-bg-dark bg-dot-grid overflow-hidden pb-32">
      
      {/* Container Utama: 
        Kita kasih pt-32 atau pt-40 agar konten tidak tertutup 
        oleh Global Navbar yang posisinya fixed di atas.
      */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12 pt-32 md:pt-40 flex flex-col">
        
        {/* Tombol Back */}
        <div className="animate-text mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-primary/70 hover:text-brand-orange transition-colors font-jetbrains text-sm tracking-widest uppercase"
          >
            <ArrowLeft size={20} />
            Back to Base
          </Link>
        </div>

        {/* --- HEADER: Title & Links --- */}
        <div className="animate-text flex flex-wrap items-center gap-4 md:gap-6 mb-16">
          <h1 className="font-futura font-bold text-5xl md:text-6xl lg:text-[80px] text-white tracking-tighter leading-none">
            {data.title}
          </h1>
          <div className="flex items-center gap-3 mt-2 md:mt-4 text-text-primary/60">
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                <GithubLogo size={32} weight="regular" />
              </a>
            )}
            {data.live && (
              <a href={data.live} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                <ArrowUpRight size={32} weight="regular" />
              </a>
            )}
          </div>
        </div>

        {/* --- METADATA SECTIONS --- */}
        <div className="flex flex-col gap-10 md:gap-12 mb-20 w-full max-w-[700px]">
          
          {/* Year */}
          <div className="animate-text flex flex-col gap-2">
            <h3 className="font-jetbrains font-bold text-brand-orange-light text-sm md:text-base uppercase tracking-widest">
              Year
            </h3>
            <p className="font-futura text-text-primary text-xl md:text-2xl">
              {data.year}
            </p>
          </div>

          {/* Tech & Technique */}
          <div className="animate-text flex flex-col gap-2">
            <h3 className="font-jetbrains font-bold text-brand-orange-light text-sm md:text-base uppercase tracking-widest">
              Tech & Technique
            </h3>
            <p className="font-futura text-text-primary text-xl md:text-2xl">
              {data.tech}
            </p>
          </div>

          {/* Description */}
          <div className="animate-text flex flex-col gap-2">
            <h3 className="font-jetbrains font-bold text-brand-orange-light text-sm md:text-base uppercase tracking-widest">
              Description
            </h3>
            <p className="font-futura-book text-text-primary/80 text-lg md:text-xl leading-relaxed text-justify">
              {data.description}
            </p>
          </div>

        </div>

        {/* --- LARGE PROJECT IMAGE --- */}
        <div className="animate-image relative w-full aspect-video md:aspect-[16/10] rounded-sm border border-charcoal overflow-hidden shadow-2xl z-20">
          <Image 
            src={data.image} 
            alt={`${data.title} Preview`} 
            fill 
            className="object-cover"
            priority
          />
        </div>

      </div>
    </main>
  );
}