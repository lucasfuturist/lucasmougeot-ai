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