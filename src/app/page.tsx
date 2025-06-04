import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[url('/images/bg-textura.png')] bg-repeat bg-center bg-fixed opacity-10 pointer-events-none z-0" />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
      </main>
    </div>
  );
}
