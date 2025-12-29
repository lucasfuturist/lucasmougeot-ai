'use client';

import { ArrowRight, Compass, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MougAI() {
  return (
    <section className="py-20 border-t border-neutral-900">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h3 className="text-sm font-mono text-cyan-500 mb-2 uppercase tracking-wider">
          Technical Advisory
        </h3>
        <h2 className="text-4xl font-semibold text-white mb-6">
          MougAI
        </h2>
        <div className="max-w-2xl">
          <p className="text-xl text-neutral-300 font-medium leading-relaxed mb-4">
            Engineering for the undefined.
          </p>
          <p className="text-neutral-400 leading-relaxed text-lg">
            I help teams turn loose requirements into working software. 
            Whether it is validating a hardware-software interface or stabilizing a 
            brittle prototype, I focus on architecture that survives contact with reality.
          </p>
        </div>
      </motion.div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Feasibility */}
        <ServiceCard 
          icon={<Compass className="w-6 h-6" />}
          title="Technical Reality Checks"
          delay={0.1}
        >
          <strong>Feasibility first.</strong> Before writing code, I evaluate the physical and computational constraints of a problem. I help teams decide what <em>should</em> be built, not just what <em>can</em> be built.
        </ServiceCard>

        {/* Card 2: Speed */}
        <ServiceCard 
          icon={<Zap className="w-6 h-6" />}
          title="Rapid Prototyping"
          delay={0.2}
        >
          <strong>Functional MVPs.</strong> leveraging my schema-first architecture (like the Moreways ecosystem), I can stand up fully integrated, multi-tenant web applications in days to test critical hypotheses.
        </ServiceCard>

        {/* Card 3: Stabilization */}
        <ServiceCard 
          icon={<Layers className="w-6 h-6" />}
          title="System Stabilization"
          delay={0.3}
        >
          <strong>Production readiness.</strong> I refactor research code and brittle scripts into robust systems. I add type safety, audit trails, and idempotent processing to ensure reliability at scale.
        </ServiceCard>

      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 pt-8 border-t border-neutral-900 flex items-center justify-between"
      >
        <div className="text-neutral-500 text-sm font-mono">
          // Open for contract work
        </div>
        <a 
          href="mailto:lucas@lucasmougeot.ai?subject=Inquiry"
          className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors"
        >
          Start a Conversation <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

    </section>
  );
}

function ServiceCard({ icon, title, children, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-4 text-white">
        <div className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300 group-hover:text-cyan-400 group-hover:border-cyan-900 transition-colors">
          {icon}
        </div>
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
      <p className="text-neutral-400 leading-relaxed text-base">
        {children}
      </p>
    </motion.div>
  );
}