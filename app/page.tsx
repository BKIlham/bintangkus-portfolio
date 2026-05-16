import About from "@/components/About";
import Experience from "@/components/Experience";
import Galleria from "@/components/Galleria";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-bg-dark">
      <Hero />
      <About />
      <Experience />
      <Galleria />
    </main>
  );
}