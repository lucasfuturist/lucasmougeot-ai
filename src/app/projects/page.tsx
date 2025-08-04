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