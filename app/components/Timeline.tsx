'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Timeline() {
  return (
    <section className="py-20 border-t border-neutral-900">
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm font-mono text-neutral-500 mb-12 uppercase tracking-wider"
      >
        Engineering Timeline
      </motion.h3>

      <div className="relative border-l border-neutral-800 ml-3 space-y-16">
        
        {/* CURRENT ROLE */}
        <TimelineItem 
          year="2025" 
          title="Founding Systems Engineer" 
          company="Stealth Compliance Platform"
          active
          delay={0.1}
        >
          Architected a multi-tenant LegalTech ecosystem in a 20-day sprint. 
          Built a custom PDF parser, a first-party tracking pixel, and an AI magistrate system. 
          Ensured auditability via cryptographic logging and strict schema validation.
        </TimelineItem>

        {/* EZ SYSTEMS */}
        <TimelineItem 
          year="2025" 
          title="Integration Engineer" 
          company="EZ Systems"
          delay={0.2}
        >
          R&D integration at the intersection of AI and physical compliance. 
          Designed a real-time ADA compliance auditor combining computer vision and LiDAR. 
          Orchestrated QA frameworks for sensor calibration.
        </TimelineItem>

        {/* NASA */}
        <TimelineItem 
          year="2023" 
          title="Graduate Research Assistant" 
          company="NASA-Funded Capillary Devices"
          delay={0.3}
        >
          Designed porous ceramic devices for microgravity fluid transport. 
          Built computer-vision pipelines in MATLAB for pore segmentation and morphology quantification. 
          Published thesis: {' '}
          <a 
            href="https://digitalcommons.unf.edu/etd/1316/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white border-b border-neutral-700 hover:border-white transition-colors"
          >
            Development and Characterization of Ceramic Devices <ExternalLink className="w-3 h-3" />
          </a>.
        </TimelineItem>

        {/* COMP GEO */}
        <TimelineItem 
          year="2020" 
          title="Undergraduate Researcher" 
          company="Computational Geometry (NSF-Funded)"
          delay={0.4}
        >
          Developed geometric spanner algorithms in C++ using CGAL under strict planarity constraints. 
          Optimized graph connectivity for spatial point clusters. 
          Work contributed to a peer-reviewed publication in the{' '}
          <a 
            href="https://dl.acm.org/doi/10.1145/3582497" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white border-b border-neutral-700 hover:border-white transition-colors"
          >
            ACM Journal of Experimental Algorithmics <ExternalLink className="w-3 h-3" />
          </a>.
        </TimelineItem>

      </div>
    </section>
  );
}

function TimelineItem({ year, title, company, children, active, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-12"
    >
      {/* The Dot */}
      <div className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-neutral-900 ${active ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'bg-neutral-800'}`} />
      
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
        <h4 className="text-lg font-medium text-neutral-100">{title}</h4>
        <span className="text-sm text-neutral-500 font-mono">{company} <span className="mx-1">/</span> {year}</span>
      </div>
      
      <p className="text-neutral-400 leading-relaxed text-base max-w-2xl">
        {children}
      </p>
    </motion.div>
  );
}