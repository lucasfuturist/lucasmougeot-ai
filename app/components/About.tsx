'use client';

export default function About() {
  return (
    <section className="py-32 bg-black border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-5">
          <h2 className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-4">The Pivot</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Why Physics? <br/>Why Software?</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            In materials science, a bug doesn't throw an exception�it breaks the sample. I bring that same rigor to software engineering.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-4">
             Lila Sciences is building the loop between AI hypothesis and robotic execution. I have lived on both sides of that loop.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-gray-800 rounded-lg overflow-hidden">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-gray-900 text-gray-200 font-mono uppercase text-xs">
                <tr>
                  <th className="p-4 md:p-6">My Background</th>
                  <th className="p-4 md:p-6 text-cyan-500">The Lila Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-400">
                <tr className="hover:bg-gray-900/20 transition-colors">
                  <td className="p-4 md:p-6 font-medium text-white">NASA Ceramics</td>
                  <td className="p-4 md:p-6">Handling "messy" physical data and rigid experimental constraints.</td>
                </tr>
                <tr className="hover:bg-gray-900/20 transition-colors">
                  <td className="p-4 md:p-6 font-medium text-white">EZ Systems Robotics</td>
                  <td className="p-4 md:p-6">Integrating software agents with hardware reality (LiDAR/CV calibration).</td>
                </tr>
                <tr className="hover:bg-gray-900/20 transition-colors">
                  <td className="p-4 md:p-6 font-medium text-white">The 20-Day Sprint</td>
                  <td className="p-4 md:p-6">Shipping bespoke, high-velocity tools at the speed of a startup.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
