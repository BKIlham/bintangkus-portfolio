"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Play, Pause, SkipForward, SkipBack, 
  CaretDown, SpeakerHigh, SpeakerLow 
} from "@phosphor-icons/react";

const PLAYLIST = [
  {
    id: 1,
    title: "Control's Wishes",
    artist: "Monster Siren Records",
    src: "/controls-wishes.mp3",
  },
  {
    id: 2,
    title: "Ad Astra",
    artist: "Monster Siren Records",
    src: "/ad-astra.mp3",
  },
];

export default function MusicPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  // FIX: Tambahkan State untuk Volume, default di 0.5 (50%)
  const [volume, setVolume] = useState(0.3);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = PLAYLIST[currentSongIndex];

  // Mengatur Volume Audio setiap kali state volume berubah atau saat pertama kali render
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Logika Autoplay di Interaksi Pertama User (First Click Unlock)
  useEffect(() => {
    const unlockAutoplay = () => {
      if (!isPlaying && audioRef.current) {
        setIsPlaying(true);
        window.removeEventListener("click", unlockAutoplay);
      }
    };

    window.addEventListener("click", unlockAutoplay);
    return () => window.removeEventListener("click", unlockAutoplay);
  }, [isPlaying]);

  // Handle Play/Pause audio file
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? 1 : 0));
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? 1 : 0));
    setIsPlaying(true);
  };

  const handleEnded = () => {
    if (currentSongIndex === 0) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      handleNext();
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={currentSong.src} 
        onEnded={handleEnded} 
        preload="metadata"
      />

      <div className="fixed bottom-6 right-6 z-[120] flex flex-col items-end gap-3 font-futura">
        
        {/* === PANELS EXPANDED === */}
        <div 
          className={`relative bg-charcoal border border-charcoal/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 ease-in-out flex flex-col origin-bottom-right ${
            isExpanded ? "w-[280px] sm:w-[320px] opacity-100 scale-100" : "w-0 h-0 opacity-0 scale-50 pointer-events-none"
          }`}
        >
          {/* Garis Dekorasi */}
          <div className="flex w-full h-[4px]">
            <div className="w-1/3 bg-[#5C7F70]" />
            <div className="w-1/3 bg-[#BB852F]" />
            <div className="w-1/3 bg-[#802520]" />
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-jetbrains text-[10px] text-text-primary/50 uppercase tracking-widest flex items-center gap-2">
                <SpeakerHigh size={14} /> AUDIO PROTOCOL
              </span>
              <button onClick={() => setIsExpanded(false)} className="text-text-primary/50 hover:text-brand-orange transition-colors">
                <CaretDown size={20} />
              </button>
            </div>

            <div className="flex gap-4 items-center mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-sm overflow-hidden border border-white/10 shadow-inner bg-black">
                <Image 
                  src="/Lone_Trail.png" 
                  alt="Lonetrail OST" 
                  fill 
                  className={`object-cover transition-transform duration-[10s] ease-linear ${isPlaying ? 'scale-110' : 'scale-100'}`} 
                />
              </div>
              <div className="flex flex-col overflow-hidden w-full">
                <h4 className="font-bold text-white text-base sm:text-lg truncate">{currentSong.title}</h4>
                <p className="font-futura-book text-brand-orange-light text-xs sm:text-sm truncate">{currentSong.artist}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                  <span className="font-jetbrains text-[9px] text-text-primary/40 uppercase">
                    {isPlaying ? 'TRANSMITTING...' : 'PAUSED'}
                  </span>
                </div>
              </div>
            </div>

            {/* Controls Track */}
            <div className="flex items-center justify-between px-4 mb-4">
              <button onClick={handlePrev} className="text-text-primary/70 hover:text-white transition-colors">
                <SkipBack size={24} weight="fill" />
              </button>
              <button onClick={togglePlay} className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-orange text-white shadow-md hover:scale-105 active:scale-95 transition-all">
                {isPlaying ? <Pause size={24} weight="fill" /> : <Play size={24} weight="fill" className="ml-1" />}
              </button>
              <button onClick={handleNext} className="text-text-primary/70 hover:text-white transition-colors">
                <SkipForward size={24} weight="fill" />
              </button>
            </div>

            {/* FIX: Kontrol Volume (Slider) */}
            <div className="flex items-center gap-3 px-2 py-2 bg-black/20 rounded-md border border-white/5">
              <SpeakerLow size={16} className="text-text-primary/50" />
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full h-1 bg-charcoal rounded-full appearance-none outline-none accent-brand-orange cursor-pointer"
                aria-label="Volume"
              />
              <SpeakerHigh size={16} className="text-text-primary/50" />
            </div>

          </div>
        </div>

        {/* === TOMBOL UTAMA BULAT (COLLAPSED) === */}
        <div className="flex items-center gap-3">
          <div 
            className={`px-4 py-2 bg-charcoal border border-brand-orange/30 rounded-sm shadow-xl flex items-center gap-3 transition-all duration-500 select-none ${
              isPlaying && !isExpanded 
                ? "opacity-100 translate-x-0 pointer-events-auto" 
                : "opacity-0 translate-x-4 pointer-events-none"
            }`}
          >
            <div className="flex flex-col text-right">
              <span className="font-jetbrains text-[8px] text-brand-orange-light tracking-widest uppercase animate-pulse">NOW TRANSMITTING</span>
              <span className="text-white font-bold text-xs tracking-wide max-w-[120px] truncate">{currentSong.title}</span>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-charcoal text-white rounded-full border-2 transition-all duration-300 shadow-xl z-50 ${
              isExpanded ? "border-brand-orange scale-90" : "border-text-primary/20 hover:border-brand-orange hover:scale-105"
            }`}
          >
            {isPlaying && !isExpanded && (
              <span className="absolute inset-[-4px] rounded-full border border-brand-orange animate-ping opacity-40 pointer-events-none" />
            )}

            {isPlaying && !isExpanded ? (
              <div className="flex items-end gap-[3px] h-[16px] w-[18px]">
                <div className="w-[3px] bg-brand-orange rounded-full h-full animate-[equalizer_0.8s_ease-in-out_infinite_alternate]" />
                <div className="w-[3px] bg-brand-orange rounded-full h-1/2 animate-[equalizer_0.5s_ease-in-out_infinite_alternate_0.2s]" />
                <div className="w-[3px] bg-brand-orange rounded-full h-3/4 animate-[equalizer_0.7s_ease-in-out_infinite_alternate_0.4s]" />
                <div className="w-[3px] bg-brand-orange rounded-full h-1/3 animate-[equalizer_0.6s_ease-in-out_infinite_alternate_0.1s]" />
              </div>
            ) : (
              <div className="w-2 h-2 rounded-full bg-text-primary/40 group-hover:bg-brand-orange relative">
                <span className="absolute inset-[-4px] rounded-full border border-text-primary/30" />
                <span className="absolute inset-[-10px] rounded-full border border-text-primary/10" />
              </div>
            )}
            
            <span className={`absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-charcoal ${isPlaying ? 'bg-green-500' : 'bg-red-500'}`} />
          </button>
        </div>

      </div>

      <style jsx global>{`
        @keyframes equalizer {
          0% { height: 4px; }
          100% { height: 16px; }
        }
      `}</style>
    </>
  );
}