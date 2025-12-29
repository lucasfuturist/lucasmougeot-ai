import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Primary font for readability
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

// Code font for technical details
const mono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono' 
});

export const metadata: Metadata = {
  title: 'Lucas Mougeot | Systems Engineer',
  description: 'Portfolio of Lucas Mougeot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-neutral-950 text-neutral-200 antialiased selection:bg-neutral-200 selection:text-black relative">
        {/* The Grid Overlay */}
        <div className="fixed inset-0 bg-grid-white pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-20" />
        
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}