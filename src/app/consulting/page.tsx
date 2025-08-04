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
                $200<span className="text-2xl text-gray-400">/hr</span>
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