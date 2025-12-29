import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Moreways from './components/Moreways';
import MougAI from './components/MougAI'; // Import the new component
import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-gray-200 selection:bg-white selection:text-black">
      <Hero />
      <Timeline />
      <Moreways />
      <MougAI /> {/* Added here */}
      
      <footer className="py-12 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
        <p className="font-mono uppercase tracking-widest">Lucas Mougeot // 2025</p>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/lucasfuturist" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-mougeot/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </main>
  );
}