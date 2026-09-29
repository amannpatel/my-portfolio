import { Code2, Film, Instagram, Rocket, Server, Sparkles, Target } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { MouseSpotlight } from '@/components/effects/MouseSpotlight';
import { IconMarquee } from '@/components/ui/IconMarquee';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Creator } from '@/sections/Creator';
import { Highlights } from '@/sections/Highlights';
import { Contact } from '@/sections/Contact';

const identityMarquee = [
  { label: 'Backend Engineer', icon: Server },
  { label: 'Content Creator', icon: Film },
  { label: 'Digital Marketer', icon: Target },
  { label: 'Meta Ads', icon: Rocket },
  { label: 'System Design', icon: Code2 },
  { label: 'Personal Brand', icon: Sparkles },
  { label: '@amann.kabir', icon: Instagram },
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
      {/* Ambient background layer that spans the entire page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-[60vh] mx-auto h-[500px] max-w-6xl bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.07),transparent_70%)] blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.10),transparent_70%)]" />
        <div className="absolute inset-x-0 top-[140vh] mx-auto h-[500px] max-w-6xl bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06),transparent_70%)] blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.09),transparent_70%)]" />
        <div className="absolute inset-x-0 top-[220vh] mx-auto h-[500px] max-w-6xl bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.06),transparent_70%)] blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.08),transparent_70%)]" />
      </div>

      <ScrollProgressBar />
      <MouseSpotlight />
      <Navbar />

      <main className="relative">
        <Hero />
        <IdentityBand />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Creator />
        <Highlights />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function IdentityBand() {
  return (
    <div className="relative py-6">
      <IconMarquee items={identityMarquee} speed={45} />
    </div>
  );
}

