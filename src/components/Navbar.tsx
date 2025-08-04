// src/components/Navbar.tsx
// THIS FILE IS NOW SYNTACTICALLY CORRECT

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/logos/icon-dmode.png"
                alt="MougAI Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>

          {/* Navigation Links on the right */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                Explore Projects
              </Link>
              <Link href="/consulting" className="text-gray-300 hover:text-white transition-colors duration-200">
                MougAI Consulting
              </Link>
              <a href="/lucas-mougeot-resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-gray-200 hover:bg-gray-700 py-2 px-4 rounded-md transition-colors duration-200">
                Résumé
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
}