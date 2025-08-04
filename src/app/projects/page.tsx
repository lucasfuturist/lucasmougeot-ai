// src/app/projects/page.tsx
// THIS FILE IS NOW UPDATED WITH THE LIVE DEMO LINK

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 sm:p-24 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Selected Projects
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A collection of my work in AI systems, agentic development, and applied LLM engineering.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Uplios */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-purple-400">Uplios</h3>
            <p className="mt-2 text-gray-400 flex-grow">
              An LLM-driven intelligent job matching platform featuring semantic knowledge graph construction through LLM-powered job parsing for match-score calculations.
            </p>
            <div className="mt-4">
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Python</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Knowledge Graph</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Docker</span>
            </div>
          </div>

          {/* Card 2: Stream Guru */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-purple-400">Stream Guru</h3>
            <p className="mt-2 text-gray-400 flex-grow">
              A chatbot-based entertainment matching platform to combat user decision paralysis through LLM-parsed search queries, with data scraped for ready access on PostgreSQL tables.
            </p>
            <div className="mt-4">
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Next.js</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Supabase</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">LLM</span>
            </div>
            <div className="mt-6">
              {/* THIS LINK IS NOW LIVE */}
              <a href="https://stream-guru-5tgy3cku5-uplios-projects.vercel.app/index.html" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                View Live Demo
              </a>
            </div>
          </div>

          {/* Card 3: Dennis (Agentic OS) */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-purple-400">Dennis (Agentic OS)</h3>
            <p className="mt-2 text-gray-400 flex-grow">
              A native LLM operating system designed to power multimodal local inference for AI agents executing CLI, serving as a laboratory for algorithm development and workflow compression.
            </p>
            <div className="mt-4">
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Agentic Systems</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">CLI</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Multi-GPU</span>
            </div>
          </div>
          
          {/* Card 4: One-Click Context Toolkit */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-purple-400">One-Click Context Toolkit</h3>
            <p className="mt-2 text-gray-400 flex-grow">
              Auto-generates visual file trees and inline code commentary to support LLM context compression for automated software development. An ongoing context engineering project.
            </p>
            <div className="mt-4">
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Dev Tool</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Context Engineering</span>
            </div>
          </div>
          
          {/* Card 5: RAG-Optimized Architectures */}
           <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-purple-400">RAG-Optimized Chatbots</h3>
            <p className="mt-2 text-gray-400 flex-grow">
              Graphical systems that reduce hallucination in chatbots via semantic lookups and cyclical prompt injection, validated through dual LLM supervised learning.
            </p>
            <div className="mt-4">
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">RAG</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Prompt Engineering</span>
            </div>
          </div>
          
          {/* Card 6: ADA Compliance AI */}
           <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-purple-400">ADA Compliance AI</h3>
            <p className="mt-2 text-gray-400 flex-grow">
              Real-time regulatory auditing via object detection, LiDAR scans, and legal corpus parsing to enable automated compliance flagging against government regulations.
            </p>
            <div className="mt-4">
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Computer Vision</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">LiDAR</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">NLP</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}