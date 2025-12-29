# File Scan

**Roots:**

- `C:\projects\lucas-playground\app`


## Tree: C:\projects\lucas-playground\app

```
app/

├── components/
│   ├── About.tsx
│   ├── Hero.tsx
│   ├── Moreways.tsx
│   ├── Timeline.tsx
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.tsx
├── styles/

```

## Files

### `C:/projects/lucas-playground/app/globals.css`

```css
﻿@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-medium tracking-tight text-white;
  }
}
```

### `C:/projects/lucas-playground/app/layout.tsx`

```tsx
﻿import type { Metadata } from 'next';
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
      <body className="bg-neutral-950 text-neutral-200 antialiased selection:bg-neutral-200 selection:text-black">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12">
          {children}
        </div>
      </body>
    </html>
  );
}
```

### `C:/projects/lucas-playground/app/page.tsx`

```tsx
﻿import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Moreways from './components/Moreways';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-gray-200 selection:bg-white selection:text-black">
      <Hero />
      <Timeline />
      <Moreways />
      
      <footer className="py-12 border-t border-gray-800 text-center text-gray-600 font-mono text-xs uppercase tracking-widest">
        <p>Lucas Mougeot // 2025</p>
      </footer>
    </main>
  );
}
```

### `C:/projects/lucas-playground/app/components/About.tsx`

```tsx
﻿'use client';

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

```

### `C:/projects/lucas-playground/app/components/Hero.tsx`

```tsx
﻿'use client';

import { FileText, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-32 max-w-3xl">
      <div className="space-y-8">
        
        {/* Name & Title */}
        <div className="space-y-2">
          <h1 className="text-5xl font-semibold tracking-tighter text-white sm:text-6xl">
            Lucas Mougeot
          </h1>
          <h2 className="text-xl text-neutral-400 font-normal">
            Systems Engineer <span className="text-neutral-600 mx-2">//</span> Platform & Applied AI
          </h2>
        </div>

        {/* The Pitch */}
        <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
          I bridge the gap between physical constraints and digital scale. 
          Background in <span className="text-neutral-200">materials science and robotics</span>, 
          now architecting <span className="text-neutral-200">full-stack AI infrastructure</span>.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a 
            href="mailto:lucas@lucasmougeot.ai" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors"
          >
            <Mail className="w-4 h-4" /> 
            Contact Me
          </a>
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium rounded hover:bg-neutral-800 hover:text-white transition-all"
          >
            <FileText className="w-4 h-4" /> 
            Resume
          </a>
        </div>

      </div>
    </section>
  );
}
```

### `C:/projects/lucas-playground/app/components/Moreways.tsx`

```tsx
﻿'use client';

import { Database, Eye, Terminal, ShieldCheck } from 'lucide-react';

export default function Moreways() {
  return (
    <section className="py-20 border-t border-neutral-900">
      <div className="mb-12">
        <h3 className="text-sm font-mono text-neutral-500 mb-2 uppercase tracking-wider">
          Recent Architecture
        </h3>
        <h2 className="text-3xl font-semibold text-white mb-4">The Moreways Ecosystem</h2>
        <p className="text-neutral-400 max-w-2xl leading-relaxed">
          A high-fidelity, multi-tenant system built to demonstrate rapid engineering velocity. 
          Consists of four integrated services sharing a monorepo, strict typing, and a unified CI/CD pipeline.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <TechCard title="Legal Graph Engine" icon={<Database className="w-5 h-5" />}>
          Custom <strong>Stack Machine parser</strong> for regulatory PDFs. 
          Data stored in Postgres using <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-200 text-xs font-mono">ltree</code> for hierarchical queries.
          Hybrid RAG implementation with citation anchoring.
        </TechCard>

        <TechCard title="AdTech Attribution Pixel" icon={<Eye className="w-5 h-5" />}>
          First-party tracking script with network cloaking to bypass ad-blockers.
          Implements <strong>Identity Resolution</strong> (merging anonymous IDs) 
          and forensic audit logging.
        </TechCard>

        <TechCard title="Intake Console & AI" icon={<Terminal className="w-5 h-5" />}>
          <strong>Generative UI</strong> pipeline ('Vibe Coding') transforming natural language into JSON Schemas.
          Includes an AutoFill Simulator to stress-test forms against specific user personas.
        </TechCard>

        <TechCard title="Security & Infra" icon={<ShieldCheck className="w-5 h-5" />}>
          Cryptographically chained audit logs (SHA-256) for data immutability.
          Field-level PII encryption (AES-256-GCM).
          Idempotent background job processing via Redis/BullMQ.
        </TechCard>

      </div>
    </section>
  );
}

function TechCard({ title, icon, children }: any) {
  return (
    <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all">
      <div className="flex items-center gap-3 mb-4 text-neutral-200 font-medium">
        <div className="text-neutral-400">{icon}</div>
        {title}
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
```

### `C:/projects/lucas-playground/app/components/Timeline.tsx`

```tsx
'use client';

export default function Timeline() {
  return (
    <section className="py-20 border-t border-neutral-900">
      <h3 className="text-sm font-mono text-neutral-500 mb-12 uppercase tracking-wider">
        Engineering Timeline
      </h3>

      <div className="relative border-l border-neutral-800 ml-3 space-y-16">
        
        <TimelineItem 
          year="2025" 
          title="Founding Systems Engineer" 
          company="Stealth Compliance Platform"
          active
        >
          Architected a multi-tenant LegalTech ecosystem in a 20-day sprint. 
          Built a custom PDF parser, a first-party tracking pixel, and an AI magistrate system. 
          Ensured auditability via cryptographic logging and strict schema validation.
        </TimelineItem>

        <TimelineItem 
          year="2025" 
          title="Integration Engineer" 
          company="EZ Systems"
        >
          R&D integration at the intersection of AI and physical compliance. 
          Designed a real-time ADA compliance auditor combining computer vision and LiDAR. 
          Orchestrated QA frameworks for sensor calibration.
        </TimelineItem>

        <TimelineItem 
          year="2023" 
          title="Graduate Research Assistant" 
          company="NASA-Funded Capillary Devices"
        >
          Designed porous ceramic devices for microgravity fluid transport. 
          Built computer-vision pipelines in MATLAB for pore segmentation and morphology quantification. 
          Authored SOPs and managed failure-mode documentation.
        </TimelineItem>

      </div>
    </section>
  );
}

function TimelineItem({ year, title, company, children, active }: any) {
  return (
    <div className="relative pl-12">
      {/* The Dot */}
      <div className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-neutral-900 ${active ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'bg-neutral-800'}`} />
      
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
        <h4 className="text-lg font-medium text-neutral-100">{title}</h4>
        <span className="text-sm text-neutral-500 font-mono">{company} <span className="mx-1">/</span> {year}</span>
      </div>
      
      <p className="text-neutral-400 leading-relaxed text-base max-w-2xl">
        {children}
      </p>
    </div>
  );
}
```

