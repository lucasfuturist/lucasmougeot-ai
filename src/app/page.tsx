// src/app/consulting/page.tsx
"use client"; 

import { useState } from 'react';
import ContactModal from '@/components/ContactModal';

export default function ConsultingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto p-8 sm:p-16">
          
          {/* Header Section: Now reflects your core mission */}
          <div className="text-center pb-12 border-b border-gray-700">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 pb-2">
              MougAI Consulting
            </h1>
            <p className="mt-4 text-xl text-gray-300 pb-2">
              Ethically-Grounded AI that Uplifts Humanity with Purpose and Meaning
            </p>
          </div>

          {/* NEW: Your Guiding Philosophy Section */}
          <div className="py-12 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-center">
              A Partner in Curiosity
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              My entire career has been a journey driven by a deep curiosity about the world, moving from Electrical and Materials Engineering to a deep engagement with AI Systems Architecture. I don't just build systems; I seek to understand them and their impact at the most fundamental level.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              To me, passion for AI is an understatement. My mission is to counteract the dystopian aspects of technology by designing and deploying AI that is interpretable, human-centric, and grounded in ethical principles. This is the foundation of every project I undertake.
            </p>
          </div>

          {/* Rewritten: Applied Expertise Section */}
          <div className="py-12 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-center mb-8">Applied Expertise</h2>
            <p className="text-center text-lg text-gray-400 mb-10 max-w-2xl mx-auto">This philosophy translates directly into practical, high-value capabilities for your business, from authoring federal grant literature to developing novel, application-agnostic agentic systems.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">Agentic System & Workflow Design</li>
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">Compliance Auditing via Vision/AR</li>
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">Advanced Context Engineering for LLMs</li>
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">RAG-Optimized & Interpretable Chatbots</li>
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">Modular Systems for Online Experiences</li>
              <li className="bg-gray-800 p-4 rounded-lg border border-gray-700">Technical Demos for International Conferences</li>
            </ul>
          </div>

          {/* Rate & Contact Section (Remains the same) */}
          <div className="py-12 text-center">
            <h2 className="text-3xl font-bold">Engagement & Rates</h2>
            <div className="mt-6 bg-gray-800 border border-teal-500 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-xl font-semibold text-gray-200">Consulting Rate</p>
              <p className="text-5xl font-bold my-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
                $200<span className="text-2xl text-gray-400">/hr</span>
              </p>
              <p className="text-gray-400">For strategic planning, system architecture, and hands-on development.</p>
            </div>
            <div className="mt-8">
              <p className="text-lg text-gray-300">Ready to build with purpose?</p>
              
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

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}