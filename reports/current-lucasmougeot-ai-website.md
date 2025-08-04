
📁 Tree for: C:\projects\lucasmougeot-ai\src
----------------------------------------
src
+-- app
|   +-- consulting
|   |   L-- page.tsx
|   +-- projects
|   |   L-- page.tsx
|   +-- thank-you
|   |   L-- page.tsx
|   +-- favicon.ico
|   +-- globals.css
|   +-- layout.tsx
|   L-- page.tsx
L-- components
    L-- ContactModal.tsx

📜 Listing scripts with extensions: .ts, .txt, .tsx, .js, .jsx, .py, .html, .json, .css, .sql, .toml, .ps1
----------------------------------------

### page.tsx

// src/app/consulting/page.tsx

// THIS IS THE MOST IMPORTANT LINE!
// It tells Next.js to treat this as a component that can run in the browser.
"use client"; 

import { useState } from 'react';
import ContactModal from '@/components/ContactModal'; // Adjust path if needed

export default function ConsultingPage() {
  // State to control whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto p-8 sm:p-16">
          {/* ... all the header, value prop, and expertise sections are the same ... */}
          
          {/* Header Section */}
          <div className="text-center pb-12 border-b border-gray-700">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              MougAI Consulting
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Enterprise-Grade AI Integration & Strategy
            </p>
          </div>

          {/* Value Proposition Section */}
          <div className="py-12 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-center">
              From Prototype to Production
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              I specialize in bridging the gap between cutting-edge AI research and practical, high-value business applications. My experience as an Integration Engineer at EZ Systems involved leading R&D on client-facing prototypes, architecting modular multi-model systems for stable, long-term learning, and delivering mixed-reality (MR) and AI demos that directly drove new federal contracts.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              My consultancy provides the technical horsepower and strategic insight to de-risk your AI initiatives and accelerate your time-to-market.
            </p>
          </div>

          {/* Services & Expertise Section */}
          <div className="py-12 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-center mb-8">Core Expertise</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">AI-Based Compliance Auditing (ADA, etc.)</li>
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">Agentic & Multi-Modal System Architecture</li>
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">RAG-Optimized Chatbot Development</li>
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">LLM-Powered Data Parsing & Analysis</li>
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">Explainable AI (XAI) Grant & Proposal Authorship</li>
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">Technical Documentation for Enterprise AI</li>
            </ul>
          </div>

          {/* Rate & Contact Section */}
          <div className="py-12 text-center">
            <h2 className="text-3xl font-bold">Engagement & Rates</h2>
            <div className="mt-6 bg-gray-800 border border-teal-500 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-xl font-semibold text-gray-200">Consulting Rate</p>
              <p className="text-5xl font-bold my-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
                $250<span className="text-2xl text-gray-400">/hr</span>
              </p>
              <p className="text-gray-400">For strategic planning, system architecture, and hands-on development.</p>
            </div>
            <div className="mt-8">
              <p className="text-lg text-gray-300">Ready to build the future of your business?</p>
              
              {/* THIS IS THE UPDATED BUTTON */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-4 inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-teal-600 transition-colors"
              >
                Contact Me to Get Started
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Render the modal component, passing state to it */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

### globals.css

@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

### layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

### page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-8 bg-gray-900 text-white">
      
      {/* Headline: Your Professional Title */}
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        AI Systems Architect & Applied LLM Engineer
      </h1>

      {/* Sub-headline: Your Value Proposition */}
      <p className="mt-6 text-lg text-gray-300 max-w-3xl">
        I design, build, and deploy modular, interpretable AI systems—from agentic
        operating systems to RAG-optimized chatbots. My focus is on turning complex 
        AI concepts into production-grade reality for enterprise integration and 
        ethically-grounded products.
      </p>

      {/* Calls-to-Action: The Three Doors */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        
        {/* CTA for Employers */}
        <a 
          href="/lucas-mougeot-resume.pdf" // We will add this file soon
          className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto"
        >
          View Résumé
        </a>

        {/* CTA for Clients (MougAI) */}
        <a 
          href="/consulting" // We will build this page
          className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 border border-gray-600 transition-colors w-full sm:w-auto"
        >
          MougAI Consulting
        </a>

        {/* CTA for Demos/Peers */}
        <a 
          href="/projects" // We will build this page
          className="text-gray-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors w-full sm:w-auto"
        >
          Explore Projects
        </a>

      </div>
    </main>
  );
}

### page.tsx

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 sm:p-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Selected Work & Project Demos
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A collection of my work in AI systems, agentic development, and more.
          </p>
        </div>

        {/* Project Cards Grid - We will build this next */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Placeholder for Project Cards */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-purple-400">Stream Guru</h3>
            <p className="mt-2 text-gray-400">
              This is where the description for Stream Guru will go. We'll add the stack and a link to the demo.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-purple-400">Uplios</h3>
            <p className="mt-2 text-gray-400">
              This is where the description for Uplios will go. We'll add details about the knowledge graph and ranking system.
            </p>
          </div>
          
          {/* We will add more projects here */}

        </div>
        
      </div>
    </main>
  );
}

### page.tsx

// src/app/thank-you/page.tsx

"use client"; // This page needs to be interactive, so we make it a client component.

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use this hook for navigation in App Router
import Link from 'next/link';

export default function ThankYouPage() {
  const router = useRouter();

  // This useEffect hook runs once when the component is first rendered.
  useEffect(() => {
    // We set a timer for 5 seconds (5000 milliseconds).
    const timer = setTimeout(() => {
      // After 5 seconds, this code runs, redirecting to the homepage.
      router.push('/');
    }, 5000);

    // This is a cleanup function. If the user navigates away before 5s,
    // it clears the timer to prevent errors.
    return () => clearTimeout(timer);
  }, [router]); // The hook depends on the router object.

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-8 bg-gray-900 text-white">
      <div className="bg-gray-800 border border-teal-500 rounded-lg p-10 max-w-lg">
        <h1 className="text-4xl font-bold text-teal-400">Thank You!</h1>
        <p className="mt-4 text-lg text-gray-300">
          Your inquiry has been successfully submitted. I will review it and get back to you within 24 hours.
        </p>
        <p className="mt-6 text-gray-400">
          You will be automatically redirected to the homepage shortly.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          If you are not redirected, <Link href="/" className="underline hover:text-white">click here</Link>.
        </div>
      </div>
    </main>
  );
}

### ContactModal.tsx

// src/components/ContactModal.tsx

// This is a client component because it uses event handlers (onClose, onSubmit)
"use client";

// Define the component's props interface
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // If the modal isn't open, render nothing.
  if (!isOpen) return null;

  return (
    // Main container with a semi-transparent backdrop
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
      {/* The actual modal panel */}
      <div className="bg-gray-800 rounded-lg p-8 max-w-lg w-full relative border border-teal-500">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          × {/* This is an "X" character */}
        </button>

        <h2 className="text-2xl font-bold mb-4 text-white">Project Inquiry</h2>
        <p className="text-gray-400 mb-6">Please provide some details about your project. I'll respond within 24 hours.</p>
        {/* Formspree Form */}
        <form action="https://formspree.io/f/mqaldozo" method="POST">
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Full Name</label>
            <input type="text" id="name" name="name" required className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"/>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email Address</label>
            <input type="email" id="email" name="email" required className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"/>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Project Details</label>
            <textarea id="message" name="message" rows={4} required className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
          </div>

          <button type="submit" className="w-full bg-teal-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-teal-600 transition-colors">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

----------------------------------------
----------------------------------------