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
          
          <div className="text-center pb-12 border-b border-gray-700">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 pb-2">
              MougAI Consulting
            </h1>
            <p className="mt-4 text-xl text-gray-300 pb-2">
              Ethically-Grounded AI that Uplifts Humanity with Purpose and Meaning
            </p>
          </div>

          <div className="py-12 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-center">
              Architecting Innovation
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Innovation isn't a happy accident; it's an engineered outcome. My background, spanning from Materials Engineering to AI Systems Architecture, provides a unique framework for deconstructing complex challenges and building robust, first-principle solutions for your business.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              This technical foundation is guided by a core mission: to build AI that is not only powerful but also purposeful. I focus on creating interpretable, human-centric systems designed to counteract the dystopian hype cycle and deliver tangible, ethical value. True innovation should uplift, not just disrupt.
            </p>
          </div>

          <div className="py-12 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-center mb-8">Applied Expertise</h2>
            <p className="text-center text-lg text-gray-400 mb-10 max-w-2xl mx-auto">This philosophy translates directly into practical, high-value capabilities for your business. Here is what we can build together:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              
              <li className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-teal-300">Agentic System & Workflow Design</h3>
                <p className="mt-2 text-gray-400 text-base">Design autonomous AI agents to automate complex digital workflows, execute multi-step tasks, and unlock new operational efficiencies for your business.</p>
              </li>
              
              <li className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-teal-300">Compliance Auditing via Vision/AR</h3>
                <p className="mt-2 text-gray-400 text-base">Deploy custom computer vision and AR models to perform real-time regulatory and safety audits, dramatically reducing manual oversight and ensuring verifiable compliance.</p>
              </li>
              
              <li className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-teal-300">Advanced Context Engineering for LLMs</h3>
                <p className="mt-2 text-gray-400 text-base">Optimize the performance and reduce the operational costs of your LLMs by engineering the precise context they need to excel at specialized, high-value tasks.</p>
              </li>

              <li className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-teal-300">RAG-Optimized & Interpretable Chatbots</h3>
                <p className="mt-2 text-gray-400 text-base">Build sophisticated, trustworthy chatbots and internal knowledge systems grounded in your own proprietary data, ensuring accurate answers and eliminating hallucinations.</p>
              </li>
              
              <li className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-teal-300">Modular Systems for Online Experiences</h3>
                <p className="mt-2 text-gray-400 text-base">Architect scalable, component-based platforms for novel online experiences—from AI-powered consultants to intelligent media platforms—ensuring long-term adaptability.</p>
              </li>

              <li className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-teal-300">AI Product Prototyping</h3>
                <p className="mt-2 text-gray-400 text-base">Rapidly transform your innovative AI concepts into functional, high-fidelity prototypes. Perfect for securing stakeholder buy-in, validating market fit, and de-risking future development.</p>
              </li>

            </ul>
          </div>

          <div className="py-12 text-center">
            <h2 className="text-3xl font-bold">Engagement & Rates</h2>
            <div className="mt-6 bg-gray-800 border border-teal-500 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-xl font-semibold text-gray-200">Consulting Rate</p>
              <p className="text-5xl font-bold my-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
                $200<span className="text-2xl text-gray-400">/hr</span>
              </p>
              {/* THIS IS THE UPDATED DESCRIPTION */}
              <p className="text-gray-400">For end-to-end projects: from strategic planning and system architecture through deployment, integration, and long-term maintenance.</p>
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