import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { MouseSpotlight } from '@/components/effects/MouseSpotlight';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Highlights } from '@/sections/Highlights';
import { Contact } from '@/sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
      {/* Ambient background layer that spans the entire page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-[60vh] mx-auto h-[500px] max-w-6xl bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.10),transparent_70%)] blur-2xl" />
        <div className="absolute inset-x-0 top-[140vh] mx-auto h-[500px] max-w-6xl bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.09),transparent_70%)] blur-2xl" />
        <div className="absolute inset-x-0 top-[220vh] mx-auto h-[500px] max-w-6xl bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.08),transparent_70%)] blur-2xl" />
      </div>

      <MouseSpotlight />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Highlights />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
