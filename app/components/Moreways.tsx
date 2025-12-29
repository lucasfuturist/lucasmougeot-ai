'use client';

import { Database, Eye, Terminal, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Moreways() {
  return (
    <section className="py-20 border-t border-neutral-900">
      {/* Header Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h3 className="text-sm font-mono text-neutral-500 mb-2 uppercase tracking-wider">
          Recent Architecture
        </h3>
        <h2 className="text-3xl font-semibold text-white mb-4">The Moreways Ecosystem</h2>
        <p className="text-neutral-400 max-w-2xl leading-relaxed">
          A high-fidelity, multi-tenant system built to demonstrate rapid engineering velocity. 
          Consists of four integrated services sharing a monorepo, strict typing, and a unified CI/CD pipeline.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Card 1: Legal Graph */}
        <TechCard 
          title="Legal Graph Engine" 
          icon={<Database className="w-5 h-5" />} 
          delay={0.1}
        >
          Custom <strong>Stack Machine parser</strong> for regulatory PDFs. 
          Data stored in Postgres using <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-200 text-xs font-mono">ltree</code> for hierarchical queries.
          Hybrid RAG implementation with citation anchoring.
        </TechCard>

        {/* Card 2: AdTech */}
        <TechCard 
          title="AdTech Attribution Pixel" 
          icon={<Eye className="w-5 h-5" />} 
          delay={0.2}
        >
          First-party tracking script with network cloaking to bypass ad-blockers.
          Implements <strong>Identity Resolution</strong> (merging anonymous IDs) 
          and forensic audit logging.
        </TechCard>

        {/* Card 3: Intake */}
        <TechCard 
          title="Intake Console & AI" 
          icon={<Terminal className="w-5 h-5" />} 
          delay={0.3}
        >
          <strong>Generative UI</strong> pipeline ('Vibe Coding') transforming natural language into JSON Schemas.
          Includes an AutoFill Simulator to stress-test forms against specific user personas.
        </TechCard>

        {/* Card 4: Security */}
        <TechCard 
          title="Security & Infra" 
          icon={<ShieldCheck className="w-5 h-5" />} 
          delay={0.4}
        >
          Cryptographically chained audit logs (SHA-256) for data immutability.
          Field-level PII encryption (AES-256-GCM).
          Idempotent background job processing via Redis/BullMQ.
        </TechCard>

      </div>
    </section>
  );
}

function TechCard({ title, icon, children, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all"
    >
      <div className="flex items-center gap-3 mb-4 text-neutral-200 font-medium">
        <div className="text-neutral-400">{icon}</div>
        {title}
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed">
        {children}
      </p>
    </motion.div>
  );
}