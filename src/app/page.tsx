export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-8 bg-gray-900 text-white">
      
      <p className="text-xl text-gray-400 mb-4">
        Lucas Mougeot
      </p>
      
      {/* THIS IS THE CORRECTED HEADLINE */}
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 pb-2">
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
        
        <a 
          href="/lucas-mougeot-resume.pdf"
          className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto"
        >
          View Résumé
        </a>

        <a 
          href="/consulting"
          className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 border border-gray-600 transition-colors w-full sm:w-auto"
        >
          MougAI Consulting
        </a>

        <a 
          href="/projects"
          className="text-gray-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors w-full sm:w-auto"
        >
          Explore Projects
        </a>

      </div>
    </main>
  );
}