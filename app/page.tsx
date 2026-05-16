import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-bg-dark">
      <Hero />
      <About />
    </main>
  );
}